import { motion } from 'framer-motion'
import { FadeIn } from '@/components/animations'
import { Section } from '@/components/layout'
import { Button, SectionLabel } from '@/components/ui'
import { processSteps, type ProcessStep } from '@/data/process'
import { usePrefersReducedMotion } from '@/hooks'
import { ArrowRight } from '@/lib/icons'
import { cn } from '@/lib/cn'
import { easeOutExpo, getStaggerVariants, viewportOnce } from '@/lib/motion'

export function Process() {
  const reducedMotion = usePrefersReducedMotion()
  const { container, item } = getStaggerVariants(reducedMotion)

  return (
    <Section
      id="process"
      spacing="lg"
      aria-labelledby="process-heading"
      className="overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-grid-fine opacity-[0.16]" />
        <div className="absolute left-1/2 top-1/3 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgb(139_23_79_/_0.2),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <SectionLabel className="justify-center before:hidden after:ml-2 after:inline-block after:h-px after:w-5 after:bg-gradient-to-r after:from-primary after:to-transparent">
            Process
          </SectionLabel>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2
            id="process-heading"
            className="mt-4 font-display text-h2 tracking-tight text-white"
          >
            From Idea to
            <span className="mt-1 block text-gradient-brand">Automation</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p className="mt-4 text-body-lg text-subtle">
            A clear process designed to turn your business challenges into
            reliable automation systems.
          </p>
        </FadeIn>
      </div>

      {/* Mobile vertical timeline */}
      <motion.ol
        className="relative mx-auto mt-12 max-w-md list-none space-y-0 p-0 md:hidden"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div
          aria-hidden
          className="absolute bottom-8 left-[1.35rem] top-8 w-px bg-gradient-to-b from-primary/55 via-accent/40 to-secondary/40"
        />
        {!reducedMotion && (
          <motion.span
            aria-hidden
            className="absolute left-[1.15rem] z-10 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_rgb(255_22_136_/_0.8)]"
            animate={{ top: ['10%', '88%', '10%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
        {processSteps.map((step) => (
          <motion.li
            key={step.id}
            variants={item}
            className="relative pb-8 pl-12 last:pb-0"
          >
            <span
              aria-hidden
              className="absolute left-4 top-6 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-primary/50 bg-bg"
            />
            <ProcessCard step={step} reducedMotion={reducedMotion} />
          </motion.li>
        ))}
      </motion.ol>

      {/* Tablet + desktop timeline */}
      <div className="relative mt-14 hidden md:block">
        <div
          aria-hidden
          className="absolute left-[8%] right-[8%] top-[2.85rem] h-px overflow-hidden"
        >
          <motion.div
            className="h-full origin-left bg-gradient-to-r from-primary/30 via-accent/70 to-primary/30"
            initial={reducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 1.1, ease: easeOutExpo, delay: 0.15 }
            }
          />
          {!reducedMotion && (
            <motion.span
              className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_12px_rgb(255_22_136_/_0.85)]"
              animate={{ left: ['0%', '100%', '0%'] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          )}
        </div>

        <motion.ol
          className={cn(
            'relative z-10 grid list-none grid-cols-2 gap-5 p-0 lg:grid-cols-4 lg:gap-6',
          )}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {processSteps.map((step) => (
            <motion.li key={step.id} variants={item}>
              <ProcessCard step={step} reducedMotion={reducedMotion} />
            </motion.li>
          ))}
        </motion.ol>
      </div>

      <FadeIn delay={0.12}>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-6">
          <p className="text-body text-muted">
            Have a workflow that needs fixing?
          </p>
          <Button href="#contact" size="md" className="gap-2">
            Let&apos;s Build Your Automation
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </FadeIn>
    </Section>
  )
}

function ProcessCard({
  step,
  reducedMotion,
}: {
  step: ProcessStep
  reducedMotion: boolean
}) {
  const Icon = step.icon

  return (
    <article
      className={cn(
        'relative h-full rounded-xl border border-white/[0.08]',
        'bg-bg-elevated/55 p-5 backdrop-blur-xl sm:p-6',
        'shadow-[0_12px_36px_rgb(0_0_0_/_0.28)]',
        'transition-[border-color,box-shadow] duration-300',
        'hover:border-primary/30 hover:shadow-[0_16px_40px_rgb(0_0_0_/_0.35),0_0_22px_rgb(255_22_136_/_0.1)]',
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-display text-xs font-medium tracking-[0.16em] text-subtle/70">
          {step.number}
        </span>
        <motion.div
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-lg',
            'border border-primary/25 bg-primary/10 text-primary',
          )}
          initial={reducedMotion ? false : { scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={viewportOnce}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { duration: 0.4, ease: easeOutExpo, delay: 0.1 }
          }
        >
          <Icon className="h-4 w-4" aria-hidden />
        </motion.div>
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
        {step.title}
      </h3>
      <p className="mt-2 text-small text-subtle sm:text-sm">{step.description}</p>
    </article>
  )
}
