import { z } from "zod";

export const MONTHLY_SALES_OPTIONS = [
  "Under $10,000",
  "$10k-$50k",
  "$50k-$100k",
  "$100k+",
] as const;

export const MARKETPLACE_OPTIONS = [
  "Amazon",
  "TikTok Shop",
  "eBay",
  "Shopify",
  "Walmart",
] as const;

export const auditFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name (at least 2 characters)")
    .max(100, "Name is too long"),
  companyName: z
    .string()
    .min(2, "Please enter your company or brand name")
    .max(100, "Company name is too long"),
  email: z.string().email("Please provide a valid business email address"),
  phone: z
    .string()
    .min(7, "Please provide a valid phone number")
    .max(30, "Phone number is too long"),
  websiteUrl: z
    .string()
    .min(3, "Please provide your primary store or website URL"),
  marketplaces: z
    .array(z.string())
    .min(
      1,
      "Please select at least one marketplace you operate on or want to launch",
    ),
  monthlySales: z
    .string()
    .min(1, "Please select your approximate monthly sales volume"),
  helpNeeds: z
    .string()
    .min(
      10,
      "Please describe your primary challenges or goals (at least 10 characters)",
    )
    .max(2000, "Message is too long (maximum 2000 characters)"),
  // Spam mitigation: honeypot field must remain empty
  websiteConfirmEmpty: z
    .string()
    .max(0, "Bot detected")
    .optional()
    .or(z.literal("")),
  // Timestamp check
  submitTimestamp: z.number().optional(),
});

export type AuditFormSchemaType = z.infer<typeof auditFormSchema>;

/**
 * Common disposable / temporary email domains to reject for high-value B2B lead generation
 */
const DISPOSABLE_EMAIL_DOMAINS = new Set([
  "mailinator.com",
  "tempmail.com",
  "temp-mail.org",
  "guerrillamail.com",
  "guerrillamail.net",
  "guerrillamail.biz",
  "10minutemail.com",
  "throwawaymail.com",
  "yopmail.com",
  "trashmail.com",
  "fakemailgenerator.com",
  "sharklasers.com",
  "dispostable.com",
  "getairmail.com",
  "mohmal.com",
  "burnermail.io",
]);

/**
 * Check if the given email belongs to a known temporary/disposable domain
 */
export function isDisposableEmail(email: string): boolean {
  if (!email || !email.includes("@")) return false;
  const domain = email.split("@")[1]?.trim().toLowerCase();
  if (!domain) return false;
  return DISPOSABLE_EMAIL_DOMAINS.has(domain);
}

/**
 * Sanitize strings against HTML and script injection
 */
export function sanitizeHtml(str: string): string {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\//g, "&#x2F;");
}

/**
 * Validate an email address format using RFC 5322 standards
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;
  const trimmed = email.trim();
  if (trimmed.length === 0 || trimmed.length > 254) return false;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(trimmed);
}

/**
 * Sanitize and validate external website URLs, stripping unsafe schemes
 */
export function sanitizeUrl(url: string): string {
  if (!url || typeof url !== "string") return "";
  const trimmed = url.trim();
  if (/^(javascript|vbscript|data):/i.test(trimmed)) {
    return "#";
  }
  if (!/^https?:\/\//i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  return trimmed;
}
