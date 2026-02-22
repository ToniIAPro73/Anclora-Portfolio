import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface PolarChartProps {
  data: { angle: number; value: number; label: string; color?: string }[];
  width?: number;
  height?: number;
  className?: string;
}

export const PolarChart: React.FC<PolarChartProps> = ({
  data,
  width = 400,
  height = 400,
  className,
}) => {
  const ref = useRef<SVGGElement>(null);
  const isInView = useInView(ref, { once: true });

  const padding = { top: 20, right: 20, bottom: 20, left: 20 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const centerX = chartWidth / 2;
  const centerY = chartHeight / 2;
  const maxRadius = Math.min(chartWidth, chartHeight) / 2 - 20;

  const maxValue = Math.max(...data.map((d) => d.value));

  const getPoint = (angle: number, value: number) => {
    const normalizedValue = value / maxValue;
    const radius = maxRadius * normalizedValue;
    const radian = (angle * Math.PI) / 180;
    return {
      x: centerX + Math.cos(radian) * radius,
      y: centerY + Math.sin(radian) * radius,
    };
  };

  // Create polygon path
  const polygonPoints = data
    .map((item) => {
      const point = getPoint(item.angle, item.value);
      return `${point.x},${point.y}`;
    })
    .join(" ");

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={`overflow-visible ${className}`}
    >
      <defs>
        <linearGradient id="polarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#D4B77A" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient
          id="polarLineGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4B77A" stopOpacity="1" />
        </linearGradient>
      </defs>
      <g ref={ref} transform={`translate(${padding.left}, ${padding.top})`}>
        {/* Concentric circles */}
        {[0.2, 0.4, 0.6, 0.8, 1.0].map((level, index) => (
          <circle
            key={index}
            cx={centerX}
            cy={centerY}
            r={maxRadius * level}
            fill="none"
            stroke="#E8E4E0"
            strokeWidth="1"
            strokeDasharray={level === 0.5 ? "4 4" : "none"}
          />
        ))}

        {/* Radial lines */}
        {data.map((item, index) => {
          const point = getPoint(item.angle, maxValue);
          return (
            <line
              key={index}
              x1={centerX}
              y1={centerY}
              x2={point.x}
              y2={point.y}
              stroke="#E8E4E0"
              strokeWidth="1"
            />
          );
        })}

        {/* Labels */}
        {data.map((item, index) => {
          const point = getPoint(item.angle, maxValue + 10);
          return (
            <text
              key={index}
              x={point.x}
              y={point.y + 4}
              textAnchor="middle"
              fontSize="10"
              fill="#64748B"
              fontFamily="var(--font-montserrat)"
            >
              {item.label}
            </text>
          );
        })}

        {/* Polar area */}
        <motion.polygon
          points={polygonPoints}
          fill="url(#polarGradient)"
          stroke="url(#polarLineGradient)"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          }
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Data points */}
        {data.map((item, index) => {
          const point = getPoint(item.angle, item.value);
          const color = item.color || `hsl(${index * 45}, 70%, 50%)`;

          return (
            <g key={index}>
              {/* Outer glow */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="6"
                fill="transparent"
                stroke={color}
                strokeWidth="1"
                strokeOpacity="0.3"
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
                }
                transition={{ delay: index * 0.1 + 0.8, duration: 0.4 }}
              />
              {/* Main point */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="3"
                fill="#FAF9F6"
                stroke={color}
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
                }
                transition={{ delay: index * 0.1 + 0.6, duration: 0.3 }}
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
};
