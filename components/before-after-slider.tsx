'use client'

import Image from 'next/image'
import { useCallback, useEffect, useId, useRef, useState } from 'react'

interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc: string
  beforeLabel: string
  afterLabel: string
  alt: string
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel,
  afterLabel,
  alt,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const dragging = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const labelId = useId()

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(98, Math.max(2, next)))
  }, [])

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return
      updateFromClientX(e.clientX)
    }
    const onUp = () => {
      dragging.current = false
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [updateFromClientX])

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full touch-none overflow-hidden border border-[#ddd6cc] bg-[#1c1a17] select-none"
      onPointerDown={(e) => {
        dragging.current = true
        updateFromClientX(e.clientX)
      }}
      role="img"
      aria-labelledby={labelId}
    >
      <span id={labelId} className="sr-only">
        {alt}
      </span>

      <Image
        src={afterSrc}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        draggable={false}
      />

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          draggable={false}
        />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-sm bg-[#12100e]/70 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-sm bg-[#12100e]/70 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white">
        {afterLabel}
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white/90"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-primary text-white shadow-md">
          <span className="flex gap-0.5 text-[10px] leading-none" aria-hidden="true">
            <span>◀</span>
            <span>▶</span>
          </span>
        </div>
      </div>

      <input
        type="range"
        min={2}
        max={98}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-x-0 bottom-2 z-20 mx-auto h-6 w-[calc(100%-1.5rem)] cursor-ew-resize opacity-0"
        aria-label={alt}
      />
    </div>
  )
}
