import { motion } from "framer-motion"

type SectionHeadingProps = {
  badge: string
  title: string
  titleAccent: string
  subtitle: string
  centered?: boolean
  subtitleClassName?: string
}

export function SectionHeading({
  badge,
  title,
  titleAccent,
  subtitle,
  centered = true,
  subtitleClassName,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center mb-16" : undefined}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1 rounded-full bg-[rgba(197,160,89,0.1)] text-[#C5A059] text-sm font-medium mb-4"
      >
        {badge}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl lg:text-5xl font-serif font-semibold"
      >
        {title} <span className="text-[#C5A059]">{titleAccent}</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={subtitleClassName ?? "mt-4 text-[#64748B] max-w-2xl mx-auto"}
      >
        {subtitle}
      </motion.p>
    </div>
  )
}
