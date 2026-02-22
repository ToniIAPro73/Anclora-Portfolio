import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface AreaChartProps {
  data: { x: string; y: number }[];
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const AreaChart: React.FC<AreaChartProps> = ({
  data,
  width = 400,
  height = 200,
  color = "#C5A059",
  className,
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const areaRef = useRef<SVGPathElement>(null);
  const isInView = useInView(pathRef, { once: true });

  const maxValue = Math.max(...data.map((d) => d.y));
  const minValue = Math.min(...data.map((d) => d.y));
  const range = maxValue - minValue || 1;
  const padding = { top: 20, right: 20, bottom: 30, left: 40 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const points = data.map((value, index) => {
    const x = padding.left + (index / (data.length - 1)) * chartWidth;
    const y =
      padding.top + chartHeight - ((value.y - minValue) / range) * chartHeight;
    return { x, y };
  });

  const linePath = `M ${points.map((p) => `${p.x},${p.y}`).join(" L ")}`;
  const areaPath = `M ${points[0].x},${padding.top + chartHeight} L ${points.map((p) => `${p.x},${p.y}`).join(" L ")} L ${points[points.length - 1].x},${padding.top + chartHeight} Z`;

  // Y-axis labels
  const yLabels = [maxValue, Math.round((maxValue + minValue) / 2), minValue];

  // X-axis labels
  const xLabels = data.map((d) => d.x);

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={`overflow-visible ${className}`}
    >
      <defs>
        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="50%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Subtle grid lines */}
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

      {/* Y-axis labels */}
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

      {/* X-axis labels */}
      {xLabels.map((label, i) => (
        <text
          key={i}
          x={padding.left + (i / (xLabels.length - 1)) * chartWidth}
          y={height - 8}
          textAnchor="middle"
          fontSize="9"
          fill="#94A3B8"
          fontFamily="var(--font-montserrat)"
        >
          {label}
        </text>
      ))}

      {/* Area fill */}
      <motion.path
        ref={areaRef}
        d={areaPath}
        fill="url(#areaGradient)"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Main line */}
      <motion.path
        ref={pathRef}
        d={linePath}
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Data points */}
      {points.map((point, index) => (
        <g key={index}>
          {/* Outer glow ring */}
          <motion.circle
            cx={point.x}
            cy={point.y}
            r="8"
            fill="transparent"
            stroke={color}
            strokeWidth="1"
            strokeOpacity="0.3"
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
            }
            transition={{ delay: index * 0.1 + 1.8, duration: 0.4 }}
          />
          {/* Main point */}
          <motion.circle
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#FAF9F6"
            stroke={color}
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
            }
            transition={{ delay: index * 0.1 + 1.5, duration: 0.3 }}
          />
        </g>
      ))}
    </svg>
  );
};
