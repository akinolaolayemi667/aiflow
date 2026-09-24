import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '@/hooks'
import { getStaggerVariants, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/cn'

export interface StaggerProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  className?: string
}

/** Parent wrapper that staggers child motion variants. */
export function Stagger({ children, className, ...props }: StaggerProps) {
  const reducedMotion = usePrefersReducedMotion()
  const { container } = getStaggerVariants(reducedMotion)

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export interface StaggerItemProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  className?: string
}

export function StaggerItem({
  children,
  className,
  ...props
}: StaggerItemProps) {
  const reducedMotion = usePrefersReducedMotion()
  const { item } = getStaggerVariants(reducedMotion)

  return (
    <motion.div variants={item} className={cn(className)} {...props}>
      {children}
    </motion.div>
  )
}
