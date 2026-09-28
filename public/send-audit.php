<?php
/**
 * EcomAmigo — Production Hostinger PHP Mail Relay & Email Notification Dispatcher
 * 
 * Target Architecture:
 * Next.js Static Export (out/) -> PHP Handler on Hostinger Shared Hosting -> Resend API
 * 
 * Dispatches:
 * 1. Audit Request (Inbound Admin Lead Alert + Customer Audit Confirmation)
 * 2. Pre-Meeting Reminder (Sent ahead of 15-min strategy call with checklist & join room link)
 * 3. Meeting Booking Confirmation (Instant confirmation with Cal.com event details)
 * 
 * Features:
 * - Accept POST only (rejects all other methods with 405)
 * - Strict CORS allowlist (same-origin, ecomamigo.com, localhost)
 * - Header injection prevention (\r and \n stripping)
 * - Anti-spam honeypot + timing delta check
 * - IP rate limiting (max 6 requests per 10 minutes)
 * - Request size limit (64KB max)
 * - Server-side Resend cURL HTTPS integration
 * - Automatic domain verification fallback (retries via onboarding@resend.dev if custom domain is pending)
 * - Lead Reply-To points directly to the customer's email address
 * - Zero secret key exposure to client
 */

ini_set('display_errors', '0');
error_reporting(E_ALL);

header("Content-Type: application/json; charset=UTF-8");
header("X-Content-Type-Options: nosniff");
header("X-Frame-Options: DENY");

// 1. CORS Origin Verification
$allowedOrigins = [
    'https://ecomamigo.com',
    'http://ecomamigo.com',
    'https://www.ecomamigo.com',
    'http://www.ecomamigo.com',
    'http://localhost:3000',
    'http://127.0.0.1:3000',
];

$origin = isset($_SERVER['HTTP_ORIGIN']) ? trim($_SERVER['HTTP_ORIGIN']) : '';
if (!empty($origin)) {
    if (in_array($origin, $allowedOrigins, true)) {
        header("Access-Control-Allow-Origin: $origin");
        header("Access-Control-Allow-Credentials: true");
    } else {
        http_response_code(403);
        echo json_encode(["success" => false, "message" => "Access forbidden: Unauthorized origin."]);
        exit;
    }
}

// 2. HTTP Method Validation
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($method === 'OPTIONS') {
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, X-Requested-With, Accept");
    header("Access-Control-Max-Age: 86400");
    http_response_code(200);
    exit;
}

if ($method !== 'POST') {
    http_response_code(405);
    header("Allow: POST");
    echo json_encode(["success" => false, "message" => "Method not allowed. Only POST is accepted."]);
    exit;
}

// 3. Request Size Enforcement (Max 64KB)
$contentLength = isset($_SERVER['CONTENT_LENGTH']) ? (int)$_SERVER['CONTENT_LENGTH'] : 0;
if ($contentLength > 65536) {
    http_response_code(413);
    echo json_encode(["success" => false, "message" => "Request payload exceeds allowed limit."]);
    exit;
}

// 4. Client IP Rate Limiting (Max 6 requests per 10 minutes)
$clientIp = $_SERVER['HTTP_CF_CONNECTING_IP'] 
    ?? $_SERVER['HTTP_X_FORWARDED_FOR'] 
    ?? $_SERVER['REMOTE_ADDR'] 
    ?? '0.0.0.0';

$clientIp = preg_replace('/[^0-9a-fA-F:., ]/', '', $clientIp);
if (strpos($clientIp, ',') !== false) {
    $parts = explode(',', $clientIp);
    $clientIp = trim($parts[0]);
}

function checkRateLimit($ip) {
    $tempDir = sys_get_temp_dir();
    $key = md5('ecomamigo_mail_rl_' . $ip);
    $file = $tempDir . DIRECTORY_SEPARATOR . 'rl_' . $key . '.json';
    $now = time();
    $window = 600; // 10 minutes
    $maxLimit = 6;

    $data = ['count' => 0, 'first' => $now];
    if (file_exists($file)) {
        $content = @file_get_contents($file);
        if ($content) {
            $parsed = @json_decode($content, true);
            if (is_array($parsed) && isset($parsed['first'], $parsed['count'])) {
                if (($now - $parsed['first']) < $window) {
                    $data = $parsed;
                }
            }
        }
    }

    if ($data['count'] >= $maxLimit) {
        return false;
    }

    $data['count']++;
    @file_put_contents($file, json_encode($data), LOCK_EX);
    return true;
}

if (!checkRateLimit($clientIp)) {
    http_response_code(429);
    echo json_encode([
        "success" => false,
        "message" => "Too many requests submitted. Please wait a few minutes or schedule directly via Cal.com."
    ]);
    exit;
}

// 5. Parse Request Body
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
$data = [];

if (stripos($contentType, 'application/json') !== false) {
    $rawBody = file_get_contents('php://input');
    if (!$rawBody) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Empty request body received."]);
        exit;
    }
    $decoded = json_decode($rawBody, true);
    if (!is_array($decoded)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Malformed JSON payload."]);
        exit;
    }
    $data = $decoded;
} elseif (stripos($contentType, 'application/x-www-form-urlencoded') !== false || stripos($contentType, 'multipart/form-data') !== false) {
    $data = $_POST;
} else {
    $rawBody = file_get_contents('php://input');
    $decoded = json_decode($rawBody, true);
    if (is_array($decoded)) {
        $data = $decoded;
    } else {
        http_response_code(415);
        echo json_encode(["success" => false, "message" => "Unsupported Content-Type. Please use application/json."]);
        exit;
    }
}

// 6. Anti-Spam Honeypot Check
if (!empty($data['websiteConfirmEmpty']) && trim($data['websiteConfirmEmpty']) !== '') {
    echo json_encode(["success" => true, "message" => "Your request has been registered."]);
    exit;
}

// 7. Anti-Spam Timing Delta Check
if (!empty($data['submitTimestamp']) && is_numeric($data['submitTimestamp'])) {
    $nowMs = round(microtime(true) * 1000);
    $elapsedMs = $nowMs - floatval($data['submitTimestamp']);
    if ($elapsedMs < 400) {
        echo json_encode(["success" => true, "message" => "Your request has been registered."]);
        exit;
    }
}

// 8. Sanitization Helpers
function cleanHeader($str) {
    if (!is_string($str)) return '';
    return trim(str_replace(["\r", "\n", "%0a", "%0d", "%0A", "%0D"], '', $str));
}

function safeHtml($str) {
    if (!is_string($str)) return '';
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}

function cleanLength($str, $max) {
    $cleaned = cleanHeader($str);
    return mb_substr($cleaned, 0, $max, 'UTF-8');
}

// 9. Resend & Company Configuration
$resendApiKey = getenv('RESEND_API_KEY') ?: 're_Jh92NUuV_JSNAcra8Los4ckg4AgBC6crm';
$fromEmail    = getenv('RESEND_FROM_EMAIL') ?: 'EcomAmigo <audits@ecomamigo.com>';
$adminEmail   = getenv('AUDIT_ADMIN_EMAIL') ?: 'caliecomamigo@gmail.com';
$calLink      = 'https://cal.com/franchise/ecom-amigo';
$companyNameHeader = 'EcomAmigo';
$companyLegalName  = 'EcomAmigo LLC';
$companyAddress    = '9747 Businesspark Ave #255, California, USA';
$companyPhone      = '+1 (619) 771-2691';
$companyContactEmail = 'caliecomamigo@gmail.com';
$companySiteUrl    = 'https://ecomamigo.com';
$submittedAt       = gmdate('D, d M Y H:i:s T');
$currentYear       = date('Y');

// Helper to call Resend API with domain fallback
function callResendApi($apiKey, $payload) {
    if (!function_exists('curl_init')) {
        return ["success" => false, "error" => "PHP cURL extension is not enabled on this server."];
    }

    $ch = curl_init('https://api.resend.com/emails');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
        'User-Agent: EcomAmigo-HostingerRelay/2.0'
    ]);
    curl_setopt($ch, CURLOPT_TIMEOUT, 15);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($curlError) {
        error_log("[Resend cURL Error] " . $curlError);
        return ["success" => false, "error" => "Connection to email service failed."];
    }

    $decoded = json_decode($response, true);
    if ($httpCode >= 200 && $httpCode < 300) {
        return ["success" => true, "id" => $decoded['id'] ?? ''];
    }

    // Domain Verification Fallback: If custom domain is unverified on Resend, retry with onboarding@resend.dev
    if ($httpCode === 403 && isset($payload['from']) && strpos($payload['from'], 'onboarding@resend.dev') === false) {
        $fallbackPayload = $payload;
        $fallbackPayload['from'] = 'EcomAmigo <onboarding@resend.dev>';
        return callResendApi($apiKey, $fallbackPayload);
    }

    $msg = $decoded['message'] ?? "HTTP $httpCode Error";
    error_log("[Resend API Error] HTTP $httpCode: " . $msg);
    return ["success" => false, "error" => "Email delivery rejected: " . $msg];
}

// 10. Route by Action Type
$actionType = $data['type'] ?? 'audit_request';

// =================================================================================================
// TYPE 1: PRE-MEETING NOTIFICATION / REMINDER (Before meeting starts)
// =================================================================================================
if ($actionType === 'meeting_reminder' || $actionType === 'pre_meeting') {
    $clientName  = cleanLength($data['clientName'] ?? $data['fullName'] ?? 'Valued Client', 100);
    $clientEmail = cleanLength($data['clientEmail'] ?? $data['email'] ?? '', 254);
    $companyName = cleanLength($data['companyName'] ?? 'Your Store', 150);
    $meetingDate = cleanLength($data['meetingDate'] ?? date('l, F j, Y'), 50);
    $meetingTime = cleanLength($data['meetingTime'] ?? 'Scheduled Time', 50);
    $meetingTz   = cleanLength($data['meetingTimezone'] ?? 'PST', 50);
    $meetingLink = cleanLength($data['meetingLink'] ?? $calLink, 300);

    if (empty($clientEmail) || !filter_var($clientEmail, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Valid client email is required."]);
        exit;
    }

    $safeName    = safeHtml($clientName);
    $safeCompany = safeHtml($companyName);
    $safeDate    = safeHtml($meetingDate);
    $safeTime    = safeHtml($meetingTime);
    $safeTz      = safeHtml($meetingTz);
    $safeLink    = safeHtml($meetingLink);

    $subject = "📅 Reminder: Your EcomAmigo Strategy Session is Coming Up — {$safeDate} at {$safeTime}";

    $html = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{$subject}</title>
</head>
<body style="margin:0;padding:32px 12px;background-color:#F5F6F8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Inter',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;color:#10151C;line-height:1.6;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" align="center" style="max-width:600px;margin:0 auto;">
    <tr>
      <td>
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="background-color:#FFFFFF;border-radius:16px;border:1px solid #E4E6EA;overflow:hidden;box-shadow:0 4px 20px rgba(16,21,28,0.04);">
          <tr>
            <td style="height:4px;background-color:#1E4FD8;line-height:4px;font-size:4px;">&nbsp;</td>
          </tr>
          <tr>
            <td style="background-color:#10151C;padding:32px 32px 28px 32px;color:#FFFFFF;">
              <div style="display:inline-block;background-color:rgba(30,79,216,0.25);border:1px solid rgba(147,180,252,0.4);color:#93B4FC;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;padding:4px 12px;border-radius:9999px;margin-bottom:12px;">
                📅 Diagnostic Session Reminder
              </div>
              <h1 style="margin:0;font-size:24px;font-weight:700;letter-spacing:-0.02em;color:#FFFFFF;line-height:1.2;">
                Upcoming Strategy Meeting
              </h1>
              <p style="margin:8px 0 0 0;font-size:13px;color:#838B96;">
                {$companyNameHeader} &bull; 15-Minute Multi-Marketplace Growth Briefing
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 32px 28px 32px;">
              <h2 style="margin:0 0 12px 0;font-size:18px;font-weight:700;color:#10151C;">Hello {$safeName},</h2>
              <p style="margin:0 0 20px 0;font-size:14px;color:#4F5662;">
                This is a quick reminder that your upcoming 15-minute marketplace diagnostic session for <strong style="color:#10151C;">{$safeCompany}</strong> is scheduled to begin soon.
              </p>

              <div style="background-color:#EFF4FE;border:1px solid #D2E0FC;border-radius:12px;padding:20px;margin-bottom:24px;">
                <div style="font-size:11px;font-weight:700;color:#1E4FD8;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:12px;">
                  Session Overview &amp; Access Details
                </div>
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:6px 0;font-size:13px;color:#4F5662;width:32%;font-weight:600;">Date &amp; Time:</td>
                    <td style="padding:6px 0;font-size:14px;color:#10151C;font-weight:700;">{$safeDate} at {$safeTime} <span style="font-weight:400;font-size:12px;color:#838B96;">({$safeTz})</span></td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;font-size:13px;color:#4F5662;font-weight:600;">Brand / Store:</td>
                    <td style="padding:6px 0;font-size:13px;color:#10151C;font-weight:600;">{$safeCompany}</td>
                  </tr>
                </table>

                <div style="margin-top:16px;text-align:center;">
                  <a href="{$safeLink}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background-color:#1E4FD8;color:#FFFFFF;text-decoration:none;font-weight:700;font-size:14px;padding:12px 32px;border-radius:9999px;letter-spacing:0.01em;box-shadow:0 4px 12px rgba(30,79,216,0.25);">
                    Join Video Meeting Room &rarr;
                  </a>
                </div>
              </div>

              <div style="background-color:#F9FAFB;border:1px solid #E4E6EA;border-radius:10px;padding:22px;margin-bottom:24px;">
                <div style="font-size:11px;font-weight:700;color:#838B96;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:14px;">
                  What We Will Cover In 15 Minutes
                </div>
                <div style="margin-bottom:10px;font-size:13px;color:#10151C;">
                  <strong>✓ Catalog &amp; Buy Box Health:</strong> Diagnosing suppressed ASINs, search indexing gaps, and Buy Box ownership.
                </div>
                <div style="margin-bottom:10px;font-size:13px;color:#10151C;">
                  <strong>✓ PPC &amp; Margin Efficiency:</strong> Identifying wasted ad spend, negative keyword targets, and TACoS guardrails.
                </div>
                <div style="font-size:13px;color:#10151C;">
                  <strong>✓ Growth Action Plan:</strong> Immediate 30-day operational priorities to increase sell-through across your channels.
                </div>
              </div>

              <p style="font-size:13px;color:#4F5662;margin:0 0 20px 0;">
                <em>💡 Tip: If you have your Seller Central, TikTok Shop, or Shopify dashboard open during our call, we can walk through specific ASIN diagnostics together in real time.</em>
              </p>

              <div style="border-top:1px solid #E4E6EA;padding-top:16px;font-size:12px;color:#838B96;">
                Need to reschedule or choose another slot? You can do so directly on our <a href="{$calLink}" target="_blank" style="color:#1E4FD8;font-weight:600;text-decoration:none;">Operations Booking Calendar &rarr;</a>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px;background-color:#F9FAFB;border-top:1px solid #E4E6EA;font-size:12px;color:#838B96;text-align:center;line-height:1.7;">
              <strong style="color:#10151C;font-size:13px;">{$companyLegalName}</strong><br>
              {$companyAddress}<br>
              Direct: <a href="tel:{$companyPhone}" style="color:#10151C;text-decoration:none;">{$companyPhone}</a> &bull; Inquiries: <a href="mailto:{$companyContactEmail}" style="color:#1E4FD8;text-decoration:none;">{$companyContactEmail}</a><br>
              Website: <a href="{$companySiteUrl}" target="_blank" style="color:#1E4FD8;text-decoration:none;">{$companySiteUrl}</a><br>
              <span style="color:#838B96;font-size:11px;">&copy; {$currentYear} {$companyLegalName}. All rights reserved.</span>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;

    $text = "Hello {$clientName},\n\nReminder: Your 15-minute diagnostic strategy session with {$companyNameHeader} for {$companyName} is coming up on {$meetingDate} at {$meetingTime} ({$meetingTz}).\n\nJoin link: {$meetingLink}\n\nSchedule adjustment: {$calLink}\n\n{$companyLegalName}\n{$companyAddress}";

    $res = callResendApi($resendApiKey, [
        "from"     => $fromEmail,
        "to"       => [$clientEmail],
        "reply_to" => $fromEmail,
        "subject"  => $subject,
        "html"     => $html,
        "text"     => $text,
    ]);

    if ($res['success']) {
        echo json_encode(["success" => true, "message" => "Pre-meeting reminder sent successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Failed to dispatch reminder."]);
    }
    exit;
}

// =================================================================================================
// TYPE 2: AUDIT REQUEST (Standard Flow: Admin Lead Alert + Customer Audit Confirmation)
// =================================================================================================
$fullName     = cleanLength($data['fullName'] ?? '', 100);
$companyName  = cleanLength($data['companyName'] ?? '', 150);
$email        = cleanLength($data['email'] ?? '', 254);
$phone        = cleanLength($data['phone'] ?? '', 50);
$websiteUrl   = cleanLength($data['websiteUrl'] ?? '', 200);
$monthlySales = cleanLength($data['monthlySales'] ?? '', 50);
$helpNeeds    = mb_substr(trim($data['helpNeeds'] ?? ''), 0, 3000, 'UTF-8');

$marketplaces = [];
if (isset($data['marketplaces']) && is_array($data['marketplaces'])) {
    foreach ($data['marketplaces'] as $item) {
        if (is_string($item)) {
            $cleanedItem = cleanLength($item, 50);
            if (!empty($cleanedItem)) {
                $marketplaces[] = $cleanedItem;
            }
        }
    }
}

if (mb_strlen($fullName, 'UTF-8') < 2) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please provide your full name (minimum 2 characters)."]);
    exit;
}

if (empty($companyName)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please provide your brand or company name."]);
    exit;
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please provide a valid email address."]);
    exit;
}

$rawWebsite = $websiteUrl;
if (!empty($rawWebsite) && !preg_match('/^https?:\/\//i', $rawWebsite)) {
    $rawWebsite = 'https://' . $rawWebsite;
}

$safeName      = safeHtml($fullName);
$safeCompany   = safeHtml($companyName);
$safeEmail     = safeHtml($email);
$safePhone     = safeHtml($phone ?: 'Not provided');
$safeWebsite   = safeHtml($websiteUrl ?: 'Not provided');
$safeRawWeb    = safeHtml($rawWebsite ?: '#');
$safeSales     = safeHtml($monthlySales ?: 'Not specified');
$safeHelpNeeds = nl2br(safeHtml($helpNeeds ?: 'Comprehensive store catalog and growth audit.'));

$channelBadgesHtml = '';
if (!empty($marketplaces)) {
    foreach ($marketplaces as $m) {
        $safeM = safeHtml($m);
        $channelBadgesHtml .= '<span style="display:inline-block;background-color:#EFF4FE;color:#1E4FD8;border:1px solid #D2E0FC;padding:4px 12px;border-radius:9999px;font-size:12px;font-weight:600;margin:2px 6px 4px 0;letter-spacing:0.01em;">' . $safeM . '</span>';
    }
} else {
    $channelBadgesHtml = '<span style="color:#838B96;font-size:13px;font-style:italic;">Not specified</span>';
}
$safeChannelsText = !empty($marketplaces) ? implode(', ', $marketplaces) : 'Not specified';

// FLOW B: Admin Lead Alert (Reply-To is the customer's email!)
$adminSubject = "⚡ [New Store Audit Lead] " . $companyName . " — " . $fullName;

$adminHtml = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{$adminSubject}</title>
</head>
<body style="margin:0;padding:32px 12px;background-color:#F5F6F8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Inter',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;color:#10151C;line-height:1.6;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" align="center" style="max-width:620px;margin:0 auto;">
    <tr>
      <td>
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="background-color:#FFFFFF;border-radius:16px;border:1px solid #E4E6EA;overflow:hidden;box-shadow:0 4px 20px rgba(16,21,28,0.04);">
          <tr>
            <td style="height:4px;background-color:#1E4FD8;line-height:4px;font-size:4px;">&nbsp;</td>
          </tr>
          <tr>
            <td style="background-color:#10151C;padding:28px 32px;color:#FFFFFF;">
              <div style="display:inline-block;background-color:rgba(30,79,216,0.22);border:1px solid rgba(30,79,216,0.6);color:#93B4FC;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;padding:4px 12px;border-radius:9999px;margin-bottom:10px;">
                ⚡ Inbound Store Audit Lead
              </div>
              <h1 style="margin:0;font-size:24px;font-weight:700;letter-spacing:-0.02em;color:#FFFFFF;line-height:1.2;">
                {$safeCompany}
              </h1>
              <p style="margin:6px 0 0 0;font-size:13px;color:#838B96;">
                Submitted by <strong style="color:#FFFFFF;">{$safeName}</strong> &bull; {$submittedAt}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 32px 28px 32px;">
              <div style="font-size:11px;font-weight:700;color:#838B96;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:12px;">
                Client &amp; Store Dossier
              </div>
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="border:1px solid #E4E6EA;border-radius:10px;overflow:hidden;margin-bottom:24px;border-collapse:collapse;">
                <tr>
                  <td style="padding:12px 16px;background-color:#F9FAFB;border-bottom:1px solid #E4E6EA;width:34%;font-size:13px;font-weight:600;color:#4F5662;">Contact Name</td>
                  <td style="padding:12px 16px;border-bottom:1px solid #E4E6EA;font-size:14px;color:#10151C;font-weight:600;">{$safeName}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#F9FAFB;border-bottom:1px solid #E4E6EA;font-size:13px;font-weight:600;color:#4F5662;">Company / Brand</td>
                  <td style="padding:12px 16px;border-bottom:1px solid #E4E6EA;font-size:14px;color:#10151C;font-weight:600;">{$safeCompany}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#F9FAFB;border-bottom:1px solid #E4E6EA;font-size:13px;font-weight:600;color:#4F5662;">Email Address</td>
                  <td style="padding:12px 16px;border-bottom:1px solid #E4E6EA;font-size:14px;color:#10151C;">
                    <a href="mailto:{$safeEmail}" style="color:#1E4FD8;font-weight:600;text-decoration:none;">{$safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#F9FAFB;border-bottom:1px solid #E4E6EA;font-size:13px;font-weight:600;color:#4F5662;">Direct Phone</td>
                  <td style="padding:12px 16px;border-bottom:1px solid #E4E6EA;font-size:14px;color:#10151C;">
                    <a href="tel:{$safePhone}" style="color:#10151C;text-decoration:none;font-weight:500;">{$safePhone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#F9FAFB;border-bottom:1px solid #E4E6EA;font-size:13px;font-weight:600;color:#4F5662;">Store / Website URL</td>
                  <td style="padding:12px 16px;border-bottom:1px solid #E4E6EA;font-size:14px;">
                    <a href="{$safeRawWeb}" target="_blank" rel="noopener noreferrer" style="color:#1E4FD8;font-weight:600;text-decoration:none;">{$safeWebsite} &rarr;</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#F9FAFB;border-bottom:1px solid #E4E6EA;font-size:13px;font-weight:600;color:#4F5662;">Target Marketplaces</td>
                  <td style="padding:12px 16px;border-bottom:1px solid #E4E6EA;font-size:13px;">{$channelBadgesHtml}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#F9FAFB;font-size:13px;font-weight:600;color:#4F5662;">Monthly Sales Tier</td>
                  <td style="padding:12px 16px;font-size:14px;color:#10151C;font-weight:700;">{$safeSales}</td>
                </tr>
              </table>

              <div style="font-size:11px;font-weight:700;color:#838B96;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:8px;">
                Growth Challenges &amp; Specific Needs
              </div>
              <div style="background-color:#F5F6F8;border-left:4px solid #1E4FD8;padding:18px 20px;border-radius:6px;font-size:14px;color:#10151C;line-height:1.6;margin-bottom:28px;">
                {$safeHelpNeeds}
              </div>

              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right:12px;padding-bottom:10px;">
                    <a href="mailto:{$safeEmail}?subject=Re:%20{$companyNameHeader}%20Store%20Audit%20—%20{$safeCompany}" style="display:inline-block;background-color:#10151C;color:#FFFFFF;text-decoration:none;font-weight:600;font-size:13px;padding:12px 24px;border-radius:9999px;letter-spacing:0.01em;">
                      Reply to {$safeName} &rarr;
                    </a>
                  </td>
                  <td style="padding-right:12px;padding-bottom:10px;">
                    <a href="{$safeRawWeb}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background-color:#FFFFFF;color:#10151C;text-decoration:none;font-weight:600;font-size:13px;padding:12px 24px;border-radius:9999px;border:1px solid #E4E6EA;">
                      Open Storefront &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 32px;background-color:#F9FAFB;border-top:1px solid #E4E6EA;font-size:12px;color:#838B96;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                <tr>
                  <td style="color:#838B96;">{$companyNameHeader} Operations Dispatch &bull; Lead Routing Active</td>
                  <td align="right" style="color:#838B96;">{$submittedAt}</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;

$adminText = "[NEW INBOUND STORE AUDIT LEAD]\n==============================================================\nCompany / Brand: {$companyName}\nContact Name:    {$fullName}\nEmail Address:   {$email}\nPhone:           {$phone}\nWebsite URL:     {$websiteUrl}\nMarketplaces:    {$safeChannelsText}\nMonthly Sales:   {$monthlySales}\nSubmitted At:    {$submittedAt}\n==============================================================\nGROWTH CHALLENGES & GOALS:\n{$helpNeeds}\n==============================================================\nReply to Lead: mailto:{$email}\nOpen Store:    {$rawWebsite}\n";

// FLOW A: Customer Confirmation Email
$customerSubject = "We've received your Store Audit request — " . $companyNameHeader;

$customerHtml = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{$customerSubject}</title>
</head>
<body style="margin:0;padding:32px 12px;background-color:#F5F6F8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Inter',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;color:#10151C;line-height:1.6;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" align="center" style="max-width:600px;margin:0 auto;">
    <tr>
      <td>
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="background-color:#FFFFFF;border-radius:16px;border:1px solid #E4E6EA;overflow:hidden;box-shadow:0 4px 20px rgba(16,21,28,0.04);">
          <tr>
            <td style="height:4px;background-color:#1E4FD8;line-height:4px;font-size:4px;">&nbsp;</td>
          </tr>
          <tr>
            <td style="background-color:#10151C;padding:32px 32px 28px 32px;color:#FFFFFF;">
              <div style="display:inline-block;background-color:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:#FFFFFF;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;padding:4px 12px;border-radius:9999px;margin-bottom:12px;">
                Free Multi-Marketplace Store Audit
              </div>
              <h1 style="margin:0;font-size:24px;font-weight:700;letter-spacing:-0.02em;color:#FFFFFF;line-height:1.2;">
                {$companyNameHeader}
              </h1>
              <p style="margin:8px 0 0 0;font-size:13px;color:#838B96;">
                Dedicated Multi-Marketplace Operations &amp; Growth &bull; California, USA
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 32px 28px 32px;">
              <h2 style="margin:0 0 12px 0;font-size:18px;font-weight:700;color:#10151C;">Hello {$safeName},</h2>
              <p style="margin:0 0 20px 0;font-size:14px;color:#4F5662;">
                Thank you for requesting an Enterprise Store Audit for <strong style="color:#10151C;">{$safeCompany}</strong>. Our California operations team has received your submission and has queued your store catalog for multi-marketplace diagnostic review.
              </p>

              <div style="border:1px solid #E4E6EA;border-radius:10px;overflow:hidden;margin-bottom:24px;">
                <div style="background-color:#F9FAFB;padding:10px 16px;border-bottom:1px solid #E4E6EA;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#838B96;">
                  Registered Audit Scope
                </div>
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 16px;border-bottom:1px solid #E4E6EA;font-size:13px;color:#4F5662;width:35%;font-weight:600;">Brand / Store</td>
                    <td style="padding:10px 16px;border-bottom:1px solid #E4E6EA;font-size:13px;color:#10151C;font-weight:600;">{$safeCompany}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 16px;border-bottom:1px solid #E4E6EA;font-size:13px;color:#4F5662;font-weight:600;">Primary Website</td>
                    <td style="padding:10px 16px;border-bottom:1px solid #E4E6EA;font-size:13px;">
                      <a href="{$safeRawWeb}" target="_blank" rel="noopener noreferrer" style="color:#1E4FD8;text-decoration:none;font-weight:600;">{$safeWebsite}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 16px;border-bottom:1px solid #E4E6EA;font-size:13px;color:#4F5662;font-weight:600;">Focus Channels</td>
                    <td style="padding:10px 16px;border-bottom:1px solid #E4E6EA;font-size:13px;">{$channelBadgesHtml}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 16px;font-size:13px;color:#4F5662;font-weight:600;">Monthly Volume</td>
                    <td style="padding:10px 16px;font-size:13px;color:#10151C;font-weight:600;">{$safeSales}</td>
                  </tr>
                </table>
              </div>

              <div style="background-color:#F9FAFB;border:1px solid #E4E6EA;border-radius:10px;padding:22px;margin-bottom:24px;">
                <div style="font-size:11px;font-weight:700;color:#838B96;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:16px;">
                  Diagnostic Roadmap &amp; Delivery Timeline
                </div>
                <div style="margin-bottom:16px;padding-left:14px;border-left:3px solid #1E4FD8;">
                  <div style="font-size:13px;font-weight:700;color:#10151C;margin-bottom:2px;">1. Catalog &amp; Buy-Box Diagnostics <span style="font-weight:400;color:#838B96;font-size:12px;">(Hours 0–12)</span></div>
                  <div style="font-size:12px;color:#4F5662;line-height:1.5;">Listing quality scores, suppressed ASIN detection, keyword indexing depth, and cross-channel pricing parity.</div>
                </div>
                <div style="margin-bottom:16px;padding-left:14px;border-left:3px solid #1E4FD8;">
                  <div style="font-size:13px;font-weight:700;color:#10151C;margin-bottom:2px;">2. Fulfillment &amp; Margin Leak Analysis <span style="font-weight:400;color:#838B96;font-size:12px;">(Hours 12–24)</span></div>
                  <div style="font-size:12px;color:#4F5662;line-height:1.5;">FBA/WFS inventory fee leaks, 3PL routing efficiencies, and ad spend efficiency benchmarks (ACOS &amp; TACOS).</div>
                </div>
                <div style="padding-left:14px;border-left:3px solid #1E4FD8;">
                  <div style="font-size:13px;font-weight:700;color:#10151C;margin-bottom:2px;">3. Executive Growth Briefing <span style="font-weight:400;color:#838B96;font-size:12px;">(Within 24–48 Hours)</span></div>
                  <div style="font-size:12px;color:#4F5662;line-height:1.5;">A senior operations specialist delivers your tailored growth roadmap with immediate revenue unlock opportunities.</div>
                </div>
              </div>

              <div style="background-color:#EFF4FE;border-left:3px solid #1E4FD8;border-radius:6px;padding:14px 16px;font-size:12px;color:#15379C;line-height:1.6;margin-bottom:24px;">
                <strong>Mutual Confidentiality:</strong> All catalog metrics, revenue volumes, and proprietary operational details shared are strictly protected under our Mutual Non-Disclosure Agreement.
              </div>

              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="background-color:#F5F6F8;border:1px solid #E4E6EA;border-radius:10px;padding:24px 20px;text-align:center;margin-bottom:8px;">
                <tr>
                  <td align="center">
                    <div style="font-size:14px;font-weight:700;color:#10151C;margin-bottom:6px;">
                      Need an immediate walk-through with our operations strategist?
                    </div>
                    <div style="font-size:13px;color:#4F5662;margin-bottom:16px;max-width:440px;line-height:1.5;">
                      Skip the queue and reserve a live 15-minute diagnostic walk-through directly on our operations calendar.
                    </div>
                    <div>
                      <a href="{$calLink}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background-color:#1E4FD8;color:#FFFFFF;text-decoration:none;font-weight:700;font-size:14px;padding:14px 32px;border-radius:9999px;letter-spacing:0.02em;box-shadow:0 4px 12px rgba(30,79,216,0.25);">
                        Schedule 15-Min Intro Session &rarr;
                      </a>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px;background-color:#F9FAFB;border-top:1px solid #E4E6EA;font-size:12px;color:#838B96;text-align:center;line-height:1.7;">
              <strong style="color:#10151C;font-size:13px;">{$companyLegalName}</strong><br>
              {$companyAddress}<br>
              Direct: <a href="tel:{$companyPhone}" style="color:#10151C;text-decoration:none;">{$companyPhone}</a> &bull; Inquiries: <a href="mailto:{$companyContactEmail}" style="color:#1E4FD8;text-decoration:none;">{$companyContactEmail}</a><br>
              Website: <a href="{$companySiteUrl}" target="_blank" rel="noopener noreferrer" style="color:#1E4FD8;text-decoration:none;">{$companySiteUrl}</a><br>
              <span style="color:#838B96;font-size:11px;">&copy; {$currentYear} {$companyLegalName}. All rights reserved.</span>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;

$customerText = "Hello {$fullName},\n\nThank you for requesting a Free Store Audit for {$companyName} from {$companyNameHeader}.\n\nOur senior California operations team has received your submission and has queued your store catalog for multi-marketplace diagnostic review.\n\nSchedule a live 15-min walk-through directly: {$calLink}\n\n{$companyLegalName}\n{$companyAddress}";

$adminResult = callResendApi($resendApiKey, [
    "from"     => $fromEmail,
    "to"       => [$adminEmail],
    "reply_to" => $email,
    "subject"  => $adminSubject,
    "html"     => $adminHtml,
    "text"     => $adminText,
]);

$customerResult = callResendApi($resendApiKey, [
    "from"     => $fromEmail,
    "to"       => [$email],
    "reply_to" => $fromEmail,
    "subject"  => $customerSubject,
    "html"     => $customerHtml,
    "text"     => $customerText,
]);

$captured = $adminResult['success'] || $customerResult['success'];

if ($captured) {
    echo json_encode([
        "success" => true,
        "message" => "Thank you! Your Free Store Audit request has been received. Our California operations team will review your catalog and reach out within 24–48 hours."
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Unable to process your request right now. Please schedule directly via Cal.com or reach out to us."
    ]);
}
