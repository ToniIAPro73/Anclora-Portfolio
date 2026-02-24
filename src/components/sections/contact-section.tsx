import type { Dispatch, SetStateAction } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeading } from "@/components/sections/section-heading"
import type { Language } from "@/types"

type ContactText = {
  badge: string
  title: string
  titleAccent: string
  subtitle: string
  privacy: string
  form: {
    name: string
    namePlaceholder: string
    email: string
    emailPlaceholder: string
    phone: string
    phonePlaceholder: string
    budget: string
    interest: string
    requiredHint: string
    readinessReady: string
    readinessPending: string
    trustNote: string
    interests: {
      investment: string
      residence: string
      vacation: string
    }
    message: string
    messagePlaceholder: string
    messageCount: string
    submit: string
    submitting: string
    success: string
    successMessage: string
  }
}

type FooterText = {
  address: string
  city: string
  postcode: string
  spain: string
  phone: string
  email: string
  tagline: string
}

type ContactFormState = {
  name: string
  email: string
  phone: string
  interest: "investment" | "residence" | "vacation"
  message: string
}

type ContactSectionProps = {
  tContact: ContactText
  tFooter: FooterText
  lang: Language
  formData: ContactFormState
  setFormData: Dispatch<SetStateAction<ContactFormState>>
  budgetValue: number[]
  setBudgetValue: Dispatch<SetStateAction<number[]>>
  formatPrice: (price: number) => string
  isSubmitting: boolean
  isSuccess: boolean
  setIsSuccess: (value: boolean) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
}

export function ContactSection({
  tContact,
  tFooter,
  lang,
  formData,
  setFormData,
  budgetValue,
  setBudgetValue,
  formatPrice,
  isSubmitting,
  isSuccess,
  setIsSuccess,
  handleSubmit,
}: ContactSectionProps) {
  const maxMessageLength = 600
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  const isFormValid =
    Boolean(formData.name.trim()) &&
    isEmailValid &&
    Boolean(formData.phone.trim())

  return (
    <section id="contact" className="ap-section ap-surface-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading
              badge={tContact.badge}
              title={tContact.title}
              titleAccent={tContact.titleAccent}
              subtitle={tContact.subtitle}
              centered={false}
              subtitleClassName="mt-4 text-[#64748B] max-w-lg"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[rgba(197,160,89,0.1)] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-semibold">{tFooter.address}</h4>
                  <p className="text-[#64748B]">
                    {tFooter.city}, {tFooter.postcode}
                  </p>
                  <p className="text-[#64748B]">{tFooter.spain}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[rgba(197,160,89,0.1)] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-semibold">{tFooter.phone}</h4>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[rgba(197,160,89,0.1)] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-semibold">{tFooter.email}</h4>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-10 relative h-64 rounded-xl overflow-hidden"
            >
              <Image
                src="/images/lifestyle/marina.png"
                alt="Port d'Andratx Marina"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-script text-2xl text-[#C5A059]">{tFooter.tagline}</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#F8F5F2] rounded-2xl p-8 border border-[rgba(15,23,42,0.05)]"
          >
            {isSuccess ? (
              <div className="text-center py-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 rounded-full bg-[rgba(197,160,89,0.1)] flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-[#C5A059]" />
                </motion.div>
                <h3 className="font-serif text-2xl font-semibold mb-2">{tContact.form.success}</h3>
                <p className="text-[#64748B]">{tContact.form.successMessage}</p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="mt-6 border-[#C5A059] text-[#C5A059]"
                >
                  {lang === "es" ? "Enviar otra consulta" : "Send another consultation"}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">{tContact.form.name}</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={tContact.form.namePlaceholder}
                      className="mt-2 bg-[#FAF9F6] border-[rgba(15,23,42,0.1)]"
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">{tContact.form.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={tContact.form.emailPlaceholder}
                      className="mt-2 bg-[#FAF9F6] border-[rgba(15,23,42,0.1)]"
                      autoComplete="email"
                      inputMode="email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">{tContact.form.phone}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={tContact.form.phonePlaceholder}
                    className="mt-2 bg-[#FAF9F6] border-[rgba(15,23,42,0.1)]"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                  />
                </div>

                <div>
                  <Label>{tContact.form.budget}</Label>
                  <div className="mt-4 px-2">
                    <Slider
                      value={budgetValue}
                      onValueChange={setBudgetValue}
                      min={2000000}
                      max={15000000}
                      step={500000}
                      className="w-full"
                    />
                    <div className="flex justify-between mt-2 text-sm text-[#64748B]">
                      <span>{formatPrice(2000000)}</span>
                      <span className="font-semibold text-[#C5A059]">{formatPrice(budgetValue[0])}</span>
                      <span>{formatPrice(15000000)}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="interest">{tContact.form.interest}</Label>
                  <Select
                    value={formData.interest}
                    onValueChange={(value) =>
                      setFormData({ ...formData, interest: value as ContactFormState["interest"] })
                    }
                  >
                    <SelectTrigger className="mt-2 bg-[#FAF9F6] border-[rgba(15,23,42,0.1)]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="investment">{tContact.form.interests.investment}</SelectItem>
                      <SelectItem value="residence">{tContact.form.interests.residence}</SelectItem>
                      <SelectItem value="vacation">{tContact.form.interests.vacation}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">{tContact.form.message}</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={tContact.form.messagePlaceholder}
                    className="mt-2 bg-[#FAF9F6] border-[rgba(15,23,42,0.1)] min-h-[100px]"
                    maxLength={maxMessageLength}
                  />
                  <p className="mt-2 text-xs text-[#64748B] text-right">
                    {formData.message.length}/{maxMessageLength} {tContact.form.messageCount}
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className="w-full bg-[#C5A059] hover:bg-[#A8893D] text-[#0F172A] font-medium py-6"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-[#0F172A] border-t-transparent rounded-full mr-2"
                      />
                      {tContact.form.submitting}
                    </>
                  ) : (
                    <>
                      {tContact.form.submit}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-[#64748B] text-center">{tContact.form.requiredHint}</p>
                <p className="text-xs text-[#64748B] text-center" role="status" aria-live="polite">
                  {isFormValid ? tContact.form.readinessReady : tContact.form.readinessPending}
                </p>
                <p className="text-xs text-[#64748B] text-center">{tContact.form.trustNote}</p>
                <p className="text-xs text-[#64748B] text-center">{tContact.privacy}</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
