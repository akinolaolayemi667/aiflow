import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '@/hooks'
import {
  getMotionVariants,
  viewportOnce,
  type MotionPreset,
} from '@/lib/motion'
import { cn } from '@/lib/cn'

export interface RevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  preset?: MotionPreset
  delay?: number
  className?: string
  /** Animate on mount instead of scroll into view. */
  immediate?: boolean
}

/** Viewport (or immediate) reveal with reduced-motion support. */
export function Reveal({
  children,
  preset = 'fadeUp',
  delay = 0,
  className,
  immediate = false,
  ...props
}: RevealProps) {
  const reducedMotion = usePrefersReducedMotion()
  const variants = getMotionVariants(preset, reducedMotion)

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      {...(immediate
        ? { animate: 'visible' }
        : { whileInView: 'visible', viewport: viewportOnce })}
      transition={reducedMotion ? { duration: 0 } : { delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
