import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeading } from "@/components/sections/section-heading"

type FaqItem = {
  question: string
  answer: string
}

type FaqsSectionProps = {
  badge: string
  title: string
  titleAccent: string
  subtitle: string
  items: FaqItem[]
}

export function FaqsSection({
  badge,
  title,
  titleAccent,
  subtitle,
  items,
}: FaqsSectionProps) {
  return (
    <section id="faqs" className="ap-section ap-surface-ivory">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={badge}
          title={title}
          titleAccent={titleAccent}
          subtitle={subtitle}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index + 1}`}
                className="bg-[#FAF9F6] rounded-xl border border-[rgba(15,23,42,0.05)] px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-[#C5A059]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#64748B] leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
