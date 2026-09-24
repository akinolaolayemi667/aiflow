import { Navbar } from '@/components/layout'
import { Hero, Services, Stats, Workflow } from '@/components/sections'

export function HomePage() {
  return (
    <div className="relative min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Workflow />
      </main>
    </div>
  )
}
