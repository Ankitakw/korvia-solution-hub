import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { z } from "zod";
import { BUDGET_RANGES, BUSINESS_TYPES, CONTACT_METHODS } from "@/data/site";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  businessName: z.string().trim().max(120).optional(),
  phone: z
    .string()
    .trim()
    .min(8, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Phone number contains invalid characters"),
  email: z.union([z.string().trim().email("Enter a valid email").max(255), z.literal("")]),
  businessType: z.string().max(60).optional(),
  problem: z
    .string()
    .trim()
    .min(10, "Tell us a little more about the problem")
    .max(1000, "Please keep it under 1000 characters"),
  budget: z.string().max(60).optional(),
  contactMethod: z.string().max(30).optional(),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/25";
const labelClass = "mb-2 block text-sm font-semibold text-navy";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    const result = schema.safeParse(data);
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
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card-premium flex flex-col items-center gap-4 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-accent" aria-hidden="true" />
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
    <form onSubmit={onSubmit} noValidate className="card-premium p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
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
          <div className="flex flex-wrap gap-3">
            {CONTACT_METHODS.map((method) => (
              <label
                key={method}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-navy transition-colors hover:border-accent"
              >
                <input
                  type="radio"
                  name="contactMethod"
                  value={method}
                  className="accent-[oklch(0.687_0.199_44)]"
                />
                {method}
              </label>
            ))}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-bold text-accent-foreground shadow-accent-glow transition-transform hover:-translate-y-0.5 sm:w-auto"
      >
        Get My Free Consultation
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}
