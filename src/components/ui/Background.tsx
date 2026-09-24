import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export interface BackgroundProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean
  grid?: boolean
  blur?: boolean
  vignette?: boolean
}

/**
 * Layered atmospheric background. Keep effects subtle — mostly black.
 * Place behind page content with absolute/fixed positioning.
 */
export function Background({
  glow = true,
  grid = true,
  blur = true,
  vignette = true,
  className,
  ...props
}: BackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-bg',
        className,
      )}
      {...props}
    >
      {glow && (
        <>
          <div className="absolute inset-0 bg-radial-glow opacity-90" />
          <div className="absolute inset-0 bg-radial-glow-corner opacity-80" />
        </>
      )}
      {blur && <div className="absolute inset-0 bg-blur-gradient" />}
      {grid && <div className="absolute inset-0 bg-grid-fine opacity-40" />}
      {vignette && <div className="absolute inset-0 bg-vignette" />}
    </div>
  )
}
