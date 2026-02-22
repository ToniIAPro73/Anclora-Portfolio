import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface NetworkChartProps {
  nodes: { id: string; label: string; value: number; color?: string }[];
  links: { source: string; target: string; value: number }[];
  width?: number;
  height?: number;
  className?: string;
}

export const NetworkChart: React.FC<NetworkChartProps> = ({
  nodes,
  links,
  width = 500,
  height = 400,
  className,
}) => {
  const ref = useRef<SVGGElement>(null);
  const isInView = useInView(ref, { once: true });

  const padding = { top: 20, right: 20, bottom: 40, left: 20 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Generate positions in a circular layout
  const positions = nodes.map((node, index) => {
    const angle = (index / nodes.length) * 2 * Math.PI;
    const radius = Math.min(chartWidth, chartHeight) * 0.35;
    const x = chartWidth / 2 + Math.cos(angle) * radius;
    const y = chartHeight / 2 + Math.sin(angle) * radius;
    return { id: node.id, x, y };
  });

  const getNodePosition = (id: string) => {
    return positions.find((p) => p.id === id);
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
          id="networkGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4B77A" stopOpacity="0.3" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g ref={ref} transform={`translate(${padding.left}, ${padding.top})`}>
        {/* Links */}
        {links.map((link, index) => {
          const source = getNodePosition(link.source);
          const target = getNodePosition(link.target);
          if (!source || !target) return null;

          const distance = Math.sqrt(
            Math.pow(target.x - source.x, 2) + Math.pow(target.y - source.y, 2),
          );
          const strokeWidth = Math.max(1, (link.value / 100) * 4);

          return (
            <g key={index}>
              {/* Link line */}
              <motion.line
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                stroke="#E8E4E0"
                strokeWidth={strokeWidth}
                initial={{
                  opacity: 0,
                  strokeDasharray: `${distance} ${distance}`,
                  strokeDashoffset: distance,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 0.3,
                        strokeDasharray: `${distance} ${distance}`,
                        strokeDashoffset: 0,
                      }
                    : {
                        opacity: 0,
                        strokeDasharray: `${distance} ${distance}`,
                        strokeDashoffset: distance,
                      }
                }
                transition={{
                  duration: 1.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              />

              {/* Link glow */}
              <motion.line
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                stroke="#C5A059"
                strokeWidth={strokeWidth / 2}
                filter="url(#glow)"
                initial={{
                  opacity: 0,
                  strokeDasharray: `${distance} ${distance}`,
                  strokeDashoffset: distance,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 0.6,
                        strokeDasharray: `${distance} ${distance}`,
                        strokeDashoffset: 0,
                      }
                    : {
                        opacity: 0,
                        strokeDasharray: `${distance} ${distance}`,
                        strokeDashoffset: distance,
                      }
                }
                transition={{
                  duration: 1.5,
                  delay: index * 0.1 + 0.2,
                  ease: "easeOut",
                }}
              />
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node, index) => {
          const pos = getNodePosition(node.id);
          if (!pos) return null;

          const nodeSize = Math.max(15, (node.value / 100) * 30);
          const color = node.color || `hsl(${index * 45}, 70%, 50%)`;

          return (
            <g key={node.id}>
              {/* Node glow */}
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r={nodeSize + 8}
                fill="transparent"
                stroke={color}
                strokeWidth="1"
                strokeOpacity="0.3"
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
                }
                transition={{ delay: index * 0.2 + 0.8, duration: 0.6 }}
              />

              {/* Node main */}
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r={nodeSize}
                fill={color}
                stroke="#FAF9F6"
                strokeWidth="3"
                filter="url(#glow)"
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
                }
                transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
              />

              {/* Node label */}
              <motion.text
                x={pos.x}
                y={pos.y + 4}
                textAnchor="middle"
                fontSize="10"
                fontWeight="600"
                fill="#1E293B"
                fontFamily="var(--font-montserrat)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 1.0, duration: 0.4 }}
              >
                {node.label}
              </motion.text>

              {/* Node value */}
              <motion.text
                x={pos.x}
                y={pos.y + 16}
                textAnchor="middle"
                fontSize="8"
                fontWeight="400"
                fill="#64748B"
                fontFamily="var(--font-montserrat)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 1.2, duration: 0.4 }}
              >
                {node.value}
              </motion.text>
            </g>
          );
        })}
      </g>
    </svg>
  );
};
