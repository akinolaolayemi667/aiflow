import { useCallback, useState } from 'react'
import { Button } from '@/components/ui'
import { Container } from '@/components/layout/Container'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { navCta, navLinks } from '@/data/navigation'
import { useActiveSection, useScrolled } from '@/hooks'
import { ArrowRight, Menu } from '@/lib/icons'
import { cn } from '@/lib/cn'

export function Navbar() {
  const scrolled = useScrolled(8)
  const activeHref = useActiveSection('/')
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = useCallback(() => setMobileOpen(false), [])
  const openMobile = useCallback(() => setMobileOpen(true), [])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40',
          'transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out',
          scrolled
            ? 'border-b border-white/[0.08] bg-bg/70 shadow-[0_8px_30px_rgb(0_0_0_/_0.35)] backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <Container
          size="xl"
          className="grid h-16 grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]"
        >
          <a
            href="/"
            className={cn(
              'justify-self-start font-display text-lg font-semibold tracking-tight text-white',
              'transition-opacity duration-200 hover:opacity-90',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm',
            )}
            aria-label="AIFlow home"
          >
            <span className="text-gradient">AIFlow</span>
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {navLinks.map((link) => {
              const isActive = activeHref === link.href

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'relative rounded-md px-3 py-2 text-sm font-medium tracking-wide',
                    'transition-colors duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55',
                    isActive
                      ? 'text-white'
                      : 'text-subtle hover:text-white',
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={cn(
                      'absolute inset-x-3 -bottom-0.5 h-px rounded-full bg-primary',
                      'transition-opacity duration-200',
                      isActive ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </a>
              )
            })}
          </nav>

          <div className="hidden justify-self-end lg:block">
            <Button href={navCta.href} size="sm" className="gap-1.5">
              {navCta.label}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center justify-self-end rounded-lg lg:hidden',
              'text-muted transition-colors duration-200',
              'hover:bg-white/[0.05] hover:text-white',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55',
            )}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={openMobile}
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </Container>
      </header>

      <div id="mobile-navigation">
        <MobileMenu
          open={mobileOpen}
          onClose={closeMobile}
          activeHref={activeHref}
        />
      </div>
    </>
  )
}
