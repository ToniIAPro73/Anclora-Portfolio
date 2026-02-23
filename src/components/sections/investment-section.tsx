import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BarChart3, PieChart, TrendingUp } from "lucide-react"
import { SectionHeading } from "@/components/sections/section-heading"
import type { Translations } from "@/data/translations"
import { convertEurPerSqmToGbpPerSqft } from "@/lib/formatters"

type InvestmentText = Translations["es"]["investment"]
type Language = "es" | "en"

const LineChart = ({
  data,
  width = 400,
  height = 200,
  color = "#C5A059",
}: {
  data: number[]
  width?: number
  height?: number
  color?: string
}) => {
  const pathRef = useRef<SVGPathElement>(null)
  const areaRef = useRef<SVGPathElement>(null)
  const isInView = useInView(pathRef, { once: true })

  const maxValue = Math.max(...data)
  const minValue = Math.min(...data)
  const range = maxValue - minValue

  const padding = { top: 20, right: 20, bottom: 30, left: 35 }
  const chartWidth = width - padding.left - padding.right
  const chartHeight = height - padding.top - padding.bottom

  const points = data.map((value, index) => ({
    x: padding.left + (index / (data.length - 1)) * chartWidth,
    y: padding.top + ((maxValue - value) / range) * chartHeight,
  }))

  const linePath = points.reduce((path, point, index) => {
    return index === 0 ? `M ${point.x} ${point.y}` : `${path} L ${point.x} ${point.y}`
  }, "")

  const areaPath = `${linePath} L ${padding.left + chartWidth} ${padding.top + chartHeight} L ${padding.left} ${padding.top + chartHeight} Z`
  const yLabels = [maxValue, Math.round((maxValue + minValue) / 2), minValue]
  const years = ["2020", "2021", "2022", "2023", "2024", "2025"]

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      <defs>
        <linearGradient id="areaGradientInvestment" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.15" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineGradientInvestment" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="50%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </linearGradient>
      </defs>

      {[0, 0.5, 1].map((ratio, i) => (
        <line
          key={i}
          x1={padding.left}
          y1={padding.top + chartHeight * ratio}
          x2={width - padding.right}
          y2={padding.top + chartHeight * ratio}
          stroke="#E8E4E0"
          strokeWidth="0.5"
          strokeDasharray={ratio === 0.5 ? "4 4" : "none"}
        />
      ))}

      {yLabels.map((label, i) => (
        <text
          key={i}
          x={padding.left - 8}
          y={padding.top + chartHeight * (i / 2) + 4}
          textAnchor="end"
          fontSize="9"
          fill="#94A3B8"
          fontFamily="var(--font-montserrat)"
        >
          {label}
        </text>
      ))}

      {years.map((year, i) => (
        <text
          key={i}
          x={padding.left + (i / (years.length - 1)) * chartWidth}
          y={height - 8}
          textAnchor="middle"
          fontSize="9"
          fill="#94A3B8"
          fontFamily="var(--font-montserrat)"
        >
          {year}
        </text>
      ))}

      <motion.path
        ref={areaRef}
        d={areaPath}
        fill="url(#areaGradientInvestment)"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <motion.path
        ref={pathRef}
        d={linePath}
        fill="none"
        stroke="url(#lineGradientInvestment)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {points.map((point, index) => (
        <motion.circle
          key={index}
          cx={point.x}
          cy={point.y}
          r="4"
          fill="#FAF9F6"
          stroke={color}
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: index * 0.1 + 1.4, duration: 0.3 }}
        />
      ))}
    </svg>
  )
}

const BarChart = ({
  data,
  lang,
  width = 400,
  height = 200,
}: {
  data: { label: string; value: number }[]
  lang: Language
  width?: number
  height?: number
}) => {
  const ref = useRef<SVGGElement>(null)
  const isInView = useInView(ref, { once: true })
  const maxValue = Math.max(...data.map((d) => d.value))
  const numBars = data.length
  const labelHeight = 16
  const barGap = 6
  const barHeight = Math.max(16, (height - numBars * labelHeight - (numBars - 1) * barGap) / numBars)

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      <defs>
        <linearGradient id="barGradientGoldInvestment" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D4B77A" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="barGradientNavyInvestment" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E293B" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#334155" stopOpacity="1" />
        </linearGradient>
      </defs>
      <g ref={ref}>
        {data.map((item, index) => {
          const y = index * (barHeight + labelHeight + barGap)
          const barWidth = (item.value / maxValue) * (width - 70)
          const isSelected = index === 0
          const displayValue =
            lang === "es"
              ? `${new Intl.NumberFormat("es-ES").format(Math.round(item.value))} €`
              : `£ ${new Intl.NumberFormat("en-GB").format(Math.round(item.value))}`

          return (
            <g key={index}>
              <text
                x={0}
                y={y + 11}
                fontSize="10"
                fontWeight={isSelected ? "600" : "400"}
                fill={isSelected ? "#C5A059" : "#64748B"}
                fontFamily="var(--font-montserrat)"
              >
                {item.label}
              </text>

              <rect x={0} y={y + labelHeight} width={width - 45} height={barHeight} rx="3" fill="#F8F5F2" />

              <motion.rect
                x={0}
                y={y + labelHeight}
                width={0}
                height={barHeight}
                rx="3"
                fill={isSelected ? "url(#barGradientGoldInvestment)" : "url(#barGradientNavyInvestment)"}
                initial={{ width: 0 }}
                animate={isInView ? { width: barWidth } : { width: 0 }}
                transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              />

              <motion.text
                x={width - 40}
                y={y + labelHeight + barHeight / 2 + 4}
                fontSize="10"
                fontWeight="600"
                fill={isSelected ? "#C5A059" : "#1E293B"}
                fontFamily="var(--font-montserrat)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.15 + 0.8, duration: 0.4 }}
              >
                {displayValue}
              </motion.text>
            </g>
          )
        })}
      </g>
    </svg>
  )
}

export function InvestmentSection({ t, lang }: { t: InvestmentText; lang: Language }) {
  const marketData = [
    { label: t.locations.andratx, value: 8500 },
    { label: t.locations.ibiza, value: 12000 },
    { label: t.locations.marbella, value: 9800 },
    { label: t.locations.stTropez, value: 15000 },
  ].map((entry) => ({
    label: entry.label,
    value: lang === "es" ? entry.value : convertEurPerSqmToGbpPerSqft(entry.value),
  }))

  return (
    <section id="investment" className="ap-section ap-surface-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={t.badge} title={t.title} titleAccent={t.titleAccent} subtitle={t.subtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#FAF9F6] rounded-2xl p-8 border border-[rgba(15,23,42,0.05)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[rgba(197,160,89,0.1)] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">{t.capitalAppreciation}</h3>
                <p className="text-sm text-[#64748B]">{t.capitalAppreciationDesc}</p>
              </div>
            </div>

            <div className="h-48">
              <LineChart data={[100, 108, 115, 122, 128, 135]} width={300} height={180} />
            </div>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <span className="text-3xl font-serif font-semibold text-[#C5A059]">{t.percentGrowth}</span>
                <p className="text-sm text-[#64748B] mt-1">{t.growth}</p>
              </div>
              <div className="text-right text-sm text-[#64748B]">
                <span>2020</span>
                <span className="mx-2">→</span>
                <span>2025</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#FAF9F6] rounded-2xl p-8 border border-[rgba(15,23,42,0.05)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[rgba(197,160,89,0.1)] flex items-center justify-center">
                <PieChart className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">{t.rentalYield}</h3>
                <p className="text-sm text-[#64748B]">{t.rentalYieldDesc}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{t.longTerm}</span>
                  <span className="text-sm font-semibold text-[#C5A059]">4.2%</span>
                </div>
                <div className="h-3 bg-[#E8E4E0] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "42%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-[#1E293B] rounded-full"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{t.seasonal}</span>
                  <span className="text-sm font-semibold text-[#C5A059]">8.5%</span>
                </div>
                <div className="h-3 bg-[#E8E4E0] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="h-full bg-[#C5A059] rounded-full"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[rgba(15,23,42,0.05)]">
              <p className="text-sm text-[#64748B]">
                {t.netYield} • {lang === "es" ? "Promedio 2023" : "Average 2023"}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#FAF9F6] rounded-2xl p-8 border border-[rgba(15,23,42,0.05)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[rgba(197,160,89,0.1)] flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">{t.marketBenchmark}</h3>
                <p className="text-sm text-[#64748B]">{t.marketBenchmarkDesc}</p>
              </div>
            </div>

            <div className="h-48">
              <BarChart
                data={marketData}
                lang={lang}
                width={300}
                height={180}
              />
            </div>

            <div className="mt-4 text-sm text-[#64748B]">
              {lang === "es" ? `${t.price}/m²` : `${t.price}/sq ft`} • Q4 2024
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
