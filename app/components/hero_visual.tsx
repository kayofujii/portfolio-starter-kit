'use client'

import { useEffect, useRef, useState } from 'react'
import type { Rive } from '@rive-app/webgl2'

const ASSET_ROOT = '/cat-window'
const CAPTION = 'My dream workspace: a cat and a jungle of plants.'

export default function HeroVisual({ alt, className = '', locale = 'en' }: {
  alt: string
  className?: string
  locale?: 'en' | 'ja'
}) {
  const sceneRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pausedRef = useRef(false)
  const syncRef = useRef<(() => void) | null>(null)
  const [ready, setReady] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(true)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const scene = sceneRef.current
    if (!canvas || !scene) return

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    let player: Rive | undefined
    let disposed = false
    let loading = false
    let loaded = false
    let failed = false
    let visible = false

    const resize = () => {
      if (loaded) player?.resizeDrawingSurfaceToCanvas(Math.min(window.devicePixelRatio || 1, 2))
    }
    const sync = () => {
      if (disposed) return
      const playing = visible && !document.hidden && !media.matches && !pausedRef.current
      if (playing && !player && !loading && !failed) void load()
      if (!loaded) return
      if (playing) {
        player?.play('CatStateMachine')
        player?.startRendering()
      } else {
        player?.pause('CatStateMachine')
        player?.stopRendering()
      }
    }
    async function load() {
      loading = true
      try {
        // Keep the runtime out of the initial page bundle and load only near the footer.
        const { Rive, RuntimeLoader, Layout, Fit, Alignment } = await import('@rive-app/webgl2')
        if (disposed) return
        RuntimeLoader.setWasmUrl(`${ASSET_ROOT}/vendor/rive.wasm`)
        RuntimeLoader.setWasmFallbackUrl(`${ASSET_ROOT}/vendor/rive_fallback.wasm`)
        player = new Rive({
          src: `${ASSET_ROOT}/cat-window.riv`,
          canvas: canvas!,
          artboard: 'CatWindow',
          stateMachine: 'CatStateMachine',
          autoplay: false,
          shouldDisableRiveListeners: true,
          layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
          onLoad: () => {
            if (disposed) return
            loaded = true
            resize()
            setReady(true)
            sync()
          },
          onLoadError: () => {
            if (disposed) return
            failed = true
            loaded = false
            setReady(false)
            player?.cleanup()
          },
        })
      } catch {
        // Retain the original still illustration if loading or WebGL fails.
        failed = true
        if (!disposed) setReady(false)
      }
    }
    const onMotionChange = () => {
      setReducedMotion(media.matches)
      sync()
    }
    syncRef.current = sync
    onMotionChange()

    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      sync()
    })
    intersection.observe(scene)
    const size = new ResizeObserver(resize)
    size.observe(scene)
    media.addEventListener('change', onMotionChange)
    document.addEventListener('visibilitychange', sync)
    window.addEventListener('resize', resize, { passive: true })

    return () => {
      disposed = true
      syncRef.current = null
      intersection.disconnect()
      size.disconnect()
      media.removeEventListener('change', onMotionChange)
      document.removeEventListener('visibilitychange', sync)
      window.removeEventListener('resize', resize)
      player?.cleanup()
    }
  }, [])

  useEffect(() => {
    pausedRef.current = paused
    syncRef.current?.()
  }, [paused])

  const showAnimation = ready && !reducedMotion
  const motionLabel = locale === 'ja'
    ? (paused ? 'アニメーションを再生' : 'アニメーションを一時停止')
    : (paused ? 'Play animation' : 'Pause animation')

  return (
    <div className={`group mx-auto flex w-[180px] shrink-0 flex-col items-center gap-2 sm:w-[220px] lg:mx-0 lg:w-[270px] xl:w-[300px] ${className}`}>
      <div ref={sceneRef} className="relative aspect-square w-full overflow-hidden rounded-xl" data-cat-animation={showAnimation ? 'ready' : 'still'}>
        <img
          src={`${ASSET_ROOT}/poster.svg`}
          alt={alt}
          width={1280}
          height={1280}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-contain"
        />
        <canvas
          ref={canvasRef}
          width={1280}
          height={1280}
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full motion-reduce:invisible ${showAnimation ? 'visible' : 'invisible'}`}
        />
        {showAnimation && (
          <button
            type="button"
            onClick={() => setPaused(value => !value)}
            aria-label={motionLabel}
            title={motionLabel}
            className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#335d69] opacity-70 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor">
              {paused ? <path d="M4 2l10 6-10 6z" /> : <path d="M4 2h3v12H4zm5 0h3v12H9z" />}
            </svg>
          </button>
        )}
      </div>
      <p className="max-w-[220px] text-center text-[length:var(--text-caption)] leading-[var(--text-caption--line-height)] text-[color:var(--color-neutral-500)] opacity-40 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100">
        {CAPTION}
      </p>
    </div>
  )
}
