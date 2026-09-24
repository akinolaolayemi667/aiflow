export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Process', href: '#process' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About', href: '#about' },
] as const

export const navCta = {
  label: 'Get Started',
  href: '#contact',
} as const

export type NavLink = (typeof navLinks)[number]
