import { motion } from 'framer-motion'
import { FadeIn } from '@/components/animations'
import { Section } from '@/components/layout'
import { Button, SectionLabel } from '@/components/ui'
import { industries, type IndustryItem } from '@/data/industries'
import { usePrefersReducedMotion } from '@/hooks'
import { ArrowRight } from '@/lib/icons'
import { cn } from '@/lib/cn'
import { getStaggerVariants, viewportOnce } from '@/lib/motion'

export function Industries() {
  const reducedMotion = usePrefersReducedMotion()
  const { container, item } = getStaggerVariants(reducedMotion)

  return (
    <Section
      id="industries"
      spacing="lg"
      aria-labelledby="industries-heading"
      className="overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-grid-fine opacity-[0.16]" />
        <div className="absolute left-1/3 top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgb(139_23_79_/_0.18),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <SectionLabel className="justify-center before:hidden after:ml-2 after:inline-block after:h-px after:w-5 after:bg-gradient-to-r after:from-primary after:to-transparent">
            Industries
          </SectionLabel>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2
            id="industries-heading"
            className="mt-4 font-display text-h2 tracking-tight text-white"
          >
            Automation for
            <span className="mt-1 block text-gradient-brand">
              Modern Businesses
            </span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p className="mt-4 text-body-lg text-subtle">
            Build smarter workflows around the way your industry actually
            operates.
          </p>
        </FadeIn>
      </div>

      <motion.ul
        className={cn(
          'mt-12 grid list-none grid-cols-1 gap-4 p-0',
          'sm:grid-cols-2 sm:gap-5',
          'lg:grid-cols-3 lg:gap-6',
        )}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {industries.map((industry) => (
          <motion.li key={industry.id} variants={item} className="h-full">
            <IndustryCard industry={industry} />
          </motion.li>
        ))}
      </motion.ul>

      <FadeIn delay={0.1}>
        <div
          className={cn(
            'mt-12 flex flex-col items-start gap-5 rounded-xl border border-white/[0.08]',
            'bg-bg-elevated/55 p-6 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-7',
            'shadow-[0_12px_36px_rgb(0_0_0_/_0.28)]',
          )}
        >
          <div className="max-w-xl">
            <p className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
              Don&apos;t see your industry?
            </p>
            <p className="mt-2 text-small text-subtle sm:text-sm">
              We can design an automation system around your specific workflow.
            </p>
          </div>
          <Button href="#contact" size="md" className="shrink-0 gap-2">
            Talk to an Automation Expert
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </FadeIn>
    </Section>
  )
}

function IndustryCard({ industry }: { industry: IndustryItem }) {
  const Icon = industry.icon

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl',
        'border border-white/[0.07] bg-bg-panel/70 p-5 sm:p-6',
        'transition-[border-color,box-shadow,transform] duration-300 ease-out',
        'hover:-translate-y-1 hover:border-primary/35',
        'hover:shadow-[0_18px_44px_rgb(0_0_0_/_0.36),0_0_26px_rgb(255_22_136_/_0.1)]',
      )}
    >
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute -right-2 -top-4 font-display text-[6.5rem] font-semibold leading-none',
          'text-white/[0.035] transition-[color,transform] duration-500',
          'group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary/[0.08]',
        )}
      >
        {industry.number}
      </span>

      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300',
          'bg-[radial-gradient(ellipse_at_bottom_left,rgb(255_22_136_/_0.12),transparent_55%)]',
          'group-hover:opacity-100',
        )}
      />

      <div
        className={cn(
          'relative flex h-11 w-11 items-center justify-center rounded-xl',
          'border border-white/10 bg-white/[0.03] text-accent',
          'transition-[box-shadow,border-color,color] duration-300',
          'group-hover:border-primary/35 group-hover:text-primary',
          'group-hover:shadow-[0_0_18px_rgb(255_22_136_/_0.35)]',
        )}
      >
        <Icon className="h-5 w-5" aria-hidden />
      </div>

      <h3 className="relative mt-6 font-display text-xl font-semibold tracking-tight text-white">
        {industry.name}
      </h3>
      <p className="relative mt-3 flex-1 text-small text-subtle sm:text-sm sm:leading-relaxed">
        {industry.description}
      </p>

      <a
        href={industry.href}
        className={cn(
          'relative mt-6 inline-flex items-center gap-2 self-start',
          'text-sm font-medium text-muted',
          'transition-colors duration-300 group-hover:text-accent',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm',
        )}
      >
        Explore
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      </a>
    </article>
  )
}
