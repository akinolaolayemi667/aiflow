import type { LucideIcon } from '@/lib/icons'
import {
  CalendarCheck,
  CheckCircle2,
  Inbox,
  MessageCircle,
  Sparkles,
  UserCheck,
} from '@/lib/icons'

export interface WorkflowStep {
  id: string
  number: string
  title: string
  description: string
  detail: string
  icon: LucideIcon
}

/** Lead-to-customer automation path — edit here to update the Workflow section. */
export const workflowSteps: WorkflowStep[] = [
  {
    id: 'captured',
    number: '01',
    title: 'Lead Captured',
    description: 'Capture leads from forms, ads, websites and social channels.',
    detail: 'Forms, ads, websites & social',
    icon: Inbox,
  },
  {
    id: 'qualification',
    number: '02',
    title: 'AI Qualification',
    description:
      'AI evaluates the lead and identifies high-value opportunities.',
    detail: 'Score intent & fit in seconds',
    icon: Sparkles,
  },
  {
    id: 'assignment',
    number: '03',
    title: 'CRM Assignment',
    description: 'Automatically create and assign the lead inside the CRM.',
    detail: 'Routed to the right owner',
    icon: UserCheck,
  },
  {
    id: 'follow-up',
    number: '04',
    title: 'Automated Follow-Up',
    description: 'Send personalized messages across email, SMS or WhatsApp.',
    detail: 'Email, SMS & WhatsApp sequences',
    icon: MessageCircle,
  },
  {
    id: 'appointment',
    number: '05',
    title: 'Appointment',
    description: 'Guide qualified prospects toward booking a meeting.',
    detail: 'Booked with confirmations',
    icon: CalendarCheck,
  },
  {
    id: 'customer',
    number: '06',
    title: 'Customer',
    description: 'Turn qualified opportunities into customers.',
    detail: 'Closed & handed off cleanly',
    icon: CheckCircle2,
  },
]
