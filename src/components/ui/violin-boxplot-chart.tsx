import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface ViolinBoxplotChartProps {
  data: { category: string; values: number[]; color?: string }[];
  width?: number;
  height?: number;
  className?: string;
}

export const ViolinBoxplotChart: React.FC<ViolinBoxplotChartProps> = ({
  data,
  width = 600,
  height = 400,
  className,
}) => {
  const ref = useRef<SVGGElement>(null);
  const isInView = useInView(ref, { once: true });

  const padding = { top: 20, right: 20, bottom: 40, left: 60 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Calculate statistics for each category
  const stats = data.map((item) => {
    const values = item.values.sort((a, b) => a - b);
    const min = values[0];
    const max = values[values.length - 1];
    const median = values[Math.floor(values.length / 2)];
    const q1 = values[Math.floor(values.length * 0.25)];
    const q3 = values[Math.floor(values.length * 0.75)];
    const iqr = q3 - q1;
    const lowerWhisker = Math.max(min, q1 - 1.5 * iqr);
    const upperWhisker = Math.min(max, q3 + 1.5 * iqr);

    return {
      ...item,
      min,
      max,
      median,
      q1,
      q3,
      iqr,
      lowerWhisker,
      upperWhisker,
    };
  });

  const allValues = stats.flatMap((s) => s.values);
  const minValue = Math.min(...allValues);
  const maxValue = Math.max(...allValues);
  const valueRange = maxValue - minValue;

  const getCategoryX = (index: number) => {
    const categoryWidth = chartWidth / data.length;
    return padding.left + index * categoryWidth + categoryWidth / 2;
  };

  const getValueY = (value: number) => {
    const normalized = (value - minValue) / valueRange;
    return padding.top + chartHeight - normalized * chartHeight;
  };

  const getViolinPath = (categoryIndex: number) => {
    const category = stats[categoryIndex];
    const x = getCategoryX(categoryIndex);
    const width = (chartWidth / data.length) * 0.4;

    // Create a simple violin shape based on quartiles
    const topY = getValueY(category.max);
    const q3Y = getValueY(category.q3);
    const medianY = getValueY(category.median);
    const q1Y = getValueY(category.q1);
    const bottomY = getValueY(category.min);

    return `
      M ${x} ${topY}
      C ${x + width / 2} ${topY}, ${x + width / 2} ${q3Y}, ${x} ${q3Y}
      L ${x} ${q1Y}
      C ${x + width / 2} ${q1Y}, ${x + width / 2} ${bottomY}, ${x} ${bottomY}
      C ${x - width / 2} ${bottomY}, ${x - width / 2} ${q1Y}, ${x} ${q1Y}
      L ${x} ${q3Y}
      C ${x - width / 2} ${q3Y}, ${x - width / 2} ${topY}, ${x} ${topY}
      Z
    `;
  };

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={`overflow-visible ${className}`}
    >
      <defs>
        <linearGradient
          id="violinBoxplotGradient"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D4B77A" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <g ref={ref}>
        {/* Y-axis grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
          <line
            key={i}
            x1={padding.left}
            y1={padding.top + chartHeight * ratio}
            x2={width - padding.right}
            y2={padding.top + chartHeight * ratio}
            stroke="#E8E4E0"
            strokeWidth="1"
            strokeDasharray={ratio === 0.5 ? "4 4" : "none"}
          />
        ))}

        {/* Y-axis labels */}
        {[maxValue, (maxValue + minValue) / 2, minValue].map((value, i) => (
          <text
            key={i}
            x={padding.left - 10}
            y={getValueY(value) + 4}
            textAnchor="end"
            fontSize="10"
            fill="#94A3B8"
            fontFamily="var(--font-montserrat)"
          >
            {Math.round(value)}
          </text>
        ))}

        {/* X-axis labels */}
        {data.map((item, index) => (
          <text
            key={index}
            x={getCategoryX(index)}
            y={height - 10}
            textAnchor="middle"
            fontSize="10"
            fill="#64748B"
            fontFamily="var(--font-montserrat)"
          >
            {item.category}
          </text>
        ))}

        {/* Axis title */}
        <text
          x={width / 2}
          y={height - 2}
          textAnchor="middle"
          fontSize="10"
          fill="#94A3B8"
          fontFamily="var(--font-montserrat)"
        >
          Categories
        </text>

        {/* Violin plots with box plots */}
        {data.map((item, index) => {
          const color = item.color || `hsl(${index * 60}, 70%, 50%)`;
          const path = getViolinPath(index);
          const categoryX = getCategoryX(index);
          const boxWidth = (chartWidth / data.length) * 0.2;

          const lowerWhiskerY = getValueY(stats[index].lowerWhisker);
          const q1Y = getValueY(stats[index].q1);
          const medianY = getValueY(stats[index].median);
          const q3Y = getValueY(stats[index].q3);
          const upperWhiskerY = getValueY(stats[index].upperWhisker);

          return (
            <g key={index}>
              {/* Violin shape */}
              <motion.path
                d={path}
                fill={color}
                stroke="#FAF9F6"
                strokeWidth="2"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView
                    ? { opacity: 0.4, scale: 1 }
                    : { opacity: 0, scale: 0 }
                }
                transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
              />

              {/* Whiskers */}
              <motion.line
                x1={categoryX}
                y1={lowerWhiskerY}
                x2={categoryX}
                y2={upperWhiskerY}
                stroke="#E8E4E0"
                strokeWidth="2"
                initial={{ opacity: 0, y1: lowerWhiskerY, y2: upperWhiskerY }}
                animate={
                  isInView
                    ? { opacity: 1, y1: lowerWhiskerY, y2: upperWhiskerY }
                    : { opacity: 0, y1: lowerWhiskerY, y2: upperWhiskerY }
                }
                transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
              />

              {/* Whisker caps */}
              <motion.line
                x1={categoryX - boxWidth}
                y1={lowerWhiskerY}
                x2={categoryX + boxWidth}
                y2={lowerWhiskerY}
                stroke="#E8E4E0"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 0.7, duration: 0.4 }}
              />

              <motion.line
                x1={categoryX - boxWidth}
                y1={upperWhiskerY}
                x2={categoryX + boxWidth}
                y2={upperWhiskerY}
                stroke="#E8E4E0"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 0.7, duration: 0.4 }}
              />

              {/* Box */}
              <motion.rect
                x={categoryX - boxWidth}
                y={q3Y}
                width={boxWidth * 2}
                height={q1Y - q3Y}
                fill="#FAF9F6"
                stroke="#1E293B"
                strokeWidth="2"
                initial={{ opacity: 0, height: 0, y: (q1Y + q3Y) / 2 }}
                animate={
                  isInView
                    ? { opacity: 1, height: q1Y - q3Y, y: q3Y }
                    : { opacity: 0, height: 0, y: (q1Y + q3Y) / 2 }
                }
                transition={{ delay: index * 0.2 + 0.9, duration: 0.6 }}
              />

              {/* Median line */}
              <motion.line
                x1={categoryX - boxWidth}
                y1={medianY}
                x2={categoryX + boxWidth}
                y2={medianY}
                stroke="#1E293B"
                strokeWidth="3"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 1.2, duration: 0.4 }}
              />

              {/* Category label */}
              <motion.text
                x={categoryX}
                y={padding.top - 10}
                textAnchor="middle"
                fontSize="10"
                fontWeight="600"
                fill="#1E293B"
                fontFamily="var(--font-montserrat)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 1.4, duration: 0.4 }}
              >
                {item.category}
              </motion.text>
            </g>
          );
        })}
      </g>
    </svg>
  );
};
