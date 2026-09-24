import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

export interface SectionLabelProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

export function SectionLabel({
  children,
  className,
  ...props
}: SectionLabelProps) {
  return (
    <p className={cn('section-label', className)} {...props}>
      {children}
    </p>
  )
}
