import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '@/hooks'
import { getMotionVariants, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/cn'

export interface FadeInProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  delay?: number
  className?: string
}

/** Scroll-triggered fade-up entrance. */
export function FadeIn({
  children,
  delay = 0,
  className,
  ...props
}: FadeInProps) {
  const reducedMotion = usePrefersReducedMotion()
  const variants = getMotionVariants('fadeUp', reducedMotion)

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={reducedMotion ? { duration: 0 } : { delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
