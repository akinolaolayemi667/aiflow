import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type TextVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body-lg'
  | 'body'
  | 'small'
  | 'caption'

const variantClass: Record<TextVariant, string> = {
  display: 'text-display',
  h1: 'text-h1',
  h2: 'text-h2',
  h3: 'text-h3',
  'body-lg': 'text-body-lg',
  body: 'text-body',
  small: 'text-small',
  caption: 'text-caption',
}

const defaultTags: Record<TextVariant, ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  'body-lg': 'p',
  body: 'p',
  small: 'p',
  caption: 'span',
}

export interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  variant?: TextVariant
  as?: ElementType
  gradient?: boolean
}

export function Text({
  children,
  variant = 'body',
  as,
  gradient = false,
  className,
  ...props
}: TextProps) {
  const Component = as ?? defaultTags[variant]

  return (
    <Component
      className={cn(variantClass[variant], gradient && 'text-gradient', className)}
      {...props}
    >
      {children}
    </Component>
  )
}
