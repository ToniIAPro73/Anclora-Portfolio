import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface HeatmapChartProps {
  data: { x: string; y: string; value: number }[];
  width?: number;
  height?: number;
  className?: string;
}

export const HeatmapChart: React.FC<HeatmapChartProps> = ({
  data,
  width = 500,
  height = 300,
  className,
}) => {
  const ref = useRef<SVGGElement>(null);
  const isInView = useInView(ref, { once: true });

  // Get unique x and y values
  const xValues = Array.from(new Set(data.map((d) => d.x)));
  const yValues = Array.from(new Set(data.map((d) => d.y)));

  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));

  const padding = { top: 20, right: 20, bottom: 40, left: 60 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const cellWidth = chartWidth / xValues.length;
  const cellHeight = chartHeight / yValues.length;

  const getColor = (value: number) => {
    const normalized = (value - minValue) / (maxValue - minValue);
    const r = Math.round(197 + normalized * 19); // C5A059 to D4B77A
    const g = Math.round(160 + normalized * 23);
    const b = Math.round(89 + normalized * 21);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={`overflow-visible ${className}`}
    >
      <defs>
        <linearGradient id="heatmapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#D4B77A" />
        </linearGradient>
      </defs>
      <g ref={ref}>
        {/* Y-axis labels */}
        {yValues.map((label, i) => (
          <text
            key={i}
            x={padding.left - 10}
            y={padding.top + (i + 0.5) * cellHeight}
            textAnchor="end"
            fontSize="10"
            fill="#64748B"
            fontFamily="var(--font-montserrat)"
          >
            {label}
          </text>
        ))}

        {/* X-axis labels */}
        {xValues.map((label, i) => (
          <text
            key={i}
            x={padding.left + (i + 0.5) * cellWidth}
            y={height - 10}
            textAnchor="middle"
            fontSize="10"
            fill="#64748B"
            fontFamily="var(--font-montserrat)"
          >
            {label}
          </text>
        ))}

        {/* Axis titles */}
        <text
          x={width / 2}
          y={height - 2}
          textAnchor="middle"
          fontSize="10"
          fill="#94A3B8"
          fontFamily="var(--font-montserrat)"
        >
          Time Period
        </text>

        <text
          x={8}
          y={height / 2}
          textAnchor="middle"
          fontSize="10"
          fill="#94A3B8"
          fontFamily="var(--font-montserrat)"
          transform={`rotate(-90, 8, ${height / 2})`}
        >
          Asset Class
        </text>

        {/* Heatmap cells */}
        {data.map((item, index) => {
          const xIndex = xValues.indexOf(item.x);
          const yIndex = yValues.indexOf(item.y);
          const x = padding.left + xIndex * cellWidth;
          const y = padding.top + yIndex * cellHeight;
          const color = getColor(item.value);

          return (
            <g key={index}>
              {/* Cell background */}
              <motion.rect
                x={x + 1}
                y={y + 1}
                width={cellWidth - 2}
                height={cellHeight - 2}
                fill={color}
                stroke="#FAF9F6"
                strokeWidth="1"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ delay: index * 0.05 + 0.3, duration: 0.4 }}
              />

              {/* Value text */}
              <motion.text
                x={x + cellWidth / 2}
                y={y + cellHeight / 2 + 4}
                textAnchor="middle"
                fontSize="9"
                fontWeight="600"
                fill="#1E293B"
                fontFamily="var(--font-montserrat)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.05 + 0.8, duration: 0.4 }}
              >
                {item.value}
              </motion.text>
            </g>
          );
        })}
      </g>
    </svg>
  );
};
