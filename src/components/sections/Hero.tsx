import { motion } from 'framer-motion'
import { Container } from '@/components/layout'
import { Button } from '@/components/ui'
import { HeroVisual } from '@/components/sections/HeroVisual'
import { usePrefersReducedMotion } from '@/hooks'
import { ArrowRight, Sparkles } from '@/lib/icons'
import { cn } from '@/lib/cn'
import { easeOutExpo } from '@/lib/motion'

export function Hero() {
  const reducedMotion = usePrefersReducedMotion()

  const fadeUp = (delay: number) =>
    reducedMotion
      ? { initial: false as const, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.55, ease: easeOutExpo },
        }

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-16"
    >
      <HeroBackdrop />

      <Container
        size="xl"
        className={cn(
          'relative z-10',
          'py-14 min-[375px]:py-16 sm:py-20 md:py-24 lg:py-24 xl:py-28',
        )}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16">
          <div className="max-w-xl lg:max-w-none">
            <motion.div {...fadeUp(0.05)}>
              <span
                className={cn(
                  'inline-flex items-center gap-2 rounded-full border border-primary/25',
                  'bg-primary/10 px-3 py-1.5 text-xs font-medium tracking-[0.14em] text-accent',
                )}
              >
                <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
                AI AUTOMATION EXPERTS
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className={cn(
                'mt-6 font-display font-semibold tracking-[-0.04em] text-white',
                'text-[2.35rem] leading-[1.05]',
                'min-[375px]:text-[2.6rem]',
                'sm:text-5xl sm:leading-[1.05]',
                'md:text-[3.25rem]',
                'lg:text-[3.5rem] xl:text-[4rem]',
              )}
              {...fadeUp(0.14)}
            >
              <span className="block">Automate Your Business.</span>
              <span className="mt-1 block text-gradient-brand">Scale With AI.</span>
            </motion.h1>

            <motion.p
              className="mt-5 max-w-lg text-body-lg text-muted sm:mt-6"
              {...fadeUp(0.24)}
            >
              We build intelligent CRM systems, AI workflows and automation
              solutions that help businesses capture leads, follow up faster and
              operate more efficiently.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap sm:mt-9"
              {...fadeUp(0.34)}
            >
              <Button href="#contact" size="lg" className="w-full min-[400px]:w-auto">
                Get Started
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button
                href="#case-studies"
                variant="secondary"
                size="lg"
                className="w-full min-[400px]:w-auto"
              >
                View Our Work
              </Button>
            </motion.div>
          </div>

          <div className="relative lg:justify-self-end lg:w-full">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  )
}

function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 bg-grid-fine opacity-[0.35]" />
      <div className="absolute -left-24 top-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgb(255_22_136_/_0.16),transparent_70%)] blur-2xl" />
      <div className="absolute -right-16 top-24 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgb(139_23_79_/_0.28),transparent_72%)] blur-2xl" />
      <div className="absolute bottom-0 left-1/2 h-[18rem] w-[40rem] -translate-x-1/2 bg-[radial-gradient(ellipse,rgb(255_79_163_/_0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-noise opacity-[0.035] mix-blend-overlay" />
      <div className="absolute inset-0 bg-vignette opacity-90" />
    </div>
  )
}
