import { auditFormSchema, isDisposableEmail } from "@/lib/validations";
import { FormActionResult } from "@/types";
import { COMPANY } from "@/lib/constants";

export async function submitAuditRequest(
  formData: unknown,
): Promise<FormActionResult> {
  // 1. Zod Client-Side Schema Validation
  const parseResult = auditFormSchema.safeParse(formData);

  if (!parseResult.success) {
    const errorMap: Record<string, string[]> = {};
    const fieldErrors = parseResult.error.flatten().fieldErrors;

    for (const [key, messages] of Object.entries(fieldErrors)) {
      if (messages && messages.length > 0) {
        errorMap[key] = messages;
      }
    }

    return {
      success: false,
      message: "Please correct the highlighted errors before submitting.",
      errors: errorMap,
    };
  }

  const data = parseResult.data;

  // 2. Reject disposable / temporary email domains for enterprise diagnostics
  if (isDisposableEmail(data.email)) {
    return {
      success: false,
      message: "Please provide a valid company or corporate email address.",
      errors: {
        email: ["Disposable email domains are not accepted for store audits."],
      },
    };
  }

  // 3. Honeypot check (anti-spam bot mitigation)
  if (data.websiteConfirmEmpty && data.websiteConfirmEmpty.trim() !== "") {
    console.warn("[Spam Bot Flagged] Honeypot field filled.");
    return {
      success: true,
      message: "Your audit request has been registered.",
    };
  }

  // 4. Timing delta check (prevent sub-second bot automated posts)
  if (data.submitTimestamp && data.submitTimestamp > 0) {
    const elapsedSeconds = (Date.now() - data.submitTimestamp) / 1000;
    if (elapsedSeconds < 0.4) {
      console.warn(
        "[Spam Bot Flagged] Form completed suspiciously fast (<0.4s).",
      );
      return {
        success: true,
        message: "Your audit request has been registered.",
      };
    }
  }

  // 5. Submit directly to Hostinger PHP Mail Relay (public/send-audit.php)
  if (typeof window !== "undefined") {
    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    // In production on Hostinger shared hosting, uses relative /send-audit.php
    // When previewing on localhost, routes to relative endpoint or fallback
    const endpoint = isLocalhost ? "/send-audit.php" : "/send-audit.php";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json().catch(() => null);

      if (response.ok && json && json.success !== false) {
        return {
          success: true,
          message:
            json.message ||
            "Thank you! Your Free Store Audit request has been received. Our California operations team will review your catalog within 24–48 hours.",
        };
      } else {
        return {
          success: false,
          message:
            json?.message ||
            "There was an issue processing your request. Please verify your details or schedule directly via Cal.com.",
        };
      }
    } catch (err) {
      console.warn("[Hostinger Relay Notice]", err);
      return {
        success: false,
        message:
          "Unable to connect to the mail relay. Please ensure send-audit.php is uploaded to your hosting server or schedule directly via Cal.com.",
      };
    }
  }

  return {
    success: false,
    message: "Form submission requires a browser environment.",
  };
}
