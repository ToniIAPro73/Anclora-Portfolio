import { useToast } from "@/hooks/use-toast"
import { useContactForm } from "@/hooks/use-contact-form"
import { useLanguage } from "@/hooks/use-language"
import { useGallery } from "@/hooks/use-gallery"
import { useResidenceSelection } from "@/hooks/use-residence-selection"
import { useSectionNavigation } from "@/hooks/use-section-navigation"
import { useFaqItems } from "@/hooks/use-faq-items"
import { useConversionTracking } from "@/hooks/use-conversion-tracking"
import { translations } from "@/data/translations"
import { formatAreaFromSqm } from "@/lib/formatters"

export const useHomepageController = () => {
  const { lang, toggleLanguage } = useLanguage()
  const {
    selectedGalleryImage,
    setSelectedGalleryImage,
    galleryCategory,
    setGalleryCategory,
    filteredImages,
  } = useGallery()
  const { units: residences, selectedUnit, setSelectedUnit } = useResidenceSelection()
  const { scrollToSection } = useSectionNavigation()
  const { toast } = useToast()
  const t = translations[lang]
  const { items: faqItems } = useFaqItems(t.faqs)
  const { trackEvent } = useConversionTracking(lang)

  const {
    formData,
    setFormData,
    budgetValue,
    setBudgetValue,
    isSubmitting,
    isSuccess,
    setIsSuccess,
    handleSubmit,
    formatPrice,
  } = useContactForm({
    lang,
    toast,
    successTitle: t.contact.form.success,
    successDescription: t.contact.form.successMessage,
    validationTitle: lang === "es" ? "Error de validación" : "Validation error",
    validationDescription:
      lang === "es"
        ? "Por favor complete todos los campos correctamente."
        : "Please complete all fields correctly.",
    onSubmitAttempt: () => trackEvent("contact_form_submit_attempt"),
    onSubmitSuccess: () => trackEvent("contact_form_submit_success"),
    onSubmitError: () => trackEvent("contact_form_submit_error"),
  })

  return {
    lang,
    t,
    toggleLanguage,
    scrollToSection,
    faqItems,
    residences,
    selectedUnit,
    setSelectedUnit,
    selectedGalleryImage,
    setSelectedGalleryImage,
    galleryCategory,
    setGalleryCategory,
    filteredImages,
    formData,
    setFormData,
    budgetValue,
    setBudgetValue,
    isSubmitting,
    isSuccess,
    setIsSuccess,
    handleSubmit,
    formatPrice,
    formatArea: (sqm: number) => formatAreaFromSqm(lang, sqm),
    trackEvent,
  }
}
