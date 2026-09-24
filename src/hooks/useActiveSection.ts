import { useEffect, useState } from 'react'

/**
 * Tracks the active nav target from the URL hash (and `/` for home).
 * Ready for future section ids without requiring a router yet.
 */
export function useActiveSection(homeHref = '/'): string {
  const [active, setActive] = useState(homeHref)

  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash
      setActive(hash || homeHref)
    }

    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [homeHref])

  return active
}
