import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface CandlestickChartProps {
  data: {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
  }[];
  width?: number;
  height?: number;
  className?: string;
}

export const CandlestickChart: React.FC<CandlestickChartProps> = ({
  data,
  width = 600,
  height = 300,
  className,
}) => {
  const ref = useRef<SVGGElement>(null);
  const isInView = useInView(ref, { once: true });

  const prices = data.flatMap((d) => [d.open, d.high, d.low, d.close]);
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  const priceRange = maxPrice - minPrice || 1;

  const padding = { top: 20, right: 20, bottom: 40, left: 50 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const candleWidth = Math.max(4, (chartWidth / data.length) * 0.6);
  const candleGap = Math.max(1, (chartWidth / data.length) * 0.4);

  const getPriceY = (price: number) => {
    return (
      padding.top +
      chartHeight -
      ((price - minPrice) / priceRange) * chartHeight
    );
  };

  const getX = (index: number) => {
    return padding.left + index * (candleWidth + candleGap);
  };

  // Y-axis labels
  const yLabels = [maxPrice, Math.round((maxPrice + minPrice) / 2), minPrice];

  // X-axis labels (dates)
  const visibleDates = data.filter(
    (_, index) => index % Math.ceil(data.length / 5) === 0,
  );

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={`overflow-visible ${className}`}
    >
      <defs>
        <linearGradient id="candleGradientUp" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#C5A059" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient
          id="candleGradientDown"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#1E293B" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#1E293B" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <g ref={ref}>
        {/* Grid lines */}
        {[0, 0.5, 1].map((ratio, i) => (
          <line
            key={i}
            x1={padding.left}
            y1={padding.top + chartHeight * ratio}
            x2={width - padding.right}
            y2={padding.top + chartHeight * ratio}
            stroke="#E8E4E0"
            strokeWidth="1"
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
            fontSize="10"
            fill="#94A3B8"
            fontFamily="var(--font-montserrat)"
          >
            €{label.toLocaleString()}
          </text>
        ))}

        {/* X-axis labels */}
        {visibleDates.map((item, index) => {
          const dateIndex = data.indexOf(item);
          const x = getX(dateIndex);
          return (
            <text
              key={index}
              x={x + candleWidth / 2}
              y={height - 8}
              textAnchor="middle"
              fontSize="9"
              fill="#94A3B8"
              fontFamily="var(--font-montserrat)"
            >
              {item.date}
            </text>
          );
        })}

        {/* Candles */}
        {data.map((item, index) => {
          const x = getX(index);
          const openY = getPriceY(item.open);
          const closeY = getPriceY(item.close);
          const highY = getPriceY(item.high);
          const lowY = getPriceY(item.low);
          const isUp = item.close >= item.open;
          const candleColor = isUp ? "#C5A059" : "#1E293B";
          const wickColor = isUp ? "#D4B77A" : "#334155";

          return (
            <g key={index}>
              {/* Wick */}
              <motion.line
                x1={x + candleWidth / 2}
                y1={highY}
                x2={x + candleWidth / 2}
                y2={lowY}
                stroke={wickColor}
                strokeWidth="2"
                initial={{ opacity: 0, y1: highY, y2: lowY }}
                animate={
                  isInView
                    ? { opacity: 1, y1: highY, y2: lowY }
                    : { opacity: 0, y1: highY, y2: lowY }
                }
                transition={{ delay: index * 0.05 + 0.5, duration: 0.3 }}
              />

              {/* Body */}
              <motion.rect
                x={x}
                y={Math.min(openY, closeY)}
                width={candleWidth}
                height={Math.abs(closeY - openY)}
                fill={
                  isUp ? "url(#candleGradientUp)" : "url(#candleGradientDown)"
                }
                stroke={candleColor}
                strokeWidth="2"
                rx="2"
                initial={{ opacity: 0, height: 0, y: (openY + closeY) / 2 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        height: Math.abs(closeY - openY),
                        y: Math.min(openY, closeY),
                      }
                    : { opacity: 0, height: 0, y: (openY + closeY) / 2 }
                }
                transition={{ delay: index * 0.05 + 0.7, duration: 0.4 }}
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
};
