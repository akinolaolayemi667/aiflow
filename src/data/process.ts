import type { LucideIcon } from '@/lib/icons'
import { Bot, Search, TrendingUp, Workflow } from '@/lib/icons'

export interface ProcessStep {
  id: string
  number: string
  title: string
  description: string
  icon: LucideIcon
}

/** Client engagement process — edit here to update the Process section. */
export const processSteps: ProcessStep[] = [
  {
    id: 'discover',
    number: '01',
    title: 'Discover',
    description:
      'We understand your business, current tools, bottlenecks and goals.',
    icon: Search,
  },
  {
    id: 'design',
    number: '02',
    title: 'Design',
    description:
      'We map your workflows and design an automation system around your actual process.',
    icon: Workflow,
  },
  {
    id: 'automate',
    number: '03',
    title: 'Automate',
    description:
      'We connect your CRM, communication tools, AI and business applications.',
    icon: Bot,
  },
  {
    id: 'optimize',
    number: '04',
    title: 'Optimize',
    description:
      'We monitor the system, identify improvements and continuously refine the workflow.',
    icon: TrendingUp,
  },
]
