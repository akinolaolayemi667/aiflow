export type CaseVisual = 'crm' | 'calendar' | 'pipeline'

export interface CaseStudy {
  id: string
  industry: string
  title: string
  problem: string
  solution: string
  results: string[]
  technologies: string[]
  visual: CaseVisual
  href: string
}

/** Demo portfolio case studies — qualitative results only. */
export const caseStudies: CaseStudy[] = [
  {
    id: 'real-estate-leads',
    industry: 'Real Estate',
    title: 'Real Estate Lead Automation',
    problem:
      'New property leads were coming from multiple sources, but slow follow-up caused opportunities to be missed.',
    solution:
      'Built a centralized CRM workflow with automated lead routing, qualification and SMS follow-up.',
    results: ['Faster response', 'Centralized pipeline', 'Automated follow-up'],
    technologies: ['CRM', 'SMS', 'AI', 'Workflow Automation'],
    visual: 'crm',
    href: '#contact',
  },
  {
    id: 'dental-appointments',
    industry: 'Dental',
    title: 'Dental Appointment Automation',
    problem:
      'The team was manually confirming appointments and following up with patients.',
    solution:
      'Connected the CRM and calendar with automated confirmations, reminders and follow-up workflows.',
    results: ['Automated reminders', 'Simplified booking', 'Less manual work'],
    technologies: ['CRM', 'Calendar', 'SMS', 'Automation'],
    visual: 'calendar',
    href: '#contact',
  },
  {
    id: 'insurance-leads',
    industry: 'Insurance',
    title: 'Insurance Lead Management',
    problem:
      'A growing number of prospects were difficult to organize and prioritize manually.',
    solution:
      'Created an automated lead capture, qualification and assignment system.',
    results: [
      'Organized pipeline',
      'Automated qualification',
      'Faster lead routing',
    ],
    technologies: ['CRM', 'AI', 'Lead Routing', 'Automation'],
    visual: 'pipeline',
    href: '#contact',
  },
]
