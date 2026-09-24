import { Navbar } from '@/components/layout'
import { Hero, Stats } from '@/components/sections'

export function HomePage() {
  return (
    <div className="relative min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <Stats />
      </main>
    </div>
  )
}
