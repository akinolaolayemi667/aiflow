import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Container } from './Container'

type SectionSpacing = 'sm' | 'md' | 'lg' | 'xl'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  as?: ElementType
  spacing?: SectionSpacing
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  /** Skip the inner Container wrapper. */
  bare?: boolean
}

const spacingStyles: Record<SectionSpacing, string> = {
  sm: 'py-10 min-[375px]:py-12 sm:py-14 md:py-16',
  md: 'py-14 min-[375px]:py-16 sm:py-20 md:py-24 lg:py-28',
  lg: 'py-16 min-[375px]:py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36',
  xl: 'py-20 min-[375px]:py-24 sm:py-28 md:py-32 lg:py-40 xl:py-44',
}

export function Section({
  children,
  as: Component = 'section',
  spacing = 'md',
  containerSize = 'xl',
  bare = false,
  className,
  id,
  ...props
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn('relative w-full', spacingStyles[spacing], className)}
      {...props}
    >
      {bare ? (
        children
      ) : (
        <Container size={containerSize}>{children}</Container>
      )}
    </Component>
  )
}
