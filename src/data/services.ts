import type { LucideIcon } from '@/lib/icons'
import {
  Bot,
  CalendarCheck,
  LayoutDashboard,
  MessageCircle,
  UserPlus,
  Workflow,
} from '@/lib/icons'

export interface ServiceItem {
  id: string
  number: string
  title: string
  description: string
  icon: LucideIcon
  href: string
}

/** Core AIFlow services — edit here to update the Services section. */
export const services: ServiceItem[] = [
  {
    id: 'crm-setup',
    number: '01',
    title: 'CRM Setup & Configuration',
    description:
      'Build and configure a CRM system that keeps your leads, customers and sales pipeline organized.',
    icon: LayoutDashboard,
    href: '#contact',
  },
  {
    id: 'lead-automation',
    number: '02',
    title: 'Lead Capture & Automation',
    description:
      'Capture, qualify and route new leads automatically so opportunities never get lost.',
    icon: UserPlus,
    href: '#contact',
  },
  {
    id: 'follow-up',
    number: '03',
    title: 'Automated Follow-Up',
    description:
      'Keep prospects engaged with automated email, SMS and WhatsApp follow-up sequences.',
    icon: MessageCircle,
    href: '#contact',
  },
  {
    id: 'ai-chatbots',
    number: '04',
    title: 'AI Chatbots',
    description:
      'Deploy intelligent AI assistants that answer questions, qualify prospects and provide instant support.',
    icon: Bot,
    href: '#contact',
  },
  {
    id: 'appointments',
    number: '05',
    title: 'Appointment Automation',
    description:
      'Connect calendars and automate booking, confirmations, reminders and follow-ups.',
    icon: CalendarCheck,
    href: '#contact',
  },
  {
    id: 'workflows',
    number: '06',
    title: 'Workflow Automation',
    description:
      'Connect your tools and automate repetitive business processes from end to end.',
    icon: Workflow,
    href: '#contact',
  },
]
