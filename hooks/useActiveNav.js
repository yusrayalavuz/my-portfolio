'use client'

import { useEffect, useState } from 'react'

/**
 * useActiveNav
 * Tracks which section is currently visible and returns its id.
 */
export function useActiveNav() {
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.dataset.section)
          }
        })
      },
      { threshold: 0.4 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return activeId
}
