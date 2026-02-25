import { z } from "zod"

export const conversionEventNameSchema = z.enum([
  "hero_cta_primary_click",
  "hero_cta_secondary_click",
  "nav_contact_click",
  "contact_form_submit_attempt",
  "contact_form_submit_success",
  "contact_form_submit_error",
])

export const conversionEventSchema = z.object({
  eventName: conversionEventNameSchema,
  sessionId: z.string().min(1).max(128),
  lang: z.enum(["es", "en"]),
  path: z.string().min(1).max(256),
  device: z.enum(["mobile", "tablet", "desktop", "unknown"]),
  utmSource: z.string().max(120).optional(),
  utmMedium: z.string().max(120).optional(),
  utmCampaign: z.string().max(120).optional(),
  utmContent: z.string().max(120).optional(),
  utmTerm: z.string().max(120).optional(),
  referrer: z.string().max(512).optional(),
  timestamp: z.string().datetime().optional(),
})

export type ConversionEventInput = z.infer<typeof conversionEventSchema>
