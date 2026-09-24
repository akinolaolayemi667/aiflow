import type { LucideIcon } from '@/lib/icons'
import { Building2, Clock3, FolderKanban, HeartHandshake } from '@/lib/icons'

export interface StatItem {
  id: string
  value: number
  suffix: string
  label: string
  icon: LucideIcon
}

/** Demo/portfolio statistics — edit values here to update the Trust section. */
export const stats: StatItem[] = [
  {
    id: 'projects',
    value: 50,
    suffix: '+',
    label: 'Projects Completed',
    icon: FolderKanban,
  },
  {
    id: 'clients',
    value: 30,
    suffix: '+',
    label: 'Happy Clients',
    icon: HeartHandshake,
  },
  {
    id: 'industries',
    value: 5,
    suffix: '+',
    label: 'Industries Served',
    icon: Building2,
  },
  {
    id: 'systems',
    value: 24,
    suffix: '/7',
    label: 'Automated Systems',
    icon: Clock3,
  },
]
