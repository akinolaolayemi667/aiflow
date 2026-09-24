import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useId, useRef } from 'react'
import { Button } from '@/components/ui'
import { navCta, navLinks } from '@/data/navigation'
import { usePrefersReducedMotion } from '@/hooks'
import { ArrowRight, X } from '@/lib/icons'
import { cn } from '@/lib/cn'
import { easeOutExpo } from '@/lib/motion'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  activeHref: string
}

export function MobileMenu({ open, onClose, activeHref }: MobileMenuProps) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    closeRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { duration: 0.25, ease: easeOutExpo }
          }
        >
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-bg/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={cn(
              'absolute inset-y-0 right-0 flex w-full max-w-md flex-col',
              'border-l border-white/[0.08] bg-bg-elevated/95 backdrop-blur-xl',
              'shadow-[-24px_0_60px_rgb(0_0_0_/_0.45)]',
            )}
            initial={reducedMotion ? false : { x: '100%' }}
            animate={{ x: 0 }}
            exit={reducedMotion ? undefined : { x: '100%' }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 0.35, ease: easeOutExpo }
            }
          >
            <div className="flex h-16 items-center justify-between border-b border-white/[0.06] px-5">
              <p
                id={titleId}
                className="font-display text-lg font-semibold tracking-tight text-white"
              >
                <span className="text-gradient">AIFlow</span>
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className={cn(
                  'inline-flex h-10 w-10 items-center justify-center rounded-lg',
                  'text-muted transition-colors duration-200',
                  'hover:bg-white/[0.05] hover:text-white',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55',
                )}
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <nav
              aria-label="Mobile"
              className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6"
            >
              {navLinks.map((link, index) => {
                const isActive = activeHref === link.href

                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    initial={reducedMotion ? false : { opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={
                      reducedMotion
                        ? { duration: 0 }
                        : {
                            delay: 0.05 + index * 0.04,
                            duration: 0.3,
                            ease: easeOutExpo,
                          }
                    }
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'rounded-lg px-4 py-3.5 text-base font-medium tracking-wide',
                      'transition-colors duration-200',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55',
                      isActive
                        ? 'bg-primary/10 text-white'
                        : 'text-muted hover:bg-white/[0.04] hover:text-white',
                    )}
                  >
                    {link.label}
                  </motion.a>
                )
              })}
            </nav>

            <div className="border-t border-white/[0.06] p-5">
              <Button
                href={navCta.href}
                size="lg"
                fullWidth
                onClick={onClose}
              >
                {navCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
