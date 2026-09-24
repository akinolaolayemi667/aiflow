import type { Transition, Variants } from 'framer-motion'

/** Shared easing for premium, restrained motion. */
export const easeOutExpo: Transition['ease'] = [0.16, 1, 0.3, 1]

export const defaultTransition: Transition = {
  duration: 0.55,
  ease: easeOutExpo,
}

export const reducedTransition: Transition = {
  duration: 0,
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.06,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
}

/** Instant variants when prefers-reduced-motion is on. */
export const reducedMotionVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: reducedTransition },
}

export type MotionPreset =
  | 'fade'
  | 'fadeUp'
  | 'fadeDown'
  | 'scale'
  | 'slideLeft'
  | 'slideRight'

export const motionPresets: Record<MotionPreset, Variants> = {
  fade: fadeIn,
  fadeUp,
  fadeDown,
  scale: scaleIn,
  slideLeft,
  slideRight,
}

export function getMotionVariants(
  preset: MotionPreset,
  reducedMotion: boolean,
): Variants {
  if (reducedMotion) return reducedMotionVariants
  return motionPresets[preset]
}

export function getStaggerVariants(reducedMotion: boolean): {
  container: Variants
  item: Variants
} {
  if (reducedMotion) {
    return {
      container: reducedMotionVariants,
      item: reducedMotionVariants,
    }
  }
  return {
    container: staggerContainer,
    item: staggerItem,
  }
}

/** Viewport defaults for scroll-triggered animations. */
export const viewportOnce = {
  once: true,
  amount: 0.2,
  margin: '0px 0px -40px 0px',
} as const
