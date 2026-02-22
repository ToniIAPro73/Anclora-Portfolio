import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface ScatterChartProps {
  data: { x: number; y: number; size: number; label: string }[];
  width?: number;
  height?: number;
  className?: string;
}

export const ScatterChart: React.FC<ScatterChartProps> = ({
  data,
  width = 500,
  height = 300,
  className,
}) => {
  const ref = useRef<SVGGElement>(null);
  const isInView = useInView(ref, { once: true });

  // Normalize coordinates
  const xValues = data.map((d) => d.x);
  const yValues = data.map((d) => d.y);
  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);

  const padding = { top: 20, right: 20, bottom: 40, left: 50 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const getPoint = (x: number, y: number) => {
    const normalizedX = (x - xMin) / (xMax - xMin);
    const normalizedY = (y - yMin) / (yMax - yMin);
    return {
      x: padding.left + normalizedX * chartWidth,
      y: padding.top + chartHeight - normalizedY * chartHeight,
    };
  };

  // Axis labels
  const xLabels = ["Low", "Medium", "High"];
  const yLabels = ["Low", "Medium", "High"];

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={`overflow-visible ${className}`}
    >
      <defs>
        <linearGradient
          id="scatterGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4B77A" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <g ref={ref}>
        {/* Grid lines */}
        {[0, 0.5, 1].map((ratio, i) => (
          <g key={i}>
            <line
              x1={padding.left}
              y1={padding.top + chartHeight * ratio}
              x2={width - padding.right}
              y2={padding.top + chartHeight * ratio}
              stroke="#E8E4E0"
              strokeWidth="1"
              strokeDasharray={ratio === 0.5 ? "4 4" : "none"}
            />
            <line
              x1={padding.left + chartWidth * ratio}
              y1={padding.top}
              x2={padding.left + chartWidth * ratio}
              y2={height - padding.bottom}
              stroke="#E8E4E0"
              strokeWidth="1"
              strokeDasharray={ratio === 0.5 ? "4 4" : "none"}
            />
          </g>
        ))}

        {/* Axis labels */}
        {xLabels.map((label, i) => (
          <text
            key={i}
            x={padding.left + (i / 2) * chartWidth}
            y={height - 10}
            textAnchor="middle"
            fontSize="10"
            fill="#64748B"
            fontFamily="var(--font-montserrat)"
          >
            {label}
          </text>
        ))}

        {yLabels.map((label, i) => (
          <text
            key={i}
            x={15}
            y={padding.top + chartHeight * (1 - i / 2) + 4}
            textAnchor="start"
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
          Market Performance
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
          Risk Assessment
        </text>

        {/* Scatter points */}
        {data.map((item, index) => {
          const point = getPoint(item.x, item.y);
          const bubbleSize = Math.max(8, item.size / 20);

          return (
            <g key={index}>
              {/* Glow effect */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r={bubbleSize + 6}
                fill="transparent"
                stroke="#C5A059"
                strokeWidth="1"
                strokeOpacity="0.2"
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
                }
                transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
              />

              {/* Main bubble */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r={bubbleSize}
                fill="url(#scatterGradient)"
                stroke="#C5A059"
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
                }
                transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
              />

              {/* Label */}
              <motion.text
                x={point.x}
                y={point.y - bubbleSize - 8}
                textAnchor="middle"
                fontSize="9"
                fontWeight="500"
                fill="#1E293B"
                fontFamily="var(--font-montserrat)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.15 + 0.8, duration: 0.4 }}
              >
                {item.label}
              </motion.text>
            </g>
          );
        })}
      </g>
    </svg>
  );
};
