import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface DonutChartProps {
  data: { label: string; value: number; color: string }[];
  size?: number;
  className?: string;
}

export const DonutChart: React.FC<DonutChartProps> = ({
  data,
  size = 200,
  className,
}) => {
  const ref = useRef<SVGGElement>(null);
  const isInView = useInView(ref, { once: true });
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const radius = size / 2 - 10;
  const innerRadius = radius * 0.6;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
    >
      <defs>
        {data.map((item, index) => (
          <linearGradient
            key={index}
            id={`gradient-${index}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor={item.color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={item.color} stopOpacity="1" />
          </linearGradient>
        ))}
      </defs>
      <g ref={ref} transform={`translate(${size / 2}, ${size / 2})`}>
        {/* Background track */}
        <circle r={radius} fill="none" stroke="#F8F5F2" strokeWidth="12" />

        {/* Segments */}
        {data.map((item, index) => {
          const percentage = item.value / total;
          const startAngle =
            (data.slice(0, index).reduce((sum, d) => sum + d.value, 0) /
              total) *
            2 *
            Math.PI;
          const endAngle = startAngle + percentage * 2 * Math.PI;
          const start = {
            x: radius * Math.cos(startAngle - Math.PI / 2),
            y: radius * Math.sin(startAngle - Math.PI / 2),
          };
          const end = {
            x: radius * Math.cos(endAngle - Math.PI / 2),
            y: radius * Math.sin(endAngle - Math.PI / 2),
          };
          const largeArcFlag = percentage > 0.5 ? 1 : 0;

          return (
            <motion.path
              key={index}
              d={`M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`}
              fill="none"
              stroke={`url(#gradient-${index})`}
              strokeWidth="12"
              strokeLinecap="round"
              initial={{
                strokeDasharray: `${circumference} ${circumference}`,
                strokeDashoffset: circumference,
              }}
              animate={
                isInView
                  ? {
                      strokeDasharray: `${circumference} ${circumference}`,
                      strokeDashoffset: circumference * (1 - percentage),
                    }
                  : {
                      strokeDasharray: `${circumference} ${circumference}`,
                      strokeDashoffset: circumference,
                    }
              }
              transition={{
                duration: 1.5,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          );
        })}

        {/* Inner circle */}
        <motion.circle
          r={innerRadius}
          fill="#FAF9F6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          }
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        />

        {/* Center text */}
        <text
          x={0}
          y={0}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="12"
          fontWeight="600"
          fill="#1E293B"
          fontFamily="var(--font-montserrat)"
        >
          Portfolio
        </text>
      </g>
    </svg>
  );
};
