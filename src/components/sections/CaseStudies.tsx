import { motion } from 'framer-motion'
import { FadeIn } from '@/components/animations'
import { Section } from '@/components/layout'
import { Badge, SectionLabel } from '@/components/ui'
import { caseStudies, type CaseStudy, type CaseVisual } from '@/data/caseStudies'
import { usePrefersReducedMotion } from '@/hooks'
import { ArrowRight, CheckCircle2 } from '@/lib/icons'
import { cn } from '@/lib/cn'
import { easeOutExpo, viewportOnce } from '@/lib/motion'

export function CaseStudies() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <Section
      id="case-studies"
      spacing="lg"
      aria-labelledby="case-studies-heading"
      className="overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute inset-0 bg-grid-fine opacity-[0.14]" />
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgb(255_22_136_/_0.1),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <SectionLabel className="justify-center before:hidden after:ml-2 after:inline-block after:h-px after:w-5 after:bg-gradient-to-r after:from-primary after:to-transparent">
            Case Studies
          </SectionLabel>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2
            id="case-studies-heading"
            className="mt-4 font-display text-h2 tracking-tight text-white"
          >
            Automation That
            <span className="mt-1 block text-gradient-brand">Creates Impact</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p className="mt-4 text-body-lg text-subtle">
            Explore examples of how intelligent systems can transform lead
            management, communication and daily operations.
          </p>
        </FadeIn>
      </div>

      <div className="mt-12 space-y-8 lg:mt-16 lg:space-y-12">
        {caseStudies.map((study, index) => (
          <CaseStudyPanel
            key={study.id}
            study={study}
            reverse={index % 2 === 1}
            reducedMotion={reducedMotion}
            delay={index * 0.06}
          />
        ))}
      </div>
    </Section>
  )
}

function CaseStudyPanel({
  study,
  reverse,
  reducedMotion,
  delay,
}: {
  study: CaseStudy
  reverse: boolean
  reducedMotion: boolean
  delay: number
}) {
  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={
        reducedMotion
          ? { duration: 0 }
          : { delay, duration: 0.55, ease: easeOutExpo }
      }
      className={cn(
        'group grid overflow-hidden rounded-2xl border border-white/[0.08]',
        'bg-bg-elevated/45 backdrop-blur-xl',
        'shadow-[0_16px_48px_rgb(0_0_0_/_0.32)]',
        'transition-[border-color,box-shadow] duration-300',
        'hover:border-primary/30 hover:shadow-[0_20px_56px_rgb(0_0_0_/_0.4),0_0_32px_rgb(255_22_136_/_0.08)]',
        'lg:grid-cols-2',
      )}
    >
      <div
        className={cn(
          'relative min-h-[14rem] overflow-hidden border-b border-white/[0.06] p-5 sm:min-h-[16rem] sm:p-6 lg:min-h-[22rem] lg:border-b-0',
          reverse ? 'lg:order-2 lg:border-l lg:border-white/[0.06]' : 'lg:border-r lg:border-white/[0.06]',
        )}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(255_22_136_/_0.12),transparent_65%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100"
        />
        <div className="relative flex h-full items-center justify-center">
          <CaseVisualPanel type={study.visual} />
        </div>
      </div>

      <div
        className={cn(
          'flex flex-col p-5 sm:p-7 lg:p-8',
          reverse && 'lg:order-1',
        )}
      >
        <Badge variant="primary" className="w-fit uppercase tracking-[0.14em]">
          {study.industry}
        </Badge>

        <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem]">
          {study.title}
        </h3>

        <div className="mt-6 space-y-4">
          <div>
            <p className="text-caption text-accent">Problem</p>
            <p className="mt-1.5 text-small text-subtle sm:text-sm">
              {study.problem}
            </p>
          </div>
          <div>
            <p className="text-caption text-accent">Solution</p>
            <p className="mt-1.5 text-small text-subtle sm:text-sm">
              {study.solution}
            </p>
          </div>
        </div>

        <ul className="mt-5 grid list-none grid-cols-1 gap-2 p-0 min-[400px]:grid-cols-3">
          {study.results.map((result) => (
            <li
              key={result}
              className="flex items-start gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
            >
              <CheckCircle2
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
                aria-hidden
              />
              <span className="text-xs font-medium text-muted">{result}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {study.technologies.map((tech) => (
            <Badge key={tech} variant="subtle">
              {tech}
            </Badge>
          ))}
        </div>

        <a
          href={study.href}
          className={cn(
            'mt-7 inline-flex items-center gap-2 self-start',
            'text-sm font-medium text-accent',
            'transition-colors duration-300 hover:text-primary',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm',
          )}
        >
          View Case Study
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </a>
      </div>
    </motion.article>
  )
}

function CaseVisualPanel({ type }: { type: CaseVisual }) {
  return (
    <div
      className={cn(
        'w-full max-w-sm rounded-xl border border-primary/20 bg-bg/80 p-4',
        'shadow-[0_12px_40px_rgb(0_0_0_/_0.45)] backdrop-blur-md',
        'transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-0.5',
      )}
    >
      {type === 'crm' && <CrmVisual />}
      {type === 'calendar' && <CalendarVisual />}
      {type === 'pipeline' && <PipelineVisual />}
    </div>
  )
}

function CrmVisual() {
  return (
    <div className="space-y-3" aria-hidden>
      <div className="flex items-center justify-between">
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-subtle">
          CRM Dashboard
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {['Leads', 'Active', 'Closed'].map((label, i) => (
          <div
            key={label}
            className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-2 text-center"
          >
            <p className="font-display text-sm text-primary">
              {['128', '46', '19'][i]}
            </p>
            <p className="mt-0.5 text-[0.55rem] uppercase tracking-wider text-subtle">
              {label}
            </p>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        <div className="h-2 overflow-hidden rounded-full bg-white/[0.05]">
          <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-secondary via-primary to-accent" />
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/[0.05]">
          <div className="h-full w-[48%] rounded-full bg-gradient-to-r from-secondary via-primary to-accent" />
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/[0.05]">
          <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-secondary via-primary to-accent" />
        </div>
      </div>
    </div>
  )
}

function CalendarVisual() {
  return (
    <div className="space-y-3" aria-hidden>
      <div className="flex items-center justify-between">
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-subtle">
          Booking Flow
        </span>
        <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[0.55rem] text-accent">
          Synced
        </span>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              'aspect-square rounded-md border border-white/[0.05] bg-white/[0.02]',
              [2, 5, 9, 11].includes(i) && 'border-primary/40 bg-primary/20',
            )}
          />
        ))}
      </div>
      <div className="space-y-2">
        {['Reminder queued', 'Confirmation sent'].map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-[0.65rem] text-muted">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PipelineVisual() {
  const stages = ['Capture', 'Qualify', 'Assign']
  return (
    <div className="space-y-4" aria-hidden>
      <div className="flex items-center justify-between">
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-subtle">
          Lead Pipeline
        </span>
        <span className="text-[0.55rem] text-accent">Live routing</span>
      </div>
      <div className="flex items-center justify-between gap-1">
        {stages.map((stage, i) => (
          <div key={stage} className="flex flex-1 items-center gap-1">
            <div className="flex-1 rounded-lg border border-primary/25 bg-primary/10 px-2 py-3 text-center">
              <p className="text-[0.6rem] font-medium text-white">{stage}</p>
            </div>
            {i < stages.length - 1 && (
              <span className="h-px w-2 shrink-0 bg-primary/50" />
            )}
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-40" />
            <span className="relative h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-[0.65rem] text-muted">
            High-intent lead assigned
          </span>
        </div>
      </div>
    </div>
  )
}
