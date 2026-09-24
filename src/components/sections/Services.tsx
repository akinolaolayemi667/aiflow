import { motion } from 'framer-motion'
import { FadeIn } from '@/components/animations'
import { Section } from '@/components/layout'
import { SectionLabel } from '@/components/ui'
import { services, type ServiceItem } from '@/data/services'
import { usePrefersReducedMotion } from '@/hooks'
import { ArrowRight } from '@/lib/icons'
import { cn } from '@/lib/cn'
import { getStaggerVariants, viewportOnce } from '@/lib/motion'

export function Services() {
  const reducedMotion = usePrefersReducedMotion()
  const { container, item } = getStaggerVariants(reducedMotion)

  return (
    <Section
      id="services"
      spacing="lg"
      aria-labelledby="services-heading"
      className="overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgb(139_23_79_/_0.2),transparent_70%)] blur-3xl" />
        <div className="absolute left-0 bottom-1/4 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgb(255_22_136_/_0.08),transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-grid-fine opacity-[0.18]" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <SectionLabel className="justify-center before:hidden after:ml-2 after:inline-block after:h-px after:w-5 after:bg-gradient-to-r after:from-primary after:to-transparent">
            Services
          </SectionLabel>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2
            id="services-heading"
            className="mt-4 font-display text-h2 tracking-tight text-white"
          >
            Automation Built Around
            <span className="mt-1 block text-gradient-brand">Your Business</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p className="mt-4 text-body-lg text-subtle">
            From CRM systems to AI-powered workflows, we design automation
            solutions that remove repetitive work and help your business operate
            smarter.
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
        {services.map((service) => (
          <motion.li key={service.id} variants={item} className="h-full">
            <ServiceCard service={service} />
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  )
}

function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-xl',
        'border border-white/[0.08] bg-bg-elevated/50 p-5 sm:p-6',
        'backdrop-blur-xl shadow-[0_12px_36px_rgb(0_0_0_/_0.28)]',
        'transition-[border-color,box-shadow,transform] duration-300 ease-out',
        'hover:-translate-y-1 hover:border-primary/35',
        'hover:shadow-[0_18px_44px_rgb(0_0_0_/_0.38),0_0_28px_rgb(255_22_136_/_0.1)]',
      )}
    >
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300',
          'bg-[radial-gradient(ellipse_at_top_right,rgb(255_22_136_/_0.12),transparent_55%)]',
          'group-hover:opacity-100',
        )}
      />

      <div className="relative flex items-start justify-between gap-3">
        <span className="font-display text-sm font-medium tracking-widest text-subtle/70">
          {service.number}
        </span>
        <div
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-lg',
            'border border-primary/20 bg-primary/10 text-primary',
            'transition-[box-shadow,border-color,background-color] duration-300',
            'group-hover:border-primary/40 group-hover:bg-primary/15',
            'group-hover:shadow-[0_0_18px_rgb(255_22_136_/_0.35)]',
          )}
        >
          <Icon className="h-4.5 w-4.5 h-[1.125rem] w-[1.125rem]" aria-hidden />
        </div>
      </div>

      <h3 className="relative mt-6 font-display text-h3 text-white">
        {service.title}
      </h3>
      <p className="relative mt-3 flex-1 text-small text-subtle sm:text-sm sm:leading-relaxed">
        {service.description}
      </p>

      <a
        href={service.href}
        className={cn(
          'relative mt-6 inline-flex items-center gap-2 self-start',
          'text-sm font-medium text-accent',
          'transition-colors duration-300 hover:text-primary',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm',
        )}
      >
        Explore Service
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      </a>
    </article>
  )
}
