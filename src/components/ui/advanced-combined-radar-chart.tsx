import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface AdvancedCombinedRadarChartProps {
  data: { label: string; value: number }[];
  width?: number;
  height?: number;
  className?: string;
}

export const AdvancedCombinedRadarChart: React.FC<
  AdvancedCombinedRadarChartProps
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

  const polygonPoints = data
    .map((item, index) => {
      const angle = (index / data.length) * 2 * Math.PI - Math.PI / 2;
      return getPoint(angle, item.value);
    })
    .map((p) => `${p.x},${p.y}`)
    .join(" ");

  const linePath = `M ${data
    .map((item, index) => {
      const angle = (index / data.length) * 2 * Math.PI - Math.PI / 2;
      const point = getPoint(angle, item.value);
      return `${point.x},${point.y}`;
    })
    .join(" L ")} Z`;

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={`overflow-visible ${className}`}
    >
      <defs>
        <linearGradient
          id="advancedCombinedRadarAreaGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D4B77A" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient
          id="advancedCombinedRadarLineGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4B77A" stopOpacity="1" />
        </linearGradient>
        <filter
          id="advancedCombinedRadarGlow"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g ref={ref}>
        {/* Grid circles with enhanced styling */}
        {[0.2, 0.4, 0.6, 0.8, 1.0].map((level, index) => (
          <motion.circle
            key={index}
            cx={centerX}
            cy={centerY}
            r={radius * level}
            fill="none"
            stroke="#E8E4E0"
            strokeWidth="1"
            strokeDasharray={level === 0.5 ? "4 4" : "none"}
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ delay: index * 0.1, duration: 0.5 }}
          />
        ))}

        {/* Axis lines with enhanced animations */}
        {data.map((item, index) => {
          const angle = (index / data.length) * 2 * Math.PI - Math.PI / 2;
          const point = getAxisPoint(angle);
          return (
            <motion.line
              key={index}
              x1={centerX}
              y1={centerY}
              x2={point.x}
              y2={point.y}
              stroke="#E8E4E0"
              strokeWidth="1"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={
                isInView
                  ? { opacity: 1, pathLength: 1 }
                  : { opacity: 0, pathLength: 0 }
              }
              transition={{ delay: index * 0.15, duration: 0.6 }}
            />
          );
        })}

        {/* Labels with enhanced animations */}
        {data.map((item, index) => {
          const angle = (index / data.length) * 2 * Math.PI - Math.PI / 2;
          const point = getAxisPoint(angle);
          const labelOffset = 16;
          return (
            <motion.text
              key={index}
              x={point.x + Math.cos(angle) * labelOffset}
              y={point.y + Math.sin(angle) * labelOffset}
              textAnchor="middle"
              fontSize="10"
              fill="#64748B"
              fontFamily="var(--font-montserrat)"
              initial={{
                opacity: 0,
                y: point.y + Math.sin(angle) * labelOffset + 10,
              }}
              animate={
                isInView
                  ? { opacity: 1, y: point.y + Math.sin(angle) * labelOffset }
                  : {
                      opacity: 0,
                      y: point.y + Math.sin(angle) * labelOffset + 10,
                    }
              }
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {item.label}
            </motion.text>
          );
        })}

        {/* Advanced polar area with complex animations */}
        <motion.polygon
          points={polygonPoints}
          fill="url(#advancedCombinedRadarAreaGradient)"
          stroke="url(#advancedCombinedRadarLineGradient)"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={
            isInView
              ? { opacity: 0.6, scale: 1, rotate: 0 }
              : { opacity: 0, scale: 0, rotate: 0 }
          }
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Advanced polar line with complex animations */}
        <motion.path
          d={linePath}
          fill="none"
          stroke="url(#advancedCombinedRadarLineGradient)"
          strokeWidth="3"
          filter="url(#advancedCombinedRadarGlow)"
          initial={{ pathLength: 0, opacity: 0, rotate: 0 }}
          animate={
            isInView
              ? { pathLength: 1, opacity: 1, rotate: 0 }
              : { pathLength: 0, opacity: 0, rotate: 0 }
          }
          transition={{ duration: 2.0, ease: "easeInOut", delay: 0.8 }}
        />

        {/* Advanced data points with complex animations */}
        {data.map((item, index) => {
          const angle = (index / data.length) * 2 * Math.PI - Math.PI / 2;
          const point = getPoint(angle, item.value);
          const delay = index * 0.15;

          return (
            <g key={index}>
              {/* Enhanced outer glow with rotation */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="6"
                fill="transparent"
                stroke="#C5A059"
                strokeWidth="1"
                strokeOpacity="0.3"
                filter="url(#advancedCombinedRadarGlow)"
                initial={{ scale: 0, opacity: 0, rotate: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1, rotate: 0 }
                    : { scale: 0, opacity: 0, rotate: 0 }
                }
                transition={{
                  delay: delay + 1.0,
                  duration: 0.4,
                  ease: "easeOut",
                }}
              />
              {/* Enhanced main point with rotation */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="4"
                fill="#FAF9F6"
                stroke="#C5A059"
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0, rotate: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1, rotate: 0 }
                    : { scale: 0, opacity: 0, rotate: 0 }
                }
                transition={{
                  delay: delay + 0.8,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              />
              {/* Enhanced value label with rotation */}
              <motion.text
                x={point.x}
                y={point.y + 10}
                textAnchor="middle"
                fontSize="9"
                fontWeight="600"
                fill="#1E293B"
                fontFamily="var(--font-montserrat)"
                initial={{ opacity: 0, y: point.y + 10, rotate: 0 }}
                animate={
                  isInView
                    ? { opacity: 1, y: point.y + 10, rotate: 0 }
                    : { opacity: 0, y: point.y + 10, rotate: 0 }
                }
                transition={{
                  delay: delay + 1.2,
                  duration: 0.4,
                  ease: "easeOut",
                }}
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
