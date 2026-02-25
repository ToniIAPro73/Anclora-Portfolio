import { z } from "zod"

const sanitizeText = (value: string) =>
  value
    .replace(/[<>]/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .trim()

export const contactSchema = z.object({
  name: z.string().min(2).max(120).transform(sanitizeText),
  email: z.string().email().max(254).transform((value) => sanitizeText(value).toLowerCase()),
  phone: z.string().min(6).max(32).transform(sanitizeText),
  budget: z.number().int().min(500000).max(50000000),
  interest: z.enum(["investment", "residence", "vacation"]),
  message: z.string().max(3000).transform(sanitizeText).optional().or(z.literal("")),
})

export const contactSubmissionSchema = contactSchema.extend({
  website: z.string().max(200).transform(sanitizeText).optional().default(""),
  submittedAt: z.string().max(64).transform(sanitizeText).optional().default(""),
})

export type ContactInput = z.infer<typeof contactSchema>
export type ContactSubmissionInput = z.infer<typeof contactSubmissionSchema>
