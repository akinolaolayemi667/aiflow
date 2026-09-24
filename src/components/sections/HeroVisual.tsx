import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { useEffect, useRef, type MouseEvent } from 'react'
import { usePrefersReducedMotion } from '@/hooks'
import {
  Activity,
  CheckCircle2,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from '@/lib/icons'
import { cn } from '@/lib/cn'
import { easeOutExpo } from '@/lib/motion'

const metrics = [
  { label: 'Leads', value: '1,284' },
  { label: 'Automated', value: '94%' },
  { label: 'Conversions', value: '+38%' },
] as const

const floatCards = [
  {
    id: 'crm',
    title: 'CRM Automation',
    status: 'Active',
    tone: 'active' as const,
    icon: Workflow,
    className:
      'left-1 top-[4%] sm:left-0 lg:left-[-2%] xl:left-0',
    delay: 0,
    depth: 0.45,
  },
  {
    id: 'leads',
    title: 'AI Lead Qualification',
    status: 'Running',
    tone: 'running' as const,
    icon: Users,
    className:
      'right-1 top-[12%] sm:right-0 lg:right-[-4%] xl:right-0',
    delay: 0.35,
    depth: -0.35,
  },
  {
    id: 'followup',
    title: 'Follow-Up Workflow',
    status: 'Complete',
    tone: 'complete' as const,
    icon: CheckCircle2,
    className:
      'bottom-[2%] left-[6%] sm:left-[10%] lg:left-0 xl:left-[4%]',
    delay: 0.7,
    depth: 0.3,
  },
] as const

const statusTone = {
  active: 'text-accent',
  running: 'text-primary',
  complete: 'text-muted',
} as const

interface HeroVisualProps {
  className?: string
}

export function HeroVisual({ className }: HeroVisualProps) {
  const reducedMotion = usePrefersReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springX = useSpring(rawX, { stiffness: 80, damping: 22, mass: 0.35 })
  const springY = useSpring(rawY, { stiffness: 80, damping: 22, mass: 0.35 })
  const transform = useMotionTemplate`translate3d(${springX}px, ${springY}px, 0)`

  useEffect(() => {
    if (reducedMotion) {
      rawX.set(0)
      rawY.set(0)
    }
  }, [reducedMotion, rawX, rawY])

  const onPointerMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    rawX.set(px * 10)
    rawY.set(py * 8)
  }

  const onPointerLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        'relative mx-auto w-full max-w-[22rem] overflow-visible',
        'h-[24rem] sm:max-w-[28rem] sm:h-[28rem]',
        'lg:max-w-none lg:h-[30rem] xl:h-[32rem]',
        className,
      )}
      initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={
        reducedMotion
          ? { duration: 0 }
          : { delay: 0.35, duration: 0.7, ease: easeOutExpo }
      }
      onMouseMove={onPointerMove}
      onMouseLeave={onPointerLeave}
    >
      <motion.div
        style={{ transform }}
        className="absolute inset-0 will-change-transform"
      >
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(255_22_136_/_0.14),transparent_68%)]"
        />
        <div
          aria-hidden
          className="absolute left-[58%] top-[38%] h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(139_23_79_/_0.22),transparent_70%)]"
        />

        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full opacity-45"
          viewBox="0 0 400 420"
          fill="none"
        >
          <path
            d="M115 95 C155 145, 175 165, 200 205"
            stroke="url(#heroLine)"
            strokeWidth="1"
          />
          <path
            d="M305 105 C265 150, 230 170, 200 205"
            stroke="url(#heroLine)"
            strokeWidth="1"
          />
          <path
            d="M125 335 C160 285, 180 250, 200 215"
            stroke="url(#heroLine)"
            strokeWidth="1"
          />
          <circle cx="200" cy="205" r="3" fill="#FF1688" fillOpacity="0.55" />
          <defs>
            <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF1688" stopOpacity="0" />
              <stop offset="50%" stopColor="#FF4FA3" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#8B174F" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div
          aria-hidden
          className="absolute left-[16%] top-[40%] hidden h-14 w-px bg-gradient-to-b from-transparent via-primary/35 to-transparent sm:block"
        />
        <div
          aria-hidden
          className="absolute right-[14%] top-[46%] hidden h-10 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent sm:block"
        />

        <div className="absolute left-1/2 top-1/2 z-10 w-[78%] max-w-[19.5rem] -translate-x-1/2 -translate-y-1/2 sm:w-[68%] sm:max-w-[21rem]">
          <div
            className={cn(
              'rounded-2xl border border-primary/25 bg-bg-elevated/85 p-5 sm:p-6',
              'shadow-[0_20px_60px_rgb(0_0_0_/_0.45),0_0_40px_rgb(255_22_136_/_0.12)]',
              'backdrop-blur-xl',
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-[0.7rem] font-semibold tracking-[0.18em] text-subtle">
                  AI AUTOMATION
                </p>
                <p className="mt-1 font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  SYSTEM
                </p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <Sparkles className="h-4 w-4" aria-hidden />
              </div>
            </div>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1">
              <span className="relative flex h-2 w-2">
                {!reducedMotion && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-35" />
                )}
                <span className="relative h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-medium text-accent">
                System Active
              </span>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/[0.06] pt-4 sm:gap-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="min-w-0 text-center">
                  <p className="font-display text-base font-semibold tracking-tight text-white sm:text-lg">
                    {metric.value}
                  </p>
                  <p className="mt-0.5 truncate text-[0.65rem] uppercase tracking-[0.12em] text-subtle sm:text-xs">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2">
              <Activity className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-secondary via-primary to-accent"
                  initial={{ width: reducedMotion ? '78%' : '16%' }}
                  animate={{ width: '78%' }}
                  transition={
                    reducedMotion
                      ? { duration: 0 }
                      : { delay: 0.85, duration: 1.15, ease: easeOutExpo }
                  }
                />
              </div>
              <Zap className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
            </div>
          </div>
        </div>

        {floatCards.map((card) => (
          <FloatingCard
            key={card.id}
            title={card.title}
            status={card.status}
            tone={card.tone}
            icon={card.icon}
            className={card.className}
            delay={card.delay}
            reducedMotion={reducedMotion}
            parallaxX={springX}
            parallaxY={springY}
            depth={card.depth}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

interface FloatingCardProps {
  title: string
  status: string
  tone: keyof typeof statusTone
  icon: typeof Workflow
  className?: string
  delay: number
  reducedMotion: boolean
  parallaxX: MotionValue<number>
  parallaxY: MotionValue<number>
  depth: number
}

function FloatingCard({
  title,
  status,
  tone,
  icon: Icon,
  className,
  delay,
  reducedMotion,
  parallaxX,
  parallaxY,
  depth,
}: FloatingCardProps) {
  const offsetX = useTransform(parallaxX, (value) => value * depth)
  const offsetY = useTransform(parallaxY, (value) => value * depth)

  return (
    <motion.div
      className={cn('absolute z-20 w-[10.25rem] sm:w-[11.25rem]', className)}
      style={{ x: offsetX, y: offsetY }}
      initial={reducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={
        reducedMotion
          ? { duration: 0 }
          : { delay: 0.55 + delay * 0.2, duration: 0.5, ease: easeOutExpo }
      }
    >
      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -5, 0] }}
        transition={
          reducedMotion
            ? undefined
            : {
                delay: 1.1 + delay,
                duration: 5.8 + delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
      >
        <div
          className={cn(
            'rounded-xl border border-white/[0.1] bg-bg-panel/85 p-3 backdrop-blur-xl',
            'shadow-[0_12px_30px_rgb(0_0_0_/_0.35),0_0_18px_rgb(255_22_136_/_0.08)]',
            'neon-border-soft',
          )}
        >
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
              <Icon className="h-3.5 w-3.5" aria-hidden />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium leading-snug text-white">{title}</p>
              <p
                className={cn(
                  'mt-0.5 flex items-center gap-1.5 text-[0.65rem] font-medium',
                  statusTone[tone],
                )}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {status}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
