import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type DividerVariant = 'line' | 'neon'

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  variant?: DividerVariant
}

export function Divider({
  variant = 'line',
  className,
  ...props
}: DividerProps) {
  return (
    <hr
      className={cn(
        'border-0',
        variant === 'line' ? 'divider-line' : 'divider-neon',
        className,
      )}
      {...props}
    />
  )
}
