import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface BarChartProps {
  data: { label: string; value: number }[];
  width?: number;
  height?: number;
  className?: string;
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  width = 400,
  height = 200,
  className,
}) => {
  const ref = useRef<SVGGElement>(null);
  const isInView = useInView(ref, { once: true });
  const maxValue = Math.max(...data.map((d) => d.value));
  const numBars = data.length;
  const labelHeight = 16;
  const barGap = 6;
  const barHeight = Math.max(
    16,
    (height - numBars * labelHeight - (numBars - 1) * barGap) / numBars,
  );

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={`overflow-visible ${className}`}
    >
      <defs>
        <linearGradient id="barGradientGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D4B77A" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="barGradientNavy" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E293B" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#334155" stopOpacity="1" />
        </linearGradient>
      </defs>
      <g ref={ref}>
        {data.map((item, index) => {
          const y = index * (barHeight + labelHeight + barGap);
          const barWidth = (item.value / maxValue) * (width - 70);
          const isSelected = index === 0;
          const displayValue = `€${(item.value / 1000).toFixed(0)}k`;

          return (
            <g key={index}>
              {/* Label above bar */}
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

              {/* Background track */}
              <rect
                x={0}
                y={y + labelHeight}
                width={width - 45}
                height={barHeight}
                rx="3"
                fill="#F8F5F2"
              />

              {/* Animated bar */}
              <motion.rect
                x={0}
                y={y + labelHeight}
                width={0}
                height={barHeight}
                rx="3"
                fill={
                  isSelected ? "url(#barGradientGold)" : "url(#barGradientNavy)"
                }
                initial={{ width: 0 }}
                animate={isInView ? { width: barWidth } : { width: 0 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />

              {/* Value label at end of bar */}
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
          );
        })}
      </g>
    </svg>
  );
};
