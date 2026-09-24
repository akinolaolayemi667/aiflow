import { motion } from 'framer-motion'
import type { RefObject } from 'react'
import { Section } from '@/components/layout'
import { SectionLabel } from '@/components/ui'
import { stats, type StatItem } from '@/data/stats'
import { useCountUp, usePrefersReducedMotion } from '@/hooks'
import { cn } from '@/lib/cn'
import { getStaggerVariants, viewportOnce } from '@/lib/motion'

export function Stats() {
  const reducedMotion = usePrefersReducedMotion()
  const { container, item } = getStaggerVariants(reducedMotion)

  return (
    <Section
      id="stats"
      spacing="md"
      aria-labelledby="stats-heading"
      className="overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
        <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(255_22_136_/_0.1),transparent_70%)] blur-2xl" />
        <div className="absolute inset-0 bg-grid-fine opacity-20" />
        <span className="absolute left-[12%] top-16 h-1 w-1 rounded-full bg-primary/50" />
        <span className="absolute right-[18%] top-28 h-1.5 w-1.5 rounded-full bg-accent/40" />
        <span className="absolute bottom-20 left-[22%] h-1 w-1 rounded-full bg-secondary/60" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <SectionLabel className="justify-center before:hidden after:ml-2 after:inline-block after:h-px after:w-5 after:bg-gradient-to-r after:from-primary after:to-transparent">
          Credibility
        </SectionLabel>
        <h2
          id="stats-heading"
          className="mt-4 font-display text-h2 tracking-tight text-white"
        >
          Trusted results, measured in outcomes
        </h2>
        <p className="mt-3 text-body text-subtle">
          Demo portfolio metrics that reflect the systems we ship for ambitious
          teams.
        </p>
      </div>

      <motion.ul
        className={cn(
          'mt-10 grid list-none grid-cols-2 gap-3 p-0',
          'sm:gap-4 md:mt-12 lg:grid-cols-4 lg:gap-5',
        )}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {stats.map((stat) => (
          <motion.li key={stat.id} variants={item}>
            <StatCard stat={stat} />
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  )
}

function StatCard({ stat }: { stat: StatItem }) {
  const reducedMotion = usePrefersReducedMotion()
  const { ref, value } = useCountUp(stat.value, {
    enabled: !reducedMotion,
  })
  const Icon = stat.icon

  return (
    <article
      aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
      className={cn(
        'group relative h-full overflow-hidden rounded-xl border border-white/[0.08]',
        'bg-bg-elevated/55 p-4 backdrop-blur-xl sm:p-5 md:p-6',
        'shadow-[0_12px_36px_rgb(0_0_0_/_0.28)]',
        'transition-[border-color,box-shadow,transform] duration-300 ease-out',
        'hover:border-primary/30 hover:shadow-[0_16px_40px_rgb(0_0_0_/_0.35),0_0_24px_rgb(255_22_136_/_0.12)]',
        'hover:-translate-y-0.5',
      )}
    >
      <div
        aria-hidden
        className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex items-start justify-between gap-3">
        <div
          className={cn(
            'flex h-9 w-9 items-center justify-center rounded-lg sm:h-10 sm:w-10',
            'border border-primary/20 bg-primary/10 text-primary',
            'transition-colors duration-300 group-hover:border-primary/35 group-hover:bg-primary/15',
          )}
        >
          <Icon className="h-4 w-4" aria-hidden />
        </div>
        <span
          aria-hidden
          className="mt-1 h-1.5 w-1.5 rounded-full bg-accent/50"
        />
      </div>

      <p
        ref={ref as RefObject<HTMLParagraphElement>}
        className={cn(
          'mt-5 font-display font-semibold tracking-tight text-primary',
          'text-3xl min-[375px]:text-4xl sm:text-[2.75rem] md:text-5xl',
          'leading-none',
        )}
      >
        <span className="tabular-nums">{value}</span><span className="text-accent">{stat.suffix}</span>
      </p>

      <p className="mt-3 text-small font-medium text-muted sm:text-sm">
        {stat.label}
      </p>
    </article>
  )
}
