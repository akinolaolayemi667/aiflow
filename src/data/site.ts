export const siteConfig = {
  name: 'AIFlow',
  tagline: 'Premium AI & CRM Automation',
  description:
    'AIFlow designs and deploys AI automation, CRM workflows, chatbots, and business process systems for ambitious teams.',
  services: [
    'AI Automation',
    'CRM Automation',
    'Workflow Automation',
    'Lead Management',
    'AI Chatbots',
    'Appointment Automation',
    'Business Process Automation',
  ] as const,
} as const

export type SiteService = (typeof siteConfig.services)[number]
