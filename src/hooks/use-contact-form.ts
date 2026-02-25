import { useCallback, useState, type FormEvent } from "react"
import type { LeadData, Language } from "@/types"
import { formatPriceFromEur } from "@/lib/formatters"

type ToastPayload = {
  title: string
  description: string
  variant?: "default" | "destructive"
  className?: string
}

type UseContactFormOptions = {
  lang?: Language
  initialBudget?: number
  successTitle?: string
  successDescription?: string
  validationTitle?: string
  validationDescription?: string
  successToastClassName?: string
  toast?: (payload: ToastPayload) => void
  onSubmitAttempt?: () => void
  onSubmitSuccess?: () => void
  onSubmitError?: () => void
}

export type ContactFormState = {
  name: string
  email: string
  phone: string
  interest: "investment" | "residence" | "vacation"
  message: string
  website: string
}

const DEFAULT_BUDGET = 5000000
const SUBMIT_TIMEOUT_MS = 10_000

const defaultFormData: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  interest: "investment",
  message: "",
  website: "",
}

type SavedLead = Partial<LeadData>

const parseSavedLead = (): SavedLead => {
  if (typeof window === "undefined") return {}

  const raw = localStorage.getItem("anclora_lead_data")
  if (!raw) return {}

  try {
    const parsed = JSON.parse(raw)
    return typeof parsed === "object" && parsed !== null ? (parsed as SavedLead) : {}
  } catch {
    return {}
  }
}

export const useContactForm = (options: UseContactFormOptions = {}) => {
  const {
    lang = "es",
    initialBudget = DEFAULT_BUDGET,
    successTitle = "",
    successDescription = "",
    validationTitle = "",
    validationDescription = "",
    successToastClassName = "bg-[#0F172A] text-[#F8F5F2] border-[#C5A059]",
    toast,
    onSubmitAttempt,
    onSubmitSuccess,
    onSubmitError,
  } = options

  const [formData, setFormData] = useState<ContactFormState>(() => {
    const saved = parseSavedLead()
    return {
      name: typeof saved.name === "string" ? saved.name : defaultFormData.name,
      email: typeof saved.email === "string" ? saved.email : defaultFormData.email,
      phone: typeof saved.phone === "string" ? saved.phone : defaultFormData.phone,
      interest:
        saved.interest === "investment" || saved.interest === "residence" || saved.interest === "vacation"
          ? saved.interest
          : defaultFormData.interest,
      message: typeof saved.message === "string" ? saved.message : defaultFormData.message,
      website: defaultFormData.website,
    }
  })

  const [budgetValue, setBudgetValue] = useState<number[]>(() => {
    const saved = parseSavedLead()
    const budget = typeof saved.budget === "number" ? saved.budget : initialBudget
    return [budget]
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = useCallback(() => {
    if (!formData.name.trim()) return false
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return false
    if (!formData.phone.trim()) return false
    return true
  }, [formData])

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (isSubmitting) return

    if (!validateForm()) {
      toast?.({
        title: validationTitle,
        description: validationDescription,
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    onSubmitAttempt?.()
    const submittedAt = new Date().toISOString()

    const leadData: LeadData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      interest: formData.interest,
      message: formData.message,
      budget: budgetValue[0],
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("anclora_lead_data", JSON.stringify(leadData))

    try {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS)

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          budget: budgetValue[0],
          interest: formData.interest,
          message: formData.message,
          website: formData.website,
          submittedAt,
        }),
      })
      clearTimeout(timeout)

      if (!response.ok) {
        const fallbackError =
          lang === "es"
            ? "No se pudo enviar la solicitud. Inténtelo de nuevo."
            : "Unable to submit request. Please try again."
        const payload = (await response.json().catch(() => null)) as { error?: string } | null

        setIsSubmitting(false)
        onSubmitError?.()
        toast?.({
          title: validationTitle || fallbackError,
          description: payload?.error || fallbackError,
          variant: "destructive",
        })
        return
      }

      setIsSubmitting(false)
      setIsSuccess(true)
      onSubmitSuccess?.()

      toast?.({
        title: successTitle,
        description: successDescription,
        className: successToastClassName,
      })
    } catch {
      const networkError =
        lang === "es"
          ? "No hemos podido completar el envío. Revise su conexión y vuelva a intentarlo."
          : "We couldn't complete your request. Please check your connection and try again."
      setIsSubmitting(false)
      onSubmitError?.()
      toast?.({
        title: validationTitle || networkError,
        description: networkError,
        variant: "destructive",
      })
    }
  }

  const formatPrice = useCallback(
    (price: number) => formatPriceFromEur(lang, price),
    [lang]
  )

  const updateField = useCallback(
    <K extends keyof ContactFormState>(field: K, value: ContactFormState[K]) => {
      setFormData((previous) => ({ ...previous, [field]: value }))
    },
    []
  )

  const resetForm = useCallback(() => {
    setIsSuccess(false)
  }, [])

  return {
    formData,
    setFormData,
    budgetValue,
    setBudgetValue,
    isSubmitting,
    isSuccess,
    setIsSuccess,
    validateForm,
    handleSubmit,
    formatPrice,
    updateField,
    resetForm,
  }
}
