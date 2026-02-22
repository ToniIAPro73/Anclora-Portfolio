import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface FunnelChartProps {
  data: { stage: string; value: number; color?: string }[];
  width?: number;
  height?: number;
  className?: string;
}

export const FunnelChart: React.FC<FunnelChartProps> = ({
  data,
  width = 400,
  height = 500,
  className,
}) => {
  const ref = useRef<SVGGElement>(null);
  const isInView = useInView(ref, { once: true });

  const padding = { top: 20, right: 20, bottom: 40, left: 20 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));

  const getStageHeight = () => {
    return chartHeight / data.length;
  };

  const getStageWidth = (value: number) => {
    return (value / maxValue) * chartWidth;
  };

  const getStageX = (value: number) => {
    const stageWidth = getStageWidth(value);
    return padding.left + (chartWidth - stageWidth) / 2;
  };

  const getConnectorPath = (index: number) => {
    const current = data[index];
    const next = data[index + 1];
    if (!next) return "";

    const currentY = padding.top + (index + 1) * getStageHeight();
    const nextY = padding.top + (index + 1) * getStageHeight();
    const currentWidth = getStageWidth(current.value);
    const nextWidth = getStageWidth(next.value);

    const x1 = padding.left + (chartWidth - currentWidth) / 2;
    const x2 = padding.left + (chartWidth - nextWidth) / 2;

    return `M ${x1} ${currentY} L ${x2} ${nextY}`;
  };

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={`overflow-visible ${className}`}
    >
      <defs>
        <linearGradient id="funnelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4B77A" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <g ref={ref}>
        {/* Funnel stages */}
        {data.map((item, index) => {
          const color = item.color || `hsl(${index * 45}, 70%, 50%)`;
          const stageHeight = getStageHeight();
          const stageWidth = getStageWidth(item.value);
          const stageX = getStageX(item.value);
          const stageY = padding.top + index * stageHeight;

          return (
            <g key={index}>
              {/* Stage background */}
              <motion.polygon
                points={`${stageX},${stageY} ${stageX + stageWidth},${stageY} ${stageX + stageWidth + 10},${stageY + stageHeight} ${stageX - 10},${stageY + stageHeight}`}
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

              {/* Stage label */}
              <motion.text
                x={width / 2}
                y={stageY + stageHeight / 2 + 4}
                textAnchor="middle"
                fontSize="12"
                fontWeight="600"
                fill="#1E293B"
                fontFamily="var(--font-montserrat)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 0.8, duration: 0.4 }}
              >
                {item.stage}
              </motion.text>

              {/* Stage value */}
              <motion.text
                x={width / 2}
                y={stageY + stageHeight / 2 + 20}
                textAnchor="middle"
                fontSize="10"
                fontWeight="400"
                fill="#64748B"
                fontFamily="var(--font-montserrat)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 1.0, duration: 0.4 }}
              >
                {item.value.toLocaleString()}
              </motion.text>

              {/* Connector */}
              {index < data.length - 1 && (
                <motion.path
                  d={getConnectorPath(index)}
                  fill="none"
                  stroke="#E8E4E0"
                  strokeWidth="2"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={
                    isInView
                      ? { opacity: 0.5, pathLength: 1 }
                      : { opacity: 0, pathLength: 0 }
                  }
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                />
              )}
            </g>
          );
        })}

        {/* Conversion rates */}
        {data.slice(0, -1).map((item, index) => {
          const nextValue = data[index + 1].value;
          const conversionRate = ((nextValue / item.value) * 100).toFixed(1);

          return (
            <motion.text
              key={`conversion-${index}`}
              x={width / 2}
              y={padding.top + (index + 0.5) * getStageHeight() + 40}
              textAnchor="middle"
              fontSize="9"
              fontWeight="600"
              fill="#94A3B8"
              fontFamily="var(--font-montserrat)"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.2 + 1.2, duration: 0.4 }}
            >
              Conversion: {conversionRate}%
            </motion.text>
          );
        })}
      </g>
    </svg>
  );
};
