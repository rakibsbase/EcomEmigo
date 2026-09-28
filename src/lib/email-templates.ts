import {
  AuditFormSchemaType,
  sanitizeHtml,
  sanitizeUrl,
} from "@/lib/validations";
import { COMPANY } from "@/lib/constants";

export interface EmailRenderResult {
  subject: string;
  html: string;
  text: string;
}

export interface MeetingDetails {
  clientName: string;
  clientEmail: string;
  companyName: string;
  meetingDate: string;
  meetingTime: string;
  meetingTimezone?: string;
  meetingLink?: string;
  hostName?: string;
}

/**
 * Shared CSS styles and header/footer components for bulletproof email client rendering.
 */
const EMAIL_STYLES = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', Helvetica, Arial, sans-serif",
  ink: "#10151C",
  inkMuted: "#4F5662",
  inkSubtle: "#838B96",
  canvas: "#F5F6F8",
  paper: "#FFFFFF",
  border: "#E4E6EA",
  borderSubtle: "#EDEFF2",
  accent: "#1E4FD8",
  accentDeep: "#15379C",
  accentSubtle: "#EFF4FE",
  accentBorder: "#D2E0FC",
  emerald: "#059669",
  emeraldSubtle: "#ECFDF5",
  emeraldBorder: "#A7F3D0",
};

/**
 * =========================================================================
 * 1. INBOUND LEAD BRIEFING (Sent to Admin: caliecomamigo@gmail.com)
 * Reply-To is set directly to the prospect's email.
 * =========================================================================
 */
export function buildAdminLeadEmail(
  data: AuditFormSchemaType,
  submittedAt: string = new Date().toUTCString(),
): EmailRenderResult {
  const safeName = sanitizeHtml(data.fullName);
  const safeCompany = sanitizeHtml(data.companyName);
  const safeEmail = sanitizeHtml(data.email);
  const safePhone = sanitizeHtml(data.phone || "Not provided");
  const rawWebsite = data.websiteUrl ? sanitizeUrl(data.websiteUrl) : "#";
  const safeWebsite = sanitizeHtml(data.websiteUrl || "Not provided");
  const safeSales = sanitizeHtml(data.monthlySales || "Not specified");
  const safeHelpNeeds = data.helpNeeds
    ? sanitizeHtml(data.helpNeeds).replace(/\n/g, "<br />")
    : "Comprehensive store catalog and growth audit.";

  // Render marketplace badges
  const channelBadgesHtml =
    data.marketplaces && data.marketplaces.length > 0
      ? data.marketplaces
          .map(
            (m) =>
              `<span style="display:inline-block;background-color:#EFF4FE;color:#1E4FD8;border:1px solid #D2E0FC;padding:4px 12px;border-radius:9999px;font-size:12px;font-weight:600;margin:2px 6px 4px 0;letter-spacing:0.01em;">${sanitizeHtml(
                m,
              )}</span>`,
          )
          .join("")
      : '<span style="color:#838B96;font-size:13px;font-style:italic;">Not specified</span>';

  const safeChannelsText =
    data.marketplaces && data.marketplaces.length > 0
      ? data.marketplaces.join(", ")
      : "Not specified";

  const subject = `⚡ [New Store Audit Lead] ${data.companyName} — ${data.fullName}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${sanitizeHtml(subject)}</title>
</head>
<body style="margin:0;padding:32px 12px;background-color:${EMAIL_STYLES.canvas};font-family:${EMAIL_STYLES.fontFamily};-webkit-font-smoothing:antialiased;color:${EMAIL_STYLES.ink};line-height:1.6;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" align="center" style="max-width:620px;margin:0 auto;">
    <tr>
      <td>
        <!-- Main Card Container -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="background-color:#FFFFFF;border-radius:16px;border:1px solid ${EMAIL_STYLES.border};overflow:hidden;box-shadow:0 4px 20px rgba(16,21,28,0.04);">
          
          <!-- Top Accent Band -->
          <tr>
            <td style="height:4px;background-color:${EMAIL_STYLES.accent};line-height:4px;font-size:4px;">&nbsp;</td>
          </tr>

          <!-- Header Banner -->
          <tr>
            <td style="background-color:${EMAIL_STYLES.ink};padding:28px 32px;color:#FFFFFF;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tr>
                  <td>
                    <div style="display:inline-block;background-color:rgba(30,79,216,0.22);border:1px solid rgba(30,79,216,0.6);color:#93B4FC;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;padding:4px 12px;border-radius:9999px;margin-bottom:10px;">
                      ⚡ Inbound Store Audit Lead
                    </div>
                    <h1 style="margin:0;font-size:24px;font-weight:700;letter-spacing:-0.02em;color:#FFFFFF;line-height:1.2;">
                      ${safeCompany}
                    </h1>
                    <p style="margin:6px 0 0 0;font-size:13px;color:#838B96;">
                      Submitted by <strong style="color:#FFFFFF;">${safeName}</strong> &bull; ${submittedAt}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding:32px 32px 28px 32px;">
              
              <!-- Section Label -->
              <div style="font-size:11px;font-weight:700;color:${EMAIL_STYLES.inkSubtle};text-transform:uppercase;letter-spacing:0.06em;margin-bottom:12px;">
                Client &amp; Store Dossier
              </div>

              <!-- Data Table -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="border:1px solid ${EMAIL_STYLES.border};border-radius:10px;overflow:hidden;margin-bottom:24px;border-collapse:collapse;">
                <tr>
                  <td style="padding:12px 16px;background-color:#F9FAFB;border-bottom:1px solid ${EMAIL_STYLES.border};width:34%;font-size:13px;font-weight:600;color:${EMAIL_STYLES.inkMuted};">
                    Contact Name
                  </td>
                  <td style="padding:12px 16px;border-bottom:1px solid ${EMAIL_STYLES.border};font-size:14px;color:${EMAIL_STYLES.ink};font-weight:600;">
                    ${safeName}
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#F9FAFB;border-bottom:1px solid ${EMAIL_STYLES.border};font-size:13px;font-weight:600;color:${EMAIL_STYLES.inkMuted};">
                    Company / Brand
                  </td>
                  <td style="padding:12px 16px;border-bottom:1px solid ${EMAIL_STYLES.border};font-size:14px;color:${EMAIL_STYLES.ink};font-weight:600;">
                    ${safeCompany}
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#F9FAFB;border-bottom:1px solid ${EMAIL_STYLES.border};font-size:13px;font-weight:600;color:${EMAIL_STYLES.inkMuted};">
                    Email Address
                  </td>
                  <td style="padding:12px 16px;border-bottom:1px solid ${EMAIL_STYLES.border};font-size:14px;color:${EMAIL_STYLES.ink};">
                    <a href="mailto:${safeEmail}" style="color:${EMAIL_STYLES.accent};font-weight:600;text-decoration:none;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#F9FAFB;border-bottom:1px solid ${EMAIL_STYLES.border};font-size:13px;font-weight:600;color:${EMAIL_STYLES.inkMuted};">
                    Direct Phone
                  </td>
                  <td style="padding:12px 16px;border-bottom:1px solid ${EMAIL_STYLES.border};font-size:14px;color:${EMAIL_STYLES.ink};">
                    <a href="tel:${safePhone}" style="color:${EMAIL_STYLES.ink};text-decoration:none;font-weight:500;">${safePhone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#F9FAFB;border-bottom:1px solid ${EMAIL_STYLES.border};font-size:13px;font-weight:600;color:${EMAIL_STYLES.inkMuted};">
                    Store / Website URL
                  </td>
                  <td style="padding:12px 16px;border-bottom:1px solid ${EMAIL_STYLES.border};font-size:14px;">
                    <a href="${rawWebsite}" target="_blank" rel="noopener noreferrer" style="color:${EMAIL_STYLES.accent};font-weight:600;text-decoration:none;">${safeWebsite} &rarr;</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#F9FAFB;border-bottom:1px solid ${EMAIL_STYLES.border};font-size:13px;font-weight:600;color:${EMAIL_STYLES.inkMuted};">
                    Target Marketplaces
                  </td>
                  <td style="padding:12px 16px;border-bottom:1px solid ${EMAIL_STYLES.border};font-size:13px;">
                    ${channelBadgesHtml}
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#F9FAFB;font-size:13px;font-weight:600;color:${EMAIL_STYLES.inkMuted};">
                    Monthly Sales Tier
                  </td>
                  <td style="padding:12px 16px;font-size:14px;color:${EMAIL_STYLES.ink};font-weight:700;">
                    ${safeSales}
                  </td>
                </tr>
              </table>

              <!-- Goals & Challenges Section -->
              <div style="font-size:11px;font-weight:700;color:${EMAIL_STYLES.inkSubtle};text-transform:uppercase;letter-spacing:0.06em;margin-bottom:8px;">
                Growth Challenges &amp; Specific Needs
              </div>
              <div style="background-color:${EMAIL_STYLES.canvas};border-left:4px solid ${EMAIL_STYLES.accent};padding:18px 20px;border-radius:6px;font-size:14px;color:${EMAIL_STYLES.ink};line-height:1.6;margin-bottom:28px;">
                ${safeHelpNeeds}
              </div>

              <!-- Quick-Action CTA Buttons -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:4px;">
                <tr>
                  <td style="padding-right:12px;padding-bottom:10px;">
                    <a href="mailto:${safeEmail}?subject=Re:%20${encodeURIComponent(
                      COMPANY.name,
                    )}%20Store%20Audit%20—%20${encodeURIComponent(
                      data.companyName,
                    )}" style="display:inline-block;background-color:${EMAIL_STYLES.ink};color:#FFFFFF;text-decoration:none;font-weight:600;font-size:13px;padding:12px 24px;border-radius:9999px;letter-spacing:0.01em;">
                      Reply to ${safeName} &rarr;
                    </a>
                  </td>
                  <td style="padding-right:12px;padding-bottom:10px;">
                    <a href="${rawWebsite}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background-color:#FFFFFF;color:${EMAIL_STYLES.ink};text-decoration:none;font-weight:600;font-size:13px;padding:12px 24px;border-radius:9999px;border:1px solid ${EMAIL_STYLES.border};">
                      Open Storefront &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Card Footer -->
          <tr>
            <td style="padding:18px 32px;background-color:#F9FAFB;border-top:1px solid ${EMAIL_STYLES.border};font-size:12px;color:${EMAIL_STYLES.inkSubtle};">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tr>
                  <td style="color:${EMAIL_STYLES.inkSubtle};">
                    ${COMPANY.name} Operations Dispatch &bull; Lead Routing Active
                  </td>
                  <td align="right" style="color:${EMAIL_STYLES.inkSubtle};">
                    ${submittedAt}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>

        <!-- Outer Footer Subtitle -->
        <div style="text-align:center;font-size:11px;color:${EMAIL_STYLES.inkSubtle};margin-top:16px;">
          This internal dispatch was securely relayed via ${COMPANY.name} Operations Platform.
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `[NEW INBOUND STORE AUDIT LEAD]
==============================================================
Company / Brand: ${data.companyName}
Contact Name:    ${data.fullName}
Email Address:   ${data.email}
Phone:           ${data.phone || "Not provided"}
Website URL:     ${data.websiteUrl}
Marketplaces:    ${safeChannelsText}
Monthly Sales:   ${data.monthlySales}
Submitted At:    ${submittedAt}
==============================================================
GROWTH CHALLENGES & GOALS:
${data.helpNeeds || "Comprehensive store catalog and growth audit."}
==============================================================
Reply to Lead: mailto:${data.email}
Open Store:    ${data.websiteUrl}
`;

  return { subject, html, text };
}

/**
 * =========================================================================
 * 2. CUSTOMER STORE AUDIT CONFIRMATION EMAIL (Sent to Prospect)
 * =========================================================================
 */
export function buildCustomerAuditConfirmationEmail(
  data: AuditFormSchemaType,
): EmailRenderResult {
  const safeName = sanitizeHtml(data.fullName);
  const safeCompany = sanitizeHtml(data.companyName);
  const rawWebsite = data.websiteUrl ? sanitizeUrl(data.websiteUrl) : "#";
  const safeWebsite = sanitizeHtml(data.websiteUrl || "Not provided");
  const safeSales = sanitizeHtml(data.monthlySales || "Not specified");
  const currentYear = new Date().getFullYear();

  const channelBadgesHtml =
    data.marketplaces && data.marketplaces.length > 0
      ? data.marketplaces
          .map(
            (m) =>
              `<span style="display:inline-block;background-color:#EFF4FE;color:#1E4FD8;border:1px solid #D2E0FC;padding:4px 12px;border-radius:9999px;font-size:12px;font-weight:600;margin:2px 6px 4px 0;letter-spacing:0.01em;">${sanitizeHtml(
                m,
              )}</span>`,
          )
          .join("")
      : '<span style="color:#838B96;font-size:13px;font-style:italic;">Not specified</span>';

  const safeChannelsText =
    data.marketplaces && data.marketplaces.length > 0
      ? data.marketplaces.join(", ")
      : "Not specified";

  const subject = `We've received your Store Audit request — ${COMPANY.name}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${sanitizeHtml(subject)}</title>
</head>
<body style="margin:0;padding:32px 12px;background-color:${EMAIL_STYLES.canvas};font-family:${EMAIL_STYLES.fontFamily};-webkit-font-smoothing:antialiased;color:${EMAIL_STYLES.ink};line-height:1.6;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" align="center" style="max-width:600px;margin:0 auto;">
    <tr>
      <td>
        <!-- Main Card Container -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="background-color:#FFFFFF;border-radius:16px;border:1px solid ${EMAIL_STYLES.border};overflow:hidden;box-shadow:0 4px 20px rgba(16,21,28,0.04);">
          
          <!-- Top Accent Band -->
          <tr>
            <td style="height:4px;background-color:${EMAIL_STYLES.accent};line-height:4px;font-size:4px;">&nbsp;</td>
          </tr>

          <!-- Header Banner -->
          <tr>
            <td style="background-color:${EMAIL_STYLES.ink};padding:32px 32px 28px 32px;color:#FFFFFF;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tr>
                  <td>
                    <div style="display:inline-block;background-color:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:#FFFFFF;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;padding:4px 12px;border-radius:9999px;margin-bottom:12px;">
                      Free Multi-Marketplace Store Audit
                    </div>
                    <h1 style="margin:0;font-size:24px;font-weight:700;letter-spacing:-0.02em;color:#FFFFFF;line-height:1.2;">
                      ${COMPANY.name}
                    </h1>
                    <p style="margin:8px 0 0 0;font-size:13px;color:#838B96;line-height:1.4;">
                      ${COMPANY.tagline} &bull; ${COMPANY.location}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding:32px 32px 28px 32px;">
              
              <!-- Personal Greeting -->
              <h2 style="margin:0 0 12px 0;font-size:18px;font-weight:700;color:${EMAIL_STYLES.ink};letter-spacing:-0.01em;">
                Hello ${safeName},
              </h2>

              <p style="margin:0 0 20px 0;font-size:14px;color:${EMAIL_STYLES.inkMuted};line-height:1.6;">
                Thank you for requesting an Enterprise Store Audit for <strong style="color:${EMAIL_STYLES.ink};">${safeCompany}</strong>. Our California operations team has received your submission and has queued your store catalog for multi-marketplace diagnostic review.
              </p>

              <!-- Audit Dossier Box -->
              <div style="border:1px solid ${EMAIL_STYLES.border};border-radius:10px;overflow:hidden;margin-bottom:24px;">
                <div style="background-color:#F9FAFB;padding:10px 16px;border-bottom:1px solid ${EMAIL_STYLES.border};font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:${EMAIL_STYLES.inkSubtle};">
                  Registered Audit Scope
                </div>
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 16px;border-bottom:1px solid ${EMAIL_STYLES.border};font-size:13px;color:${EMAIL_STYLES.inkMuted};width:35%;font-weight:600;">
                      Brand / Store
                    </td>
                    <td style="padding:10px 16px;border-bottom:1px solid ${EMAIL_STYLES.border};font-size:13px;color:${EMAIL_STYLES.ink};font-weight:600;">
                      ${safeCompany}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 16px;border-bottom:1px solid ${EMAIL_STYLES.border};font-size:13px;color:${EMAIL_STYLES.inkMuted};font-weight:600;">
                      Primary Website
                    </td>
                    <td style="padding:10px 16px;border-bottom:1px solid ${EMAIL_STYLES.border};font-size:13px;">
                      <a href="${rawWebsite}" target="_blank" rel="noopener noreferrer" style="color:${EMAIL_STYLES.accent};text-decoration:none;font-weight:600;">${safeWebsite}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 16px;border-bottom:1px solid ${EMAIL_STYLES.border};font-size:13px;color:${EMAIL_STYLES.inkMuted};font-weight:600;">
                      Focus Channels
                    </td>
                    <td style="padding:10px 16px;border-bottom:1px solid ${EMAIL_STYLES.border};font-size:13px;">
                      ${channelBadgesHtml}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 16px;font-size:13px;color:${EMAIL_STYLES.inkMuted};font-weight:600;">
                      Monthly Volume
                    </td>
                    <td style="padding:10px 16px;font-size:13px;color:${EMAIL_STYLES.ink};font-weight:600;">
                      ${safeSales}
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Diagnostic Timeline / What Happens Next -->
              <div style="background-color:#F9FAFB;border:1px solid ${EMAIL_STYLES.border};border-radius:10px;padding:22px;margin-bottom:24px;">
                <div style="font-size:11px;font-weight:700;color:${EMAIL_STYLES.inkSubtle};text-transform:uppercase;letter-spacing:0.06em;margin-bottom:16px;">
                  Diagnostic Roadmap &amp; Delivery Timeline
                </div>

                <!-- Step 1 -->
                <div style="margin-bottom:16px;padding-left:14px;border-left:3px solid ${EMAIL_STYLES.accent};">
                  <div style="font-size:13px;font-weight:700;color:${EMAIL_STYLES.ink};margin-bottom:2px;">
                    1. Catalog &amp; Buy-Box Diagnostics <span style="font-weight:400;color:${EMAIL_STYLES.inkSubtle};font-size:12px;">(Hours 0–12)</span>
                  </div>
                  <div style="font-size:12px;color:${EMAIL_STYLES.inkMuted};line-height:1.5;">
                    Listing quality scores, suppressed ASIN detection, keyword indexing depth, and cross-channel pricing parity.
                  </div>
                </div>

                <!-- Step 2 -->
                <div style="margin-bottom:16px;padding-left:14px;border-left:3px solid ${EMAIL_STYLES.accent};">
                  <div style="font-size:13px;font-weight:700;color:${EMAIL_STYLES.ink};margin-bottom:2px;">
                    2. Fulfillment &amp; Margin Leak Analysis <span style="font-weight:400;color:${EMAIL_STYLES.inkSubtle};font-size:12px;">(Hours 12–24)</span>
                  </div>
                  <div style="font-size:12px;color:${EMAIL_STYLES.inkMuted};line-height:1.5;">
                    FBA/WFS inventory fee leaks, 3PL routing efficiencies, and ad spend efficiency benchmarks (ACOS &amp; TACOS).
                  </div>
                </div>

                <!-- Step 3 -->
                <div style="padding-left:14px;border-left:3px solid ${EMAIL_STYLES.accent};">
                  <div style="font-size:13px;font-weight:700;color:${EMAIL_STYLES.ink};margin-bottom:2px;">
                    3. Executive Growth Briefing <span style="font-weight:400;color:${EMAIL_STYLES.inkSubtle};font-size:12px;">(Within 24–48 Hours)</span>
                  </div>
                  <div style="font-size:12px;color:${EMAIL_STYLES.inkMuted};line-height:1.5;">
                    A senior operations specialist delivers your tailored growth roadmap with immediate revenue unlock opportunities.
                  </div>
                </div>
              </div>

              <!-- Confidentiality Callout -->
              <div style="background-color:${EMAIL_STYLES.accentSubtle};border-left:3px solid ${EMAIL_STYLES.accent};border-radius:6px;padding:14px 16px;font-size:12px;color:${EMAIL_STYLES.accentDeep};line-height:1.6;margin-bottom:24px;">
                <strong>Mutual Confidentiality:</strong> All catalog metrics, revenue volumes, and proprietary operational details shared are strictly protected under our Mutual Non-Disclosure Agreement.
              </div>

              <!-- Expedited Strategy Session CTA -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="background-color:${EMAIL_STYLES.canvas};border:1px solid ${EMAIL_STYLES.border};border-radius:10px;padding:24px 20px;text-align:center;margin-bottom:8px;">
                <tr>
                  <td align="center">
                    <div style="font-size:14px;font-weight:700;color:${EMAIL_STYLES.ink};margin-bottom:6px;">
                      Need an immediate walk-through with our operations strategist?
                    </div>
                    <div style="font-size:13px;color:${EMAIL_STYLES.inkMuted};margin-bottom:16px;max-width:440px;line-height:1.5;">
                      Skip the queue and reserve a live 15-minute diagnostic walk-through directly on our operations calendar.
                    </div>
                    <div>
                      <a href="${COMPANY.calLink}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background-color:${EMAIL_STYLES.accent};color:#FFFFFF;text-decoration:none;font-weight:700;font-size:14px;padding:14px 32px;border-radius:9999px;letter-spacing:0.02em;box-shadow:0 4px 12px rgba(30,79,216,0.25);">
                        Schedule 15-Min Intro Session &rarr;
                      </a>
                    </div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Corporate Footer -->
          <tr>
            <td style="padding:28px 32px;background-color:#F9FAFB;border-top:1px solid ${EMAIL_STYLES.border};font-size:12px;color:${EMAIL_STYLES.inkSubtle};text-align:center;line-height:1.7;">
              <strong style="color:${EMAIL_STYLES.ink};font-size:13px;">${COMPANY.legalName}</strong><br>
              ${COMPANY.fullAddress}, ${COMPANY.location}<br>
              Direct: <a href="tel:${COMPANY.phone}" style="color:${EMAIL_STYLES.ink};text-decoration:none;">${COMPANY.phone}</a> &bull; Inquiries: <a href="mailto:${COMPANY.email}" style="color:${EMAIL_STYLES.accent};text-decoration:none;">${COMPANY.email}</a><br>
              Website: <a href="${COMPANY.siteUrl}" target="_blank" rel="noopener noreferrer" style="color:${EMAIL_STYLES.accent};text-decoration:none;">${COMPANY.siteUrl}</a><br>
              <span style="color:${EMAIL_STYLES.inkSubtle};font-size:11px;">&copy; ${currentYear} ${COMPANY.legalName}. All rights reserved.</span>
            </td>
          </tr>

        </table>

        <div style="text-align:center;font-size:11px;color:${EMAIL_STYLES.inkSubtle};margin-top:16px;">
          You received this email because you requested a Free Store Audit on ${COMPANY.siteUrl}.
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `Hello ${data.fullName},

Thank you for requesting a Free Store Audit for ${data.companyName} from ${COMPANY.name}.

Our senior California operations team has received your submission and has queued your store catalog for multi-marketplace diagnostic review.

AUDIT SCOPE DETAILS:
- Brand / Store:     ${data.companyName}
- Website:           ${data.websiteUrl}
- Target Channels:   ${safeChannelsText}
- Monthly Volume:    ${data.monthlySales}

WHAT HAPPENS NEXT:
1. Catalog & Buy-Box Diagnostics (Hours 0–12): Listing quality scores, suppressed ASINs, indexing depth, and pricing parity.
2. Fulfillment & Margin Audit (Hours 12–24): FBA/WFS inventory fee leaks, 3PL routing, and ad spend efficiency (ACOS/TACOS).
3. Executive Growth Briefing (Within 24–48 Hours): A senior operations specialist delivers your comprehensive audit report.

MUTUAL CONFIDENTIALITY:
All catalog data, metrics, and business details shared are strictly protected under our Mutual Non-Disclosure Agreement.

SCHEDULE AN IMMEDIATE WALK-THROUGH:
If you need an immediate walk-through with our operations strategist, reserve 15 minutes directly:
${COMPANY.calLink}

--------------------------------------------------------------
${COMPANY.legalName}
${COMPANY.fullAddress}, ${COMPANY.location}
Direct: ${COMPANY.phone} | Email: ${COMPANY.email}
Website: ${COMPANY.siteUrl}
`;

  return { subject, html, text };
}

/**
 * =========================================================================
 * 3. PRE-MEETING NOTIFICATION / REMINDER EMAIL (Sent Before Meeting Starts)
 * Sent to client ahead of their scheduled 15-minute diagnostic strategy call.
 * =========================================================================
 */
export function buildPreMeetingReminderEmail(
  details: MeetingDetails,
): EmailRenderResult {
  const safeName = sanitizeHtml(details.clientName);
  const safeCompany = sanitizeHtml(details.companyName);
  const safeDate = sanitizeHtml(details.meetingDate);
  const safeTime = sanitizeHtml(details.meetingTime);
  const safeTz = sanitizeHtml(details.meetingTimezone || "PST / Local Time");
  const meetingUrl = details.meetingLink
    ? sanitizeUrl(details.meetingLink)
    : COMPANY.calLink;
  const safeHost = sanitizeHtml(
    details.hostName || "EcomAmigo Senior Operations Team",
  );
  const currentYear = new Date().getFullYear();

  const subject = `📅 Reminder: Your EcomAmigo Strategy Session is Coming Up — ${safeDate} at ${safeTime}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${sanitizeHtml(subject)}</title>
</head>
<body style="margin:0;padding:32px 12px;background-color:${EMAIL_STYLES.canvas};font-family:${EMAIL_STYLES.fontFamily};-webkit-font-smoothing:antialiased;color:${EMAIL_STYLES.ink};line-height:1.6;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" align="center" style="max-width:600px;margin:0 auto;">
    <tr>
      <td>
        <!-- Main Card Container -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="background-color:#FFFFFF;border-radius:16px;border:1px solid ${EMAIL_STYLES.border};overflow:hidden;box-shadow:0 4px 20px rgba(16,21,28,0.04);">
          
          <!-- Top Accent Band -->
          <tr>
            <td style="height:4px;background-color:${EMAIL_STYLES.accent};line-height:4px;font-size:4px;">&nbsp;</td>
          </tr>

          <!-- Header Banner -->
          <tr>
            <td style="background-color:${EMAIL_STYLES.ink};padding:32px 32px 28px 32px;color:#FFFFFF;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tr>
                  <td>
                    <div style="display:inline-block;background-color:rgba(30,79,216,0.25);border:1px solid rgba(147,180,252,0.4);color:#93B4FC;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;padding:4px 12px;border-radius:9999px;margin-bottom:12px;">
                      📅 Diagnostic Session Reminder
                    </div>
                    <h1 style="margin:0;font-size:24px;font-weight:700;letter-spacing:-0.02em;color:#FFFFFF;line-height:1.2;">
                      Upcoming Strategy Meeting
                    </h1>
                    <p style="margin:8px 0 0 0;font-size:13px;color:#838B96;line-height:1.4;">
                      ${COMPANY.name} &bull; 15-Minute Multi-Marketplace Growth Briefing
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding:32px 32px 28px 32px;">
              
              <!-- Personal Greeting -->
              <h2 style="margin:0 0 12px 0;font-size:18px;font-weight:700;color:${EMAIL_STYLES.ink};letter-spacing:-0.01em;">
                Hello ${safeName},
              </h2>

              <p style="margin:0 0 20px 0;font-size:14px;color:${EMAIL_STYLES.inkMuted};line-height:1.6;">
                This is a quick reminder that your upcoming 15-minute marketplace diagnostic session for <strong style="color:${EMAIL_STYLES.ink};">${safeCompany}</strong> is scheduled to begin soon.
              </p>

              <!-- Session Details Card -->
              <div style="background-color:${EMAIL_STYLES.accentSubtle};border:1px solid ${EMAIL_STYLES.accentBorder};border-radius:12px;padding:20px;margin-bottom:24px;">
                <div style="font-size:11px;font-weight:700;color:${EMAIL_STYLES.accent};text-transform:uppercase;letter-spacing:0.06em;margin-bottom:12px;">
                  Session Overview &amp; Access Details
                </div>
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:6px 0;font-size:13px;color:${EMAIL_STYLES.inkMuted};width:32%;font-weight:600;">
                      Date &amp; Time:
                    </td>
                    <td style="padding:6px 0;font-size:14px;color:${EMAIL_STYLES.ink};font-weight:700;">
                      ${safeDate} at ${safeTime} <span style="font-weight:400;font-size:12px;color:${EMAIL_STYLES.inkSubtle};">(${safeTz})</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;font-size:13px;color:${EMAIL_STYLES.inkMuted};font-weight:600;">
                      Brand / Store:
                    </td>
                    <td style="padding:6px 0;font-size:13px;color:${EMAIL_STYLES.ink};font-weight:600;">
                      ${safeCompany}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;font-size:13px;color:${EMAIL_STYLES.inkMuted};font-weight:600;">
                      Host / Lead:
                    </td>
                    <td style="padding:6px 0;font-size:13px;color:${EMAIL_STYLES.ink};">
                      ${safeHost}
                    </td>
                  </tr>
                </table>

                <!-- Main Join Button -->
                <div style="margin-top:16px;text-align:center;">
                  <a href="${meetingUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background-color:${EMAIL_STYLES.accent};color:#FFFFFF;text-decoration:none;font-weight:700;font-size:14px;padding:12px 32px;border-radius:9999px;letter-spacing:0.01em;box-shadow:0 4px 12px rgba(30,79,216,0.25);">
                    Join Video Meeting Room &rarr;
                  </a>
                </div>
              </div>

              <!-- Meeting Agenda & Preparation Checklist -->
              <div style="background-color:#F9FAFB;border:1px solid ${EMAIL_STYLES.border};border-radius:10px;padding:22px;margin-bottom:24px;">
                <div style="font-size:11px;font-weight:700;color:${EMAIL_STYLES.inkSubtle};text-transform:uppercase;letter-spacing:0.06em;margin-bottom:14px;">
                  What We Will Cover In 15 Minutes
                </div>

                <div style="margin-bottom:12px;display:flex;align-items:flex-start;">
                  <span style="display:inline-block;width:18px;height:18px;background-color:#ECFDF5;color:#059669;border-radius:9999px;text-align:center;line-height:18px;font-size:11px;font-weight:700;margin-right:10px;flex-shrink:0;">✓</span>
                  <div style="font-size:13px;color:${EMAIL_STYLES.ink};line-height:1.5;">
                    <strong>Catalog &amp; Buy Box Health:</strong> Diagnosing suppressed ASINs, search indexing gaps, and Buy Box ownership.
                  </div>
                </div>

                <div style="margin-bottom:12px;display:flex;align-items:flex-start;">
                  <span style="display:inline-block;width:18px;height:18px;background-color:#ECFDF5;color:#059669;border-radius:9999px;text-align:center;line-height:18px;font-size:11px;font-weight:700;margin-right:10px;flex-shrink:0;">✓</span>
                  <div style="font-size:13px;color:${EMAIL_STYLES.ink};line-height:1.5;">
                    <strong>PPC &amp; Margin Efficiency:</strong> Identifying wasted ad spend, negative keyword targets, and TACoS guardrails.
                  </div>
                </div>

                <div style="display:flex;align-items:flex-start;">
                  <span style="display:inline-block;width:18px;height:18px;background-color:#ECFDF5;color:#059669;border-radius:9999px;text-align:center;line-height:18px;font-size:11px;font-weight:700;margin-right:10px;flex-shrink:0;">✓</span>
                  <div style="font-size:13px;color:${EMAIL_STYLES.ink};line-height:1.5;">
                    <strong>Growth Action Plan:</strong> Immediate 30-day operational priorities to increase sell-through across your channels.
                  </div>
                </div>
              </div>

              <!-- Helpful Tip for the Call -->
              <p style="font-size:13px;color:${EMAIL_STYLES.inkMuted};line-height:1.5;margin:0 0 20px 0;">
                <em>💡 Tip: If you have your Seller Central, TikTok Shop, or Shopify dashboard open during our call, we can walk through specific ASIN diagnostics together in real time.</em>
              </p>

              <!-- Need to Reschedule Option -->
              <div style="border-top:1px solid ${EMAIL_STYLES.border};padding-top:16px;font-size:12px;color:${EMAIL_STYLES.inkSubtle};line-height:1.5;">
                Need to reschedule or adjust the time? You can easily choose a new slot directly on our <a href="${COMPANY.calLink}" target="_blank" rel="noopener noreferrer" style="color:${EMAIL_STYLES.accent};font-weight:600;text-decoration:none;">Operations Booking Calendar &rarr;</a>
              </div>

            </td>
          </tr>

          <!-- Corporate Footer -->
          <tr>
            <td style="padding:28px 32px;background-color:#F9FAFB;border-top:1px solid ${EMAIL_STYLES.border};font-size:12px;color:${EMAIL_STYLES.inkSubtle};text-align:center;line-height:1.7;">
              <strong style="color:${EMAIL_STYLES.ink};font-size:13px;">${COMPANY.legalName}</strong><br>
              ${COMPANY.fullAddress}, ${COMPANY.location}<br>
              Direct: <a href="tel:${COMPANY.phone}" style="color:${EMAIL_STYLES.ink};text-decoration:none;">${COMPANY.phone}</a> &bull; Inquiries: <a href="mailto:${COMPANY.email}" style="color:${EMAIL_STYLES.accent};text-decoration:none;">${COMPANY.email}</a><br>
              Website: <a href="${COMPANY.siteUrl}" target="_blank" rel="noopener noreferrer" style="color:${EMAIL_STYLES.accent};text-decoration:none;">${COMPANY.siteUrl}</a><br>
              <span style="color:${EMAIL_STYLES.inkSubtle};font-size:11px;">&copy; ${currentYear} ${COMPANY.legalName}. All rights reserved.</span>
            </td>
          </tr>

        </table>

        <div style="text-align:center;font-size:11px;color:${EMAIL_STYLES.inkSubtle};margin-top:16px;">
          You are receiving this meeting reminder for your scheduled appointment with ${COMPANY.name}.
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `Hello ${details.clientName},

This is a reminder that your 15-minute marketplace diagnostic strategy session with ${COMPANY.name} for ${details.companyName} is coming up.

SESSION DETAILS:
- Date & Time:   ${details.meetingDate} at ${details.meetingTime} (${details.meetingTimezone || "PST"})
- Brand / Store: ${details.companyName}
- Meeting Link:  ${meetingUrl}
- Host:          ${details.hostName || "EcomAmigo Operations Team"}

WHAT WE WILL COVER:
1. Catalog & Buy Box Health (suppressed ASINs, indexing depth, Buy Box win rates)
2. PPC & TACoS Efficiency (waste reduction, target TACoS guardrails)
3. 30-Day Growth Roadmap (tailored operational priorities)

JOIN THE MEETING:
${meetingUrl}

Need to reschedule? Choose a new time at:
${COMPANY.calLink}

--------------------------------------------------------------
${COMPANY.legalName}
${COMPANY.fullAddress}, ${COMPANY.location}
Direct: ${COMPANY.phone} | Email: ${COMPANY.email}
Website: ${COMPANY.siteUrl}
`;

  return { subject, html, text };
}

/**
 * =========================================================================
 * 4. MEETING BOOKING CONFIRMATION EMAIL (Sent immediately upon Cal.com booking)
 * =========================================================================
 */
export function buildMeetingConfirmationEmail(
  details: MeetingDetails,
): EmailRenderResult {
  const safeName = sanitizeHtml(details.clientName);
  const safeCompany = sanitizeHtml(details.companyName);
  const safeDate = sanitizeHtml(details.meetingDate);
  const safeTime = sanitizeHtml(details.meetingTime);
  const safeTz = sanitizeHtml(details.meetingTimezone || "PST / Local Time");
  const meetingUrl = details.meetingLink
    ? sanitizeUrl(details.meetingLink)
    : COMPANY.calLink;
  const currentYear = new Date().getFullYear();

  const subject = `Confirmed: Your 15-Min Store Diagnostic Call with ${COMPANY.name} — ${safeDate}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${sanitizeHtml(subject)}</title>
</head>
<body style="margin:0;padding:32px 12px;background-color:${EMAIL_STYLES.canvas};font-family:${EMAIL_STYLES.fontFamily};-webkit-font-smoothing:antialiased;color:${EMAIL_STYLES.ink};line-height:1.6;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" align="center" style="max-width:600px;margin:0 auto;">
    <tr>
      <td>
        <!-- Main Card Container -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="background-color:#FFFFFF;border-radius:16px;border:1px solid ${EMAIL_STYLES.border};overflow:hidden;box-shadow:0 4px 20px rgba(16,21,28,0.04);">
          
          <!-- Top Accent Band -->
          <tr>
            <td style="height:4px;background-color:${EMAIL_STYLES.emerald};line-height:4px;font-size:4px;">&nbsp;</td>
          </tr>

          <!-- Header Banner -->
          <tr>
            <td style="background-color:${EMAIL_STYLES.ink};padding:32px 32px 28px 32px;color:#FFFFFF;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tr>
                  <td>
                    <div style="display:inline-block;background-color:rgba(5,150,105,0.25);border:1px solid rgba(167,243,208,0.4);color:#6EE7B7;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;padding:4px 12px;border-radius:9999px;margin-bottom:12px;">
                      ✓ Meeting Confirmed
                    </div>
                    <h1 style="margin:0;font-size:24px;font-weight:700;letter-spacing:-0.02em;color:#FFFFFF;line-height:1.2;">
                      Diagnostic Session Confirmed
                    </h1>
                    <p style="margin:8px 0 0 0;font-size:13px;color:#838B96;line-height:1.4;">
                      ${COMPANY.name} &bull; ${safeCompany}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding:32px 32px 28px 32px;">
              
              <!-- Personal Greeting -->
              <h2 style="margin:0 0 12px 0;font-size:18px;font-weight:700;color:${EMAIL_STYLES.ink};letter-spacing:-0.01em;">
                Hello ${safeName},
              </h2>

              <p style="margin:0 0 20px 0;font-size:14px;color:${EMAIL_STYLES.inkMuted};line-height:1.6;">
                Your 15-minute marketplace diagnostic session is locked in. We have reserved our senior operations lead to walk through your store catalog and growth strategy.
              </p>

              <!-- Session Details Card -->
              <div style="background-color:#F9FAFB;border:1px solid ${EMAIL_STYLES.border};border-radius:12px;padding:20px;margin-bottom:24px;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:8px 0;font-size:13px;color:${EMAIL_STYLES.inkMuted};width:32%;font-weight:600;">
                      Date &amp; Time:
                    </td>
                    <td style="padding:8px 0;font-size:14px;color:${EMAIL_STYLES.ink};font-weight:700;">
                      ${safeDate} at ${safeTime} <span style="font-weight:400;font-size:12px;color:${EMAIL_STYLES.inkSubtle};">(${safeTz})</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;font-size:13px;color:${EMAIL_STYLES.inkMuted};font-weight:600;">
                      Brand / Store:
                    </td>
                    <td style="padding:8px 0;font-size:13px;color:${EMAIL_STYLES.ink};font-weight:600;">
                      ${safeCompany}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;font-size:13px;color:${EMAIL_STYLES.inkMuted};font-weight:600;">
                      Meeting Access:
                    </td>
                    <td style="padding:8px 0;font-size:13px;">
                      <a href="${meetingUrl}" target="_blank" rel="noopener noreferrer" style="color:${EMAIL_STYLES.accent};font-weight:600;text-decoration:none;">Open Meeting Room &rarr;</a>
                    </td>
                  </tr>
                </table>

                <div style="margin-top:16px;text-align:center;">
                  <a href="${meetingUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background-color:${EMAIL_STYLES.accent};color:#FFFFFF;text-decoration:none;font-weight:700;font-size:14px;padding:12px 32px;border-radius:9999px;letter-spacing:0.01em;box-shadow:0 4px 12px rgba(30,79,216,0.25);">
                    Join Video Meeting Room &rarr;
                  </a>
                </div>
              </div>

              <!-- Confidentiality Note -->
              <div style="background-color:${EMAIL_STYLES.accentSubtle};border-left:3px solid ${EMAIL_STYLES.accent};border-radius:6px;padding:14px 16px;font-size:12px;color:${EMAIL_STYLES.accentDeep};line-height:1.6;margin-bottom:20px;">
                <strong>Mutual Confidentiality:</strong> All business metrics, catalog data, and strategic discussions are strictly protected under our Mutual Non-Disclosure Agreement.
              </div>

              <p style="font-size:13px;color:${EMAIL_STYLES.inkMuted};line-height:1.5;margin:0;">
                We look forward to speaking with you! If you have any questions ahead of time, simply reply directly to this email.
              </p>

            </td>
          </tr>

          <!-- Corporate Footer -->
          <tr>
            <td style="padding:28px 32px;background-color:#F9FAFB;border-top:1px solid ${EMAIL_STYLES.border};font-size:12px;color:${EMAIL_STYLES.inkSubtle};text-align:center;line-height:1.7;">
              <strong style="color:${EMAIL_STYLES.ink};font-size:13px;">${COMPANY.legalName}</strong><br>
              ${COMPANY.fullAddress}, ${COMPANY.location}<br>
              Direct: <a href="tel:${COMPANY.phone}" style="color:${EMAIL_STYLES.ink};text-decoration:none;">${COMPANY.phone}</a> &bull; Inquiries: <a href="mailto:${COMPANY.email}" style="color:${EMAIL_STYLES.accent};text-decoration:none;">${COMPANY.email}</a><br>
              Website: <a href="${COMPANY.siteUrl}" target="_blank" rel="noopener noreferrer" style="color:${EMAIL_STYLES.accent};text-decoration:none;">${COMPANY.siteUrl}</a><br>
              <span style="color:${EMAIL_STYLES.inkSubtle};font-size:11px;">&copy; ${currentYear} ${COMPANY.legalName}. All rights reserved.</span>
            </td>
          </tr>

        </table>

        <div style="text-align:center;font-size:11px;color:${EMAIL_STYLES.inkSubtle};margin-top:16px;">
          You received this email because you scheduled a diagnostic call with ${COMPANY.name}.
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `Hello ${details.clientName},

Your 15-minute marketplace diagnostic session with ${COMPANY.name} is confirmed.

SESSION DETAILS:
- Date & Time:   ${details.meetingDate} at ${details.meetingTime} (${details.meetingTimezone || "PST"})
- Brand / Store: ${details.companyName}
- Meeting Link:  ${meetingUrl}

MUTUAL CONFIDENTIALITY:
All shared metrics and strategic discussions are strictly protected under our Mutual Non-Disclosure Agreement.

JOIN THE MEETING:
${meetingUrl}

--------------------------------------------------------------
${COMPANY.legalName}
${COMPANY.fullAddress}, ${COMPANY.location}
Direct: ${COMPANY.phone} | Email: ${COMPANY.email}
Website: ${COMPANY.siteUrl}
`;

  return { subject, html, text };
}
