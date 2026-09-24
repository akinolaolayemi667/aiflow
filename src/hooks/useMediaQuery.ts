import { useEffect, useState } from 'react'

/** Subscribe to a CSS media query; returns whether it currently matches. */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const media = window.matchMedia(query)
    const onChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    setMatches(media.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [query])

  return matches
}

export function useIsDesktop(): boolean {
  return useMediaQuery('(min-width: 1024px)')
}

export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}
