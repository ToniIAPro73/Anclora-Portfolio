import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface ViolinChartProps {
  data: { category: string; values: number[]; color?: string }[];
  width?: number;
  height?: number;
  className?: string;
}

export const ViolinChart: React.FC<ViolinChartProps> = ({
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

    return {
      ...item,
      min,
      max,
      median,
      q1,
      q3,
      mean: values.reduce((sum, val) => sum + val, 0) / values.length,
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
    const width = (chartWidth / data.length) * 0.6;

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
        <linearGradient id="violinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
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

        {/* Violin plots */}
        {data.map((item, index) => {
          const color = item.color || `hsl(${index * 60}, 70%, 50%)`;
          const path = getViolinPath(index);

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
                    ? { opacity: 0.8, scale: 1 }
                    : { opacity: 0, scale: 0 }
                }
                transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
              />

              {/* Median line */}
              <motion.line
                x1={getCategoryX(index) - 10}
                y1={getValueY(stats[index].median)}
                x2={getCategoryX(index) + 10}
                y2={getValueY(stats[index].median)}
                stroke="#1E293B"
                strokeWidth="3"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 0.8, duration: 0.4 }}
              />

              {/* Category label */}
              <motion.text
                x={getCategoryX(index)}
                y={padding.top - 10}
                textAnchor="middle"
                fontSize="10"
                fontWeight="600"
                fill="#1E293B"
                fontFamily="var(--font-montserrat)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 1.0, duration: 0.4 }}
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
