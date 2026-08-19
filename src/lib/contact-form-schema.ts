import { z } from "zod";

export const contactFormSchema = z.object({
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

export type ContactFormData = z.infer<typeof contactFormSchema>;
