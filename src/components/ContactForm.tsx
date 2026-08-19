import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/contact-form-schema";
import { submitContact } from "@/lib/submit-contact";
import { BUDGET_RANGES, BUSINESS_TYPES, CONTACT, CONTACT_METHODS } from "@/data/site";

type Errors = Partial<Record<keyof ContactFormData, string>>;

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3.5 text-sm text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground focus:border-accent focus:ring-[3px] focus:ring-accent/20";
const labelClass = "mb-2 block text-sm font-semibold text-navy";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);

    const raw = Object.fromEntries(new FormData(event.currentTarget).entries());
    if (raw._hp) {
      setSubmitted(true);
      return;
    }

    const result = contactFormSchema.safeParse(raw);

    if (!result.success) {
      const next: Errors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      await submitContact({ data: result.data });
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="card-premium flex flex-col items-center gap-4 p-10 text-center">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/15">
          <CheckCircle2 className="h-8 w-8 text-accent" aria-hidden="true" />
        </span>
        <h3 className="font-display text-2xl font-extrabold text-navy">
          Thank you! We'll get back to you shortly.
        </h3>
        <p className="max-w-md text-sm text-muted-foreground">
          Our team will review your requirement and reach out on your preferred contact method.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card-premium overflow-hidden p-6 sm:p-8">
      <div className="mb-6 border-b border-border pb-5">
        <h3 className="font-display text-lg font-extrabold text-navy">Send us a message</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Fill in the details below and we'll respond within 24 hours.
        </p>
      </div>

      {submitError && (
        <div
          role="alert"
          className="mb-5 flex items-start gap-3 rounded-xl border border-destructive/25 bg-destructive/5 px-4 py-3 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            {submitError}{" "}
            <a href={`mailto:${CONTACT.email}`} className="font-semibold underline">
              Email us at {CONTACT.email}
            </a>
          </span>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <input
          type="text"
          name="_hp"
          tabIndex={-1}
          autoComplete="off"
          className="pointer-events-none absolute h-0 w-0 opacity-0"
          aria-hidden="true"
        />

        <div>
          <label className={labelClass} htmlFor="fullName">
            Full Name *
          </label>
          <input id="fullName" name="fullName" className={fieldClass} placeholder="Your name" />
          {errors.fullName && <p className="mt-1.5 text-xs text-destructive">{errors.fullName}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="businessName">
            Business Name
          </label>
          <input
            id="businessName"
            name="businessName"
            className={fieldClass}
            placeholder="Company / shop name"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={fieldClass}
            placeholder="10-digit mobile number"
          />
          {errors.phone && <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={fieldClass}
            placeholder="you@business.com"
          />
          {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="businessType">
            Business Type
          </label>
          <select id="businessType" name="businessType" defaultValue="" className={fieldClass}>
            <option value="">Select business type</option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="budget">
            Budget Range
          </label>
          <select id="budget" name="budget" defaultValue="" className={fieldClass}>
            <option value="">Select budget range</option>
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="problem">
            What Problem Can We Help With? *
          </label>
          <textarea
            id="problem"
            name="problem"
            rows={4}
            maxLength={1000}
            className={fieldClass}
            placeholder="Tell us what isn't working in your business right now."
          />
          {errors.problem && <p className="mt-1.5 text-xs text-destructive">{errors.problem}</p>}
        </div>
        <div className="sm:col-span-2">
          <span className={labelClass}>Preferred Contact Method</span>
          <div className="flex flex-wrap gap-2.5">
            {CONTACT_METHODS.map((method) => (
              <label
                key={method}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium text-navy shadow-sm transition-all hover:border-accent hover:bg-accent/5 has-[:checked]:border-accent has-[:checked]:bg-accent/10 has-[:checked]:text-navy"
              >
                <input
                  type="radio"
                  name="contactMethod"
                  value={method}
                  className="accent-accent"
                />
                {method}
              </label>
            ))}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary mt-8 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Get My Free Consultation
            <Send className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
