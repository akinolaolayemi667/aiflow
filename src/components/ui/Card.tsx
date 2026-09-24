import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const paddingStyles = {
  none: '',
  sm: 'p-4 sm:p-5',
  md: 'p-5 sm:p-6',
  lg: 'p-6 sm:p-8',
} as const

/** Solid dark surface card for denser UI panels. */
export function Card({
  children,
  padding = 'md',
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-white/[0.07] bg-bg-panel',
        'shadow-[var(--aiflow-shadow-soft)]',
        'transition-[border-color,box-shadow] duration-300 ease-out',
        'hover:border-white/12',
        paddingStyles[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
