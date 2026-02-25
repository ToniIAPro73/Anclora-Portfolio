import { useCallback, useMemo } from "react"
import type { ConversionEventInput } from "@/lib/schemas/conversion-event"
import type { Language } from "@/types"

type TrackEventName = ConversionEventInput["eventName"]

const ATTRIBUTION_STORAGE_KEY = "anclora_attribution_v1"
const SESSION_STORAGE_KEY = "anclora_session_id"

const deviceFromUserAgent = () => {
  if (typeof navigator === "undefined") return "unknown"
  const normalized = navigator.userAgent.toLowerCase()
  if (normalized.includes("ipad") || normalized.includes("tablet")) return "tablet"
  if (normalized.includes("mobi") || normalized.includes("android")) return "mobile"
  return "desktop"
}

const getSessionId = () => {
  if (typeof window === "undefined") return "server"
  const existing = sessionStorage.getItem(SESSION_STORAGE_KEY)
  if (existing) return existing
  const created = crypto.randomUUID()
  sessionStorage.setItem(SESSION_STORAGE_KEY, created)
  return created
}

const getAttribution = () => {
  if (typeof window === "undefined") return {}

  const fromStorage = sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY)
  if (fromStorage) {
    try {
      return JSON.parse(fromStorage) as Record<string, string>
    } catch {
      // continue
    }
  }

  const url = new URL(window.location.href)
  const params = url.searchParams
  const attribution = {
    utmSource: params.get("utm_source") || "",
    utmMedium: params.get("utm_medium") || "",
    utmCampaign: params.get("utm_campaign") || "",
    utmContent: params.get("utm_content") || "",
    utmTerm: params.get("utm_term") || "",
    referrer: document.referrer || "",
  }

  sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution))
  return attribution
}

const compact = (value: string | undefined) => (value && value.trim().length > 0 ? value.trim() : undefined)

export const useConversionTracking = (lang: Language) => {
  const sessionId = useMemo(() => getSessionId(), [])

  const trackEvent = useCallback(
    (eventName: TrackEventName, overrides?: { path?: string }) => {
      if (typeof window === "undefined") return

      const attribution = getAttribution()
      const payload: ConversionEventInput = {
        eventName,
        sessionId,
        lang,
        path: overrides?.path || window.location.pathname || "/",
        device: deviceFromUserAgent(),
        utmSource: compact(attribution.utmSource),
        utmMedium: compact(attribution.utmMedium),
        utmCampaign: compact(attribution.utmCampaign),
        utmContent: compact(attribution.utmContent),
        utmTerm: compact(attribution.utmTerm),
        referrer: compact(attribution.referrer),
        timestamp: new Date().toISOString(),
      }

      const body = JSON.stringify(payload)
      try {
        if (navigator.sendBeacon) {
          const blob = new Blob([body], { type: "application/json" })
          const queued = navigator.sendBeacon("/api/analytics/events", blob)
          if (queued) return
        }
      } catch {
        // fallback to fetch
      }

      void fetch("/api/analytics/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => {})
    },
    [lang, sessionId]
  )

  return {
    trackEvent,
  }
}
