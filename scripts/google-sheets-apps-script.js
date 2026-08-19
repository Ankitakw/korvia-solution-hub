/**
 * Korvia Partners — Google Sheets contact form handler
 *
 * SETUP:
 * 1. Create a new Google Sheet
 * 2. Extensions → Apps Script → paste this entire file
 * 3. Set NOTIFY_EMAIL below to your inbox
 * 4. Run setupSheet() once (authorize when prompted)
 * 5. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the Web app URL into .env as VITE_GOOGLE_SHEETS_URL
 */

const NOTIFY_EMAIL = "korviapartners@gmail.com";
const SHEET_NAME = "Leads";

function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Full Name",
      "Business Name",
      "Phone",
      "Email",
      "Business Type",
      "Problem",
      "Budget",
      "Contact Method",
    ]);
    sheet.getRange(1, 1, 1, 9).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
}

function doPost(e) {
  try {
    setupSheet();
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const data = parseRequestData(e);

    if (data._hp) {
      return jsonResponse({ success: true });
    }

    const row = [
      new Date(),
      data.fullName || "",
      data.businessName || "",
      data.phone || "",
      data.email || "",
      data.businessType || "",
      data.problem || "",
      data.budget || "",
      data.contactMethod || "",
    ];

    sheet.appendRow(row);

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: "New Korvia lead: " + (data.fullName || "Unknown"),
        body: formatEmailBody(data),
      });
    }

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ success: false, error: String(error) });
  }
}

function parseRequestData(e) {
  if (e.postData && e.postData.contents) {
    try {
      return JSON.parse(e.postData.contents);
    } catch (_err) {
      // fall through to form parameters
    }
  }
  return e.parameter || {};
}

function doGet() {
  return jsonResponse({ success: true, message: "Korvia contact endpoint is live." });
}

function formatEmailBody(data) {
  return [
    "New contact form submission",
    "",
    "Full Name: " + (data.fullName || "-"),
    "Business Name: " + (data.businessName || "-"),
    "Phone: " + (data.phone || "-"),
    "Email: " + (data.email || "-"),
    "Business Type: " + (data.businessType || "-"),
    "Budget: " + (data.budget || "-"),
    "Preferred Contact: " + (data.contactMethod || "-"),
    "",
    "Problem:",
    data.problem || "-",
  ].join("\n");
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
