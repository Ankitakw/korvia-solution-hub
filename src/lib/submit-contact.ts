import { contactFormSchema, type ContactFormData } from "@/lib/contact-form-schema";

function getSheetsUrl() {
  return import.meta.env.VITE_GOOGLE_SHEETS_URL || "";
}

export async function submitContact(data: ContactFormData) {
  const parsed = contactFormSchema.parse(data);
  const url = getSheetsUrl();

  if (!url) {
    throw new Error("Contact form is not connected yet. Please email us directly.");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(parsed),
  });

  const text = await response.text();
  let result: { success?: boolean; error?: string } = {};
  try {
    result = JSON.parse(text) as { success?: boolean; error?: string };
  } catch {
    throw new Error(
      response.ok
        ? "Unexpected response from contact service."
        : `Contact service error (${response.status}). Redeploy Google Apps Script with access set to Anyone.`,
    );
  }

  if (!response.ok || !result.success) {
    throw new Error(
      result.error ||
        `Could not save your message (${response.status}). Check Apps Script deployment: Execute as Me, access Anyone.`,
    );
  }

  return { success: true as const };
}
