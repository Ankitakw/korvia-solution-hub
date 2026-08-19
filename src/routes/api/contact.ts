import { createFileRoute } from "@tanstack/react-router";
import { contactFormSchema } from "@/lib/contact-form-schema";

function getSheetsUrl() {
  return process.env.VITE_GOOGLE_SHEETS_URL || process.env.GOOGLE_SHEETS_URL || "";
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = await request.json();
        const parsed = contactFormSchema.safeParse(body);

        if (!parsed.success) {
          return Response.json(
            { success: false, error: parsed.error.issues[0]?.message ?? "Invalid form data." },
            { status: 400 },
          );
        }

        const url = getSheetsUrl();
        if (!url) {
          return Response.json(
            {
              success: false,
              error: "Contact form is not connected yet. Please email us directly.",
            },
            { status: 503 },
          );
        }

        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsed.data),
          redirect: "follow",
        });

        const text = await response.text();
        let result: { success?: boolean; error?: string } = {};
        try {
          result = JSON.parse(text) as { success?: boolean; error?: string };
        } catch {
          return Response.json(
            {
              success: false,
              error: response.ok
                ? "Unexpected response from contact service."
                : `Contact service error (${response.status}). Redeploy Google Apps Script with access set to Anyone.`,
            },
            { status: 502 },
          );
        }

        if (!response.ok || !result.success) {
          return Response.json(
            {
              success: false,
              error:
                result.error ||
                `Could not save your message (${response.status}). Check Apps Script deployment: Execute as Me, access Anyone.`,
            },
            { status: 502 },
          );
        }

        return Response.json({ success: true });
      },
    },
  },
});
