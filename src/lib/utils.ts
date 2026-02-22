import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function cnTheme(options: {
  base?: ClassValue
  light?: ClassValue
  dark?: string
}) {
  const darkClasses = options.dark
    ? options.dark
        .trim()
        .split(/\s+/)
        .map((token) => `dark:${token}`)
    : []

  return cn(options.base, options.light, ...darkClasses)
}

export function cnResponsive(
  breakpoint: "sm" | "md" | "lg" | "xl" | "2xl",
  ...classes: string[]
) {
  return cn(classes.map((className) => `${breakpoint}:${className}`))
}

export function cnFlags(flags: Record<string, boolean>) {
  return cn(
    Object.entries(flags)
      .filter(([, enabled]) => enabled)
      .map(([className]) => className)
  )
}
