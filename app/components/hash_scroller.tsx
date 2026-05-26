'use client'

import { useEffect } from 'react'

function scrollToHash() {
  const { hash } = window.location
  if (!hash) return

  const id = decodeURIComponent(hash.slice(1))
  const target = document.getElementById(id)
  if (!target) return

  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

export default function HashScroller() {
  useEffect(() => {
    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])

  return null
}
