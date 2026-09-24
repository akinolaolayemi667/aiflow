import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState, type RefObject } from 'react'
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'

/** Animates an integer from 0 → target once the element enters view. */
export function useCountUp(
  target: number,
  options: { duration?: number; enabled?: boolean } = {},
): { ref: RefObject<HTMLElement | null>; value: number } {
  const { duration = 1.15, enabled = true } = options
  const reducedMotion = usePrefersReducedMotion()
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.45 })
  const [value, setValue] = useState(reducedMotion || !enabled ? target : 0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (reducedMotion || !enabled) {
      setValue(target)
      return
    }

    if (!inView || hasAnimated.current) return
    hasAnimated.current = true

    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    })

    return () => controls.stop()
  }, [duration, enabled, inView, reducedMotion, target])

  return { ref, value }
}
