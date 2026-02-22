import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface TreemapChartProps {
  data: { name: string; value: number; color?: string }[];
  width?: number;
  height?: number;
  className?: string;
}

export const TreemapChart: React.FC<TreemapChartProps> = ({
  data,
  width = 500,
  height = 300,
  className,
}) => {
  const ref = useRef<SVGGElement>(null);
  const isInView = useInView(ref, { once: true });

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const padding = { top: 10, right: 10, bottom: 10, left: 10 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Calculate positions using a simple squarified treemap algorithm
  const calculatePositions = () => {
    const positions: Array<{
      x: number;
      y: number;
      width: number;
      height: number;
    }> = [];
    let currentX = 0;
    let currentY = 0;
    let currentRowHeight = 0;

    data.forEach((item, index) => {
      const ratio = item.value / total;
      const area = ratio * chartWidth * chartHeight;

      // Simple layout: arrange in rows
      const cellWidth = Math.sqrt(area);
      const cellHeight = area / cellWidth;

      if (currentX + cellWidth > chartWidth) {
        currentX = 0;
        currentY += currentRowHeight;
        currentRowHeight = cellHeight;
      }

      positions.push({
        x: currentX,
        y: currentY,
        width: cellWidth,
        height: cellHeight,
      });

      currentX += cellWidth;
      currentRowHeight = Math.max(currentRowHeight, cellHeight);
    });

    return positions;
  };

  const positions = calculatePositions();

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={`overflow-visible ${className}`}
    >
      <defs>
        <linearGradient
          id="treemapGradient"
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
        {/* Treemap cells */}
        {data.map((item, index) => {
          const pos = positions[index];
          const color = item.color || `hsl(${index * 45}, 70%, 50%)`;

          return (
            <g key={index}>
              {/* Cell background */}
              <motion.rect
                x={padding.left + pos.x}
                y={padding.top + pos.y}
                width={pos.width}
                height={pos.height}
                fill={color}
                stroke="#FAF9F6"
                strokeWidth="2"
                rx="4"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              />

              {/* Value text */}
              <motion.text
                x={padding.left + pos.x + pos.width / 2}
                y={padding.top + pos.y + pos.height / 2 + 4}
                textAnchor="middle"
                fontSize="10"
                fontWeight="600"
                fill="#1E293B"
                fontFamily="var(--font-montserrat)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.8, duration: 0.4 }}
              >
                {item.name}
              </motion.text>

              {/* Subtitle */}
              <motion.text
                x={padding.left + pos.x + pos.width / 2}
                y={padding.top + pos.y + pos.height / 2 + 16}
                textAnchor="middle"
                fontSize="8"
                fontWeight="400"
                fill="#64748B"
                fontFamily="var(--font-montserrat)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 1.0, duration: 0.4 }}
              >
                €{item.value.toLocaleString()}
              </motion.text>
            </g>
          );
        })}
      </g>
    </svg>
  );
};
