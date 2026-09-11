'use client'

import { useEffect, useRef, useState } from 'react'

const GIF_SRC = '/gif/Kitten_emerging_from_houseplants_20260911142010.gif'
const FINAL_FRAME_SRC = '/gif/kitten-final-frame.png'
// The source file's 128 frames total 8000ms. From frame 118 (7380ms) through
// the last frame (ending at 8000ms) the cat's face is already fully
// revealed and the image barely changes, so swapping to the static final
// frame anywhere in that ~620ms window looks seamless. We time this from
// the <img>'s load event (not component mount) since fetching/decoding the
// ~7MB file can itself take a while, and target the middle of that window
// for slack in both directions.
const SWAP_DELAY_AFTER_LOAD_MS = 7700

const CAPTION = 'My dream workspace: a cat and a jungle of plants.'

export default function HeroVisual({ alt, className = '' }: { alt: string; className?: string }) {
  const imgRef = useRef<HTMLImageElement>(null)
  const [phase, setPhase] = useState<'playing' | 'frozen'>('playing')
  const reduceMotionRef = useRef(false)

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // Reduced-motion users get the final frame straight away instead of
    // watching (or waiting out) the gif — there's no way to seek a gif to
    // a specific frame without playing it.
    if (reduceMotionRef.current) {
      setPhase('frozen')
      return
    }
    if (phase !== 'playing') return

    let timer: ReturnType<typeof setTimeout> | undefined
    const startTimer = () => {
      timer = setTimeout(() => setPhase('frozen'), SWAP_DELAY_AFTER_LOAD_MS)
    }

    const img = imgRef.current
    if (img?.complete) {
      startTimer()
    } else {
      img?.addEventListener('load', startTimer, { once: true })
    }

    return () => {
      img?.removeEventListener('load', startTimer)
      if (timer) clearTimeout(timer)
    }
    // Re-runs whenever playback restarts (phase flips back to 'playing').
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  const replay = () => {
    if (reduceMotionRef.current || phase === 'playing') return
    setPhase('playing')
  }

  return (
    <div
      className={`hero-visual-in group mx-auto flex w-[140px] shrink-0 flex-col items-center gap-2 opacity-0 sm:w-[170px] lg:mx-0 lg:w-[210px] xl:w-[240px] ${className}`}
      style={{ animation: 'hero-visual-in 1s cubic-bezier(0.22, 1, 0.36, 1) 0.25s forwards' }}
    >
      <div
        aria-hidden={alt ? undefined : 'true'}
        onMouseEnter={replay}
        onClick={replay}
        className="relative aspect-square w-full cursor-pointer"
      >
        {/* soft halo behind the circle so it sits on the white page */}
        <div
          className="pointer-events-none absolute -inset-[12%] rounded-full opacity-70 blur-2xl"
          style={{
            background:
              'radial-gradient(circle at 50% 45%, rgba(150, 230, 161, 0.55) 0%, rgba(212, 252, 121, 0.32) 45%, rgba(255, 255, 255, 0) 72%)',
          }}
        />
        <div className="relative h-full w-full overflow-hidden rounded-full shadow-[0_18px_48px_-18px_rgba(40,40,40,0.35)]">
          {/* the source gif is a circle on a black plate — scale up so only the circle's interior shows */}
          <img
            ref={imgRef}
            src={phase === 'frozen' ? FINAL_FRAME_SRC : GIF_SRC}
            alt={alt}
            loading="eager"
            decoding="async"
            className="h-full w-full scale-[1.2] object-cover"
          />
        </div>
      </div>
      {/* Dim by default (visible on touch devices with no hover), brightens on hover/focus. */}
      <p
        className="max-w-[220px] text-center text-[length:var(--text-caption)] leading-[var(--text-caption--line-height)] text-[color:var(--color-neutral-500)] opacity-40 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100"
      >
        {CAPTION}
      </p>
    </div>
  )
}
