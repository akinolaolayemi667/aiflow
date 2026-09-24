import { Navbar } from '@/components/layout'
import {
  CaseStudies,
  Hero,
  Industries,
  Process,
  Services,
  Stats,
  Workflow,
} from '@/components/sections'

export function HomePage() {
  return (
    <div className="relative min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Workflow />
        <Industries />
        <CaseStudies />
        <Process />
      </main>
    </div>
  )
}
