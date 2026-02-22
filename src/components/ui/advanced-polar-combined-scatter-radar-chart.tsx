import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface AdvancedPolarCombinedScatterRadarChartProps {
  data: { label: string; value: number; color?: string }[];
  width?: number;
  height?: number;
  className?: string;
}

export const AdvancedPolarCombinedScatterRadarChart: React.FC<
  AdvancedPolarCombinedScatterRadarChartProps
> = ({ data, width = 400, height = 400, className }) => {
  const ref = useRef<SVGGElement>(null);
  const isInView = useInView(ref, { once: true });

  const radius = Math.min(width, height) / 2 - 20;
  const centerX = width / 2;
  const centerY = height / 2;

  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));

  const getPoint = (angle: number, value: number) => {
    const normalizedValue = (value - minValue) / (maxValue - minValue || 1);
    return {
      x: centerX + Math.cos(angle) * radius * normalizedValue,
      y: centerY + Math.sin(angle) * radius * normalizedValue,
    };
  };

  const getAxisPoint = (angle: number) => {
    return {
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
    };
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
          id="advancedPolarCombinedScatterRadarGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4B77A" stopOpacity="1" />
        </linearGradient>
        <filter
          id="advancedPolarCombinedScatterGlow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g ref={ref}>
        {/* Grid circles */}
        {[0.2, 0.4, 0.6, 0.8, 1.0].map((level, index) => (
          <circle
            key={index}
            cx={centerX}
            cy={centerY}
            r={radius * level}
            fill="none"
            stroke="#E8E4E0"
            strokeWidth="1"
            strokeDasharray={level === 0.5 ? "4 4" : "none"}
          />
        ))}

        {/* Axis lines */}
        {data.map((item, index) => {
          const angle = (index / data.length) * 2 * Math.PI - Math.PI / 2;
          const point = getAxisPoint(angle);
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
          const angle = (index / data.length) * 2 * Math.PI - Math.PI / 2;
          const point = getAxisPoint(angle);
          const labelOffset = 16;
          return (
            <text
              key={index}
              x={point.x + Math.cos(angle) * labelOffset}
              y={point.y + Math.sin(angle) * labelOffset}
              textAnchor="middle"
              fontSize="10"
              fill="#64748B"
              fontFamily="var(--font-montserrat)"
            >
              {item.label}
            </text>
          );
        })}

        {/* Advanced scatter points with enhanced animations */}
        {data.map((item, index) => {
          const color = item.color || `hsl(${index * 45}, 70%, 50%)`;
          const angle = (index / data.length) * 2 * Math.PI - Math.PI / 2;
          const point = getPoint(angle, item.value);
          const pointSize = 6 + (item.value / maxValue) * 8;
          const delay = index * 0.15;

          return (
            <g key={index}>
              {/* Enhanced outer glow with rotation */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r={pointSize + 4}
                fill="transparent"
                stroke={color}
                strokeWidth="1"
                strokeOpacity="0.3"
                filter="url(#advancedPolarCombinedScatterGlow)"
                initial={{ scale: 0, opacity: 0, rotate: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1, rotate: 0 }
                    : { scale: 0, opacity: 0, rotate: 0 }
                }
                transition={{
                  delay: delay + 0.5,
                  duration: 0.4,
                  ease: "easeOut",
                }}
              />

              {/* Enhanced main point with rotation */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r={pointSize}
                fill={color}
                stroke="#FAF9F6"
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0, rotate: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1, rotate: 0 }
                    : { scale: 0, opacity: 0, rotate: 0 }
                }
                transition={{
                  delay: delay + 0.3,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              />

              {/* Enhanced value label with rotation */}
              <motion.text
                x={point.x}
                y={point.y + pointSize + 12}
                textAnchor="middle"
                fontSize="9"
                fontWeight="600"
                fill="#1E293B"
                fontFamily="var(--font-montserrat)"
                initial={{ opacity: 0, rotate: 0 }}
                animate={
                  isInView
                    ? { opacity: 1, rotate: 0 }
                    : { opacity: 0, rotate: 0 }
                }
                transition={{
                  delay: delay + 0.7,
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                {item.value}
              </motion.text>

              {/* Enhanced connecting lines with rotation */}
              {index < data.length - 1 && (
                <motion.line
                  x1={point.x}
                  y1={point.y}
                  x2={
                    getPoint(
                      ((index + 1) / data.length) * 2 * Math.PI - Math.PI / 2,
                      data[index + 1].value,
                    ).x
                  }
                  y2={
                    getPoint(
                      ((index + 1) / data.length) * 2 * Math.PI - Math.PI / 2,
                      data[index + 1].value,
                    ).y
                  }
                  stroke="#E8E4E0"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                  initial={{ opacity: 0, pathLength: 0, rotate: 0 }}
                  animate={
                    isInView
                      ? { opacity: 0.5, pathLength: 1, rotate: 0 }
                      : { opacity: 0, pathLength: 0, rotate: 0 }
                  }
                  transition={{
                    delay: delay + 0.9,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                />
              )}
            </g>
          );
        })}
      </g>
    </svg>
  );
};
