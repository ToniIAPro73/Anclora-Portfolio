import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface SankeyChartProps {
  nodes: { id: string; label: string; value: number; color?: string }[];
  links: { source: string; target: string; value: number }[];
  width?: number;
  height?: number;
  className?: string;
}

export const SankeyChart: React.FC<SankeyChartProps> = ({
  nodes,
  links,
  width = 600,
  height = 400,
  className,
}) => {
  const ref = useRef<SVGGElement>(null);
  const isInView = useInView(ref, { once: true });

  const padding = { top: 20, right: 40, bottom: 40, left: 40 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Calculate node positions
  const nodePositions = nodes.map((node, index) => {
    const x = padding.left + (index / (nodes.length - 1)) * chartWidth;
    const y = padding.top + chartHeight / 2;
    return {
      id: node.id,
      x,
      y,
      width: 20,
      height: Math.max(20, (node.value / 1000) * 100),
    };
  });

  const getNodePosition = (id: string) => {
    return nodePositions.find((p) => p.id === id);
  };

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={`overflow-visible ${className}`}
    >
      <defs>
        <linearGradient id="sankeyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4B77A" stopOpacity="0.3" />
        </linearGradient>
        <filter id="sankeyGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g ref={ref}>
        {/* Links (flows) */}
        {links.map((link, index) => {
          const source = getNodePosition(link.source);
          const target = getNodePosition(link.target);
          if (!source || !target) return null;

          const flowWidth = Math.max(2, (link.value / 1000) * 20);
          const startX = source.x + source.width;
          const endX = target.x;
          const midX = (startX + endX) / 2;

          const path = `M ${startX} ${source.y} 
                       C ${midX} ${source.y}, ${midX} ${target.y}, ${endX} ${target.y}`;

          return (
            <g key={index}>
              {/* Flow background */}
              <motion.path
                d={path}
                fill="none"
                stroke="#E8E4E0"
                strokeWidth={flowWidth}
                initial={{ opacity: 0, pathLength: 0 }}
                animate={
                  isInView
                    ? { opacity: 0.3, pathLength: 1 }
                    : { opacity: 0, pathLength: 0 }
                }
                transition={{
                  duration: 1.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              />

              {/* Flow main */}
              <motion.path
                d={path}
                fill="none"
                stroke="url(#sankeyGradient)"
                strokeWidth={flowWidth}
                filter="url(#sankeyGlow)"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={
                  isInView
                    ? { opacity: 1, pathLength: 1 }
                    : { opacity: 0, pathLength: 0 }
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

          const color = node.color || `hsl(${index * 60}, 70%, 50%)`;

          return (
            <g key={node.id}>
              {/* Node background */}
              <motion.rect
                x={pos.x}
                y={pos.y - pos.height / 2}
                width={pos.width}
                height={pos.height}
                fill={color}
                stroke="#FAF9F6"
                strokeWidth="2"
                rx="4"
                initial={{ opacity: 0, height: 0, y: pos.y }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        height: pos.height,
                        y: pos.y - pos.height / 2,
                      }
                    : { opacity: 0, height: 0, y: pos.y }
                }
                transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
              />

              {/* Node glow */}
              <motion.rect
                x={pos.x - 4}
                y={pos.y - pos.height / 2 - 4}
                width={pos.width + 8}
                height={pos.height + 8}
                fill="transparent"
                stroke={color}
                strokeWidth="1"
                strokeOpacity="0.3"
                rx="6"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ delay: index * 0.2 + 0.8, duration: 0.6 }}
              />

              {/* Node label */}
              <motion.text
                x={pos.x + pos.width / 2}
                y={pos.y - pos.height / 2 - 8}
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
                x={pos.x + pos.width / 2}
                y={pos.y + pos.height / 2 + 14}
                textAnchor="middle"
                fontSize="8"
                fontWeight="400"
                fill="#64748B"
                fontFamily="var(--font-montserrat)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 1.2, duration: 0.4 }}
              >
                €{node.value.toLocaleString()}
              </motion.text>
            </g>
          );
        })}
      </g>
    </svg>
  );
};
