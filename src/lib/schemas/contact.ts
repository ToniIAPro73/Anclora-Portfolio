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

export type ContactInput = z.infer<typeof contactSchema>
