import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type BadgeVariant = 'default' | 'primary' | 'outline' | 'subtle'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  variant?: BadgeVariant
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-white/[0.06] text-muted border-white/10',
  primary: 'bg-primary/15 text-accent border-primary/25',
  outline: 'bg-transparent text-muted border-white/15',
  subtle: 'bg-bg-panel text-subtle border-white/[0.06]',
}

export function Badge({
  children,
  variant = 'default',
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1',
        'text-xs font-medium tracking-wide',
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
