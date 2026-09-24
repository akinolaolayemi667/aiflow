import { motion } from 'framer-motion'
import { useState } from 'react'
import { FadeIn } from '@/components/animations'
import { Section } from '@/components/layout'
import { SectionLabel } from '@/components/ui'
import { workflowSteps, type WorkflowStep } from '@/data/workflow'
import { usePrefersReducedMotion } from '@/hooks'
import { cn } from '@/lib/cn'
import { easeOutExpo, getStaggerVariants, viewportOnce } from '@/lib/motion'

export function Workflow() {
  const reducedMotion = usePrefersReducedMotion()
  const { container, item } = getStaggerVariants(reducedMotion)
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <Section
      id="solutions"
      spacing="lg"
      aria-labelledby="workflow-heading"
      className="overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute inset-0 bg-grid-fine opacity-[0.16]" />
        <div className="absolute left-1/2 top-1/3 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgb(139_23_79_/_0.22),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-10 left-1/4 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgb(255_22_136_/_0.1),transparent_70%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <SectionLabel className="justify-center before:hidden after:ml-2 after:inline-block after:h-px after:w-5 after:bg-gradient-to-r after:from-primary after:to-transparent">
            Automation Path
          </SectionLabel>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2
            id="workflow-heading"
            className="mt-4 font-display text-h2 tracking-tight text-white"
          >
            From Lead to Customer —
            <span className="mt-1 block text-gradient-brand">Automatically</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p className="mt-4 text-body-lg text-subtle">
            We connect the tools, workflows and AI systems your business needs
            so leads move through your pipeline without manual follow-up.
          </p>
        </FadeIn>
      </div>

      {/* Mobile vertical timeline */}
      <motion.ol
        className={cn(
          'relative mt-12 list-none p-0 md:hidden',
          'mx-auto max-w-md space-y-0',
        )}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        onMouseLeave={() => setActiveId(null)}
      >
        <div
          aria-hidden
          className="absolute bottom-6 left-[1.35rem] top-6 w-px bg-gradient-to-b from-primary/50 via-accent/40 to-secondary/40"
        />
        {!reducedMotion && (
          <motion.span
            aria-hidden
            className="absolute left-[1.15rem] z-10 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_rgb(255_22_136_/_0.8)]"
            animate={{ top: ['8%', '92%', '8%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}

        {workflowSteps.map((step, index) => (
          <motion.li key={step.id} variants={item} className="relative pl-12 pb-8 last:pb-0">
            <span
              aria-hidden
              className={cn(
                'absolute left-4 top-5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-primary/50 bg-bg',
                activeId === step.id && 'bg-primary shadow-[0_0_10px_rgb(255_22_136_/_0.7)]',
              )}
            />
            <WorkflowCard
              step={step}
              active={activeId === step.id}
              onFocus={() => setActiveId(step.id)}
              onBlur={() => setActiveId(null)}
              onHover={() => setActiveId(step.id)}
            />
            {index < workflowSteps.length - 1 && (
              <span className="sr-only">Then</span>
            )}
          </motion.li>
        ))}
      </motion.ol>

      {/* Tablet + desktop flow */}
      <div className="relative mt-14 hidden md:block">
        {!reducedMotion && (
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-x-4 top-[42%] z-0 hidden h-3 w-[calc(100%-2rem)] xl:block"
            viewBox="0 0 1000 12"
            preserveAspectRatio="none"
          >
            <path
              d="M20 6 H980"
              stroke="url(#flowLine)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.55"
            />
            <motion.circle
              r="4"
              fill="#FF1688"
              filter="url(#flowGlow)"
              initial={{ cx: 20 }}
              animate={{ cx: [20, 980, 20] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              cy="6"
            />
            <defs>
              <linearGradient id="flowLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FF1688" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#FF4FA3" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8B174F" stopOpacity="0.15" />
              </linearGradient>
              <filter id="flowGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        )}

        <motion.ol
          className={cn(
            'relative z-10 grid list-none grid-cols-3 gap-x-5 gap-y-10 p-0',
            'xl:grid-cols-6 xl:gap-4',
          )}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          onMouseLeave={() => setActiveId(null)}
        >
          {workflowSteps.map((step, index) => (
            <motion.li key={step.id} variants={item} className="relative">
              <WorkflowCard
                step={step}
                active={activeId === step.id}
                onFocus={() => setActiveId(step.id)}
                onBlur={() => setActiveId(null)}
                onHover={() => setActiveId(step.id)}
              />

              {index < workflowSteps.length - 1 && (
                <Connection
                  active={
                    activeId === step.id ||
                    activeId === workflowSteps[index + 1]?.id
                  }
                  reducedMotion={reducedMotion}
                  wrapBreak={index === 2}
                />
              )}
            </motion.li>
          ))}
        </motion.ol>
      </div>

      <p className="sr-only">
        Automation sequence: New lead, lead capture, AI qualification, CRM
        assignment, automated follow-up, appointment, then customer.
      </p>
    </Section>
  )
}

function WorkflowCard({
  step,
  active,
  onHover,
  onFocus,
  onBlur,
}: {
  step: WorkflowStep
  active: boolean
  onHover: () => void
  onFocus: () => void
  onBlur: () => void
}) {
  const Icon = step.icon

  return (
    <article
      tabIndex={0}
      onMouseEnter={onHover}
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label={`${step.number}. ${step.title}. ${step.description}`}
      className={cn(
        'group relative h-full overflow-hidden rounded-xl border p-4 sm:p-5',
        'bg-bg-elevated/55 backdrop-blur-xl outline-none',
        'shadow-[0_12px_32px_rgb(0_0_0_/_0.3)]',
        'transition-[border-color,box-shadow,transform] duration-300 ease-out',
        active
          ? 'border-primary/45 shadow-[0_16px_40px_rgb(0_0_0_/_0.4),0_0_24px_rgb(255_22_136_/_0.16)] -translate-y-0.5'
          : 'border-white/[0.08] hover:border-primary/30 hover:-translate-y-0.5',
        'focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
      )}
    >
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300',
          'bg-[radial-gradient(ellipse_at_top,rgb(255_22_136_/_0.1),transparent_60%)]',
          'group-hover:opacity-100 group-focus-within:opacity-100',
          active && 'opacity-100',
        )}
      />

      <div className="relative flex items-center justify-between gap-2">
        <span className="font-display text-xs font-medium tracking-[0.16em] text-subtle/70">
          {step.number}
        </span>
        <div
          className={cn(
            'flex h-9 w-9 items-center justify-center rounded-lg border text-primary',
            'border-primary/20 bg-primary/10 transition-[box-shadow,border-color] duration-300',
            active &&
              'border-primary/45 shadow-[0_0_16px_rgb(255_22_136_/_0.4)]',
          )}
        >
          <Icon className="h-4 w-4" aria-hidden />
        </div>
      </div>

      <h3 className="relative mt-4 font-display text-base font-semibold tracking-tight text-white sm:text-lg">
        {step.title}
      </h3>
      <p className="relative mt-2 text-small text-subtle">{step.description}</p>
      <p
        className={cn(
          'relative mt-3 text-xs font-medium text-accent',
          'max-h-0 overflow-hidden opacity-0 transition-all duration-300',
          'group-hover:max-h-8 group-hover:opacity-100 group-focus-within:max-h-8 group-focus-within:opacity-100',
          active && 'max-h-8 opacity-100',
        )}
      >
        {step.detail}
      </p>
    </article>
  )
}

function Connection({
  active,
  reducedMotion,
  wrapBreak,
}: {
  active: boolean
  reducedMotion: boolean
  wrapBreak: boolean
}) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute z-10',
        wrapBreak
          ? 'left-1/2 top-full hidden h-10 w-px -translate-x-1/2 md:block xl:hidden'
          : 'right-0 top-1/2 hidden h-px w-3 translate-x-full -translate-y-1/2 md:block xl:w-4',
      )}
    >
      <div
        className={cn(
          'h-full w-full transition-colors duration-300',
          wrapBreak
            ? active
              ? 'bg-primary'
              : 'bg-gradient-to-b from-primary/50 to-accent/40'
            : active
              ? 'bg-primary'
              : 'bg-gradient-to-r from-primary/50 to-accent/40',
        )}
      />
      {!reducedMotion && (
        <motion.span
          className={cn(
            'absolute rounded-full bg-primary',
            'shadow-[0_0_10px_rgb(255_22_136_/_0.85)]',
            wrapBreak
              ? 'left-1/2 h-1.5 w-1.5 -translate-x-1/2'
              : 'top-1/2 h-1.5 w-1.5 -translate-y-1/2',
          )}
          animate={
            wrapBreak
              ? { top: ['0%', '100%', '0%'] }
              : { left: ['0%', '100%', '0%'] }
          }
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: easeOutExpo,
            repeatDelay: 0.4,
          }}
        />
      )}
    </div>
  )
}
