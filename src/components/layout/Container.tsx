import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  size?: ContainerSize
  as?: ElementType
}

const sizeStyles: Record<ContainerSize, string> = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  '2xl': 'max-w-[90rem]',
  full: 'max-w-none',
}

export function Container({
  children,
  size = 'xl',
  as: Component = 'div',
  className,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full',
        'px-4 min-[375px]:px-5 min-[430px]:px-6 sm:px-6 md:px-8 lg:px-10',
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
