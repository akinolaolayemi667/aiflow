import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  elevated?: boolean
  hoverGlow?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const paddingStyles = {
  none: '',
  sm: 'p-4 sm:p-5',
  md: 'p-5 sm:p-6',
  lg: 'p-6 sm:p-8',
} as const

export function GlassCard({
  children,
  elevated = false,
  hoverGlow = true,
  padding = 'md',
  className,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl',
        elevated ? 'glass-elevated' : 'glass',
        hoverGlow && 'hover-glow',
        paddingStyles[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
