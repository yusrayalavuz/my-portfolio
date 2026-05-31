'use client'

import { useRef, useCallback } from 'react'

/**
 * useLamp
 * Returns a ref to attach to the lamp element and a click handler
 * that triggers the CSS swing animation then calls an optional callback.
 *
 * @param {() => void} onToggle  — called after click (e.g. theme toggle)
 */
export function useLamp(onToggle) {
  const lampRef = useRef(null)

  const handleClick = useCallback(() => {
    const el = lampRef.current
    if (!el) return

    // Re-trigger animation by removing → forcing reflow → adding class
    el.classList.remove('swinging')
    void el.offsetWidth          // force reflow
    el.classList.add('swinging')

    setTimeout(() => el.classList.remove('swinging'), 900)

    onToggle?.()
  }, [onToggle])

  return { lampRef, handleClick }
}
