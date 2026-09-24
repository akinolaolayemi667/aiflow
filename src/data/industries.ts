import type { LucideIcon } from '@/lib/icons'
import {
  BriefcaseBusiness,
  Building2,
  HeartPulse,
  Hotel,
  ShieldCheck,
  Smile,
} from '@/lib/icons'

export interface IndustryItem {
  id: string
  number: string
  name: string
  description: string
  icon: LucideIcon
  href: string
}

/** Industry verticals — edit here to update the Industries section. */
export const industries: IndustryItem[] = [
  {
    id: 'real-estate',
    number: '01',
    name: 'Real Estate',
    description:
      'Capture property leads, automate follow-ups and keep your sales pipeline moving.',
    icon: Building2,
    href: '#contact',
  },
  {
    id: 'healthcare',
    number: '02',
    name: 'Healthcare',
    description:
      'Streamline patient communication, appointment workflows and administrative processes.',
    icon: HeartPulse,
    href: '#contact',
  },
  {
    id: 'dental',
    number: '03',
    name: 'Dental',
    description:
      'Automate appointment booking, reminders, follow-ups and patient communication.',
    icon: Smile,
    href: '#contact',
  },
  {
    id: 'hospitality',
    number: '04',
    name: 'Hospitality',
    description:
      'Automate inquiries, reservations, guest communication and customer follow-up.',
    icon: Hotel,
    href: '#contact',
  },
  {
    id: 'insurance',
    number: '05',
    name: 'Insurance',
    description:
      'Capture, qualify and route insurance prospects while automating repetitive communication.',
    icon: ShieldCheck,
    href: '#contact',
  },
  {
    id: 'professional-services',
    number: '06',
    name: 'Professional Services',
    description:
      'Automate lead management, client onboarding, scheduling and internal workflows.',
    icon: BriefcaseBusiness,
    href: '#contact',
  },
]
