import { contactFormSchema, type ContactFormData } from "@/lib/contact-form-schema";

export async function submitContact(data: ContactFormData) {
  const parsed = contactFormSchema.parse(data);

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(parsed),
  });

  const result = (await response.json()) as { success?: boolean; error?: string };

  if (!response.ok || !result.success) {
    throw new Error(result.error || "Something went wrong. Please try again.");
  }

  return { success: true as const };
}
