import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface PolarBarRadarChartProps {
  data: { label: string; value: number }[];
  width?: number;
  height?: number;
  className?: string;
}

export const PolarBarRadarChart: React.FC<PolarBarRadarChartProps> = ({
  data,
  width = 400,
  height = 400,
  className,
}) => {
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

  const getBarPath = (index: number) => {
    const angle = (index / data.length) * 2 * Math.PI - Math.PI / 2;
    const centerAngle = angle;
    const halfWidth = ((2 * Math.PI) / data.length) * 0.4;

    const startAngle = centerAngle - halfWidth;
    const endAngle = centerAngle + halfWidth;

    const innerRadius = 0;
    const outerRadius =
      radius * ((data[index].value - minValue) / (maxValue - minValue || 1));

    const x1 = centerX + Math.cos(startAngle) * innerRadius;
    const y1 = centerY + Math.sin(startAngle) * innerRadius;
    const x2 = centerX + Math.cos(endAngle) * innerRadius;
    const y2 = centerY + Math.sin(endAngle) * innerRadius;
    const x3 = centerX + Math.cos(endAngle) * outerRadius;
    const y3 = centerY + Math.sin(endAngle) * outerRadius;
    const x4 = centerX + Math.cos(startAngle) * outerRadius;
    const y4 = centerY + Math.sin(startAngle) * outerRadius;

    return `M ${x1},${y1} L ${x2},${y2} A ${outerRadius},${outerRadius} 0 0 1 ${x3},${y3} L ${x4},${y4} A ${outerRadius},${outerRadius} 0 0 0 ${x1},${y1} Z`;
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
          id="polarBarRadarGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4B77A" stopOpacity="1" />
        </linearGradient>
        <linearGradient
          id="polarBarRadarInnerGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D4B77A" stopOpacity="0.1" />
        </linearGradient>
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

        {/* Polar bars */}
        {data.map((item, index) => {
          const color = `hsl(${index * 45}, 70%, 50%)`;
          const barPath = getBarPath(index);

          return (
            <g key={index}>
              {/* Bar background */}
              <motion.path
                d={barPath}
                fill="url(#polarBarRadarInnerGradient)"
                stroke="#FAF9F6"
                strokeWidth="1"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView
                    ? { opacity: 0.6, scale: 1 }
                    : { opacity: 0, scale: 0 }
                }
                transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
              />

              {/* Bar foreground */}
              <motion.path
                d={barPath}
                fill={color}
                stroke="#C5A059"
                strokeWidth="2"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
              />

              {/* Value label */}
              <motion.text
                x={
                  centerX +
                  Math.cos((index / data.length) * 2 * Math.PI - Math.PI / 2) *
                    radius *
                    0.8
                }
                y={
                  centerY +
                  Math.sin((index / data.length) * 2 * Math.PI - Math.PI / 2) *
                    radius *
                    0.8 +
                  4
                }
                textAnchor="middle"
                fontSize="10"
                fontWeight="600"
                fill="#1E293B"
                fontFamily="var(--font-montserrat)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 0.8, duration: 0.4 }}
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
