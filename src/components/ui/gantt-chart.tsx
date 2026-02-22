import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface GanttChartProps {
  data: {
    task: string;
    start: number;
    end: number;
    progress: number;
    color?: string;
  }[];
  width?: number;
  height?: number;
  className?: string;
}

export const GanttChart: React.FC<GanttChartProps> = ({
  data,
  width = 600,
  height = 400,
  className,
}) => {
  const ref = useRef<SVGGElement>(null);
  const isInView = useInView(ref, { once: true });

  const padding = { top: 20, right: 20, bottom: 40, left: 100 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const tasks = data.length;
  const taskHeight = Math.max(30, chartHeight / tasks);
  const timeRange =
    Math.max(...data.map((d) => d.end)) - Math.min(...data.map((d) => d.start));

  const getTaskY = (index: number) => {
    return padding.top + index * taskHeight + taskHeight / 2;
  };

  const getTimeX = (time: number) => {
    const minTime = Math.min(...data.map((d) => d.start));
    const normalized = (time - minTime) / timeRange;
    return padding.left + normalized * chartWidth;
  };

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={`overflow-visible ${className}`}
    >
      <defs>
        <linearGradient id="ganttGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C5A059" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4B77A" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <g ref={ref}>
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
          <line
            key={i}
            x1={padding.left + ratio * chartWidth}
            y1={padding.top}
            x2={padding.left + ratio * chartWidth}
            y2={padding.top + chartHeight}
            stroke="#E8E4E0"
            strokeWidth="1"
            strokeDasharray={ratio === 0.5 ? "4 4" : "none"}
          />
        ))}

        {/* Task labels */}
        {data.map((task, index) => (
          <text
            key={index}
            x={padding.left - 10}
            y={getTaskY(index) + 4}
            textAnchor="end"
            fontSize="10"
            fill="#64748B"
            fontFamily="var(--font-montserrat)"
          >
            {task.task}
          </text>
        ))}

        {/* Time labels */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
          const time =
            Math.min(...data.map((d) => d.start)) + ratio * timeRange;
          return (
            <text
              key={i}
              x={padding.left + ratio * chartWidth}
              y={height - 10}
              textAnchor="middle"
              fontSize="10"
              fill="#94A3B8"
              fontFamily="var(--font-montserrat)"
            >
              {Math.round(time)}d
            </text>
          );
        })}

        {/* Axis title */}
        <text
          x={width / 2}
          y={height - 2}
          textAnchor="middle"
          fontSize="10"
          fill="#94A3B8"
          fontFamily="var(--font-montserrat)"
        >
          Timeline (Days)
        </text>

        {/* Tasks */}
        {data.map((task, index) => {
          const startY = getTaskY(index) - taskHeight / 2 + 10;
          const endY = getTaskY(index) + taskHeight / 2 - 10;
          const startX = getTimeX(task.start);
          const endX = getTimeX(task.end);
          const taskWidth = endX - startX;
          const progressWidth = taskWidth * (task.progress / 100);
          const color = task.color || `hsl(${index * 45}, 70%, 50%)`;

          return (
            <g key={index}>
              {/* Task background */}
              <motion.rect
                x={startX}
                y={startY}
                width={taskWidth}
                height={taskHeight - 20}
                fill="#F8F5F2"
                stroke="#E8E4E0"
                strokeWidth="1"
                rx="4"
                initial={{ opacity: 0, width: 0, x: startX + taskWidth / 2 }}
                animate={
                  isInView
                    ? { opacity: 1, width: taskWidth, x: startX }
                    : { opacity: 0, width: 0, x: startX + taskWidth / 2 }
                }
                transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
              />

              {/* Progress bar */}
              <motion.rect
                x={startX}
                y={startY}
                width={progressWidth}
                height={taskHeight - 20}
                fill={color}
                stroke="#FAF9F6"
                strokeWidth="1"
                rx="4"
                initial={{ opacity: 0, width: 0 }}
                animate={
                  isInView
                    ? { opacity: 1, width: progressWidth }
                    : { opacity: 0, width: 0 }
                }
                transition={{ delay: index * 0.15 + 0.6, duration: 0.5 }}
              />

              {/* Progress text */}
              <motion.text
                x={startX + progressWidth + 8}
                y={getTaskY(index) + 4}
                fontSize="9"
                fontWeight="600"
                fill="#1E293B"
                fontFamily="var(--font-montserrat)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.15 + 0.9, duration: 0.4 }}
              >
                {task.progress}%
              </motion.text>
            </g>
          );
        })}
      </g>
    </svg>
  );
};
