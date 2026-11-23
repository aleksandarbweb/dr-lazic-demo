'use client'

import { useEffect, useLayoutEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'

const DISABLE_SITE_INTRO = false
const INTRO_HOLD_MS = 3000
const REDUCED_MOTION_HOLD_MS = 900
const INTRO_FADE_SECONDS = 0.65
const REDUCED_MOTION_FADE_SECONDS = 0.22
const INTRO_SESSION_KEY = 'dl_intro_seen'
const EASE = [0.22, 1, 0.36, 1] as const

function markIntroSeen() {
  try {
    window.sessionStorage.setItem(INTRO_SESSION_KEY, '1')
  } catch {
    // sessionStorage unavailable
  }
}

export function IntroOverlay() {
  const reduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(!DISABLE_SITE_INTRO)
  const [active, setActive] = useState(true)

  useLayoutEffect(() => {
    if (DISABLE_SITE_INTRO) return
    try {
      if (window.sessionStorage.getItem(INTRO_SESSION_KEY) === '1') {
        setMounted(false)
      }
    } catch {
      // show intro once
    }
  }, [])

  const finishIntro = () => setActive(false)

  useEffect(() => {
    if (!mounted) return

    const previousHtmlOverflow = document.documentElement.style.overflow
    const previousBodyOverflow = document.body.style.overflow

    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    const timer = window.setTimeout(
      finishIntro,
      reduceMotion ? REDUCED_MOTION_HOLD_MS : INTRO_HOLD_MS
    )

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        finishIntro()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('keydown', handleKeyDown)
      document.documentElement.style.overflow = previousHtmlOverflow
      document.body.style.overflow = previousBodyOverflow
    }
  }, [mounted, reduceMotion])

  if (!mounted) return null

  const fadeDuration = reduceMotion ? REDUCED_MOTION_FADE_SECONDS : INTRO_FADE_SECONDS

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#12100e] text-white cursor-pointer"
      initial={{ opacity: 1 }}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: fadeDuration, ease: EASE }}
      style={{ pointerEvents: active ? 'auto' : 'none' }}
      onClick={finishIntro}
      onAnimationComplete={() => {
        if (!active) {
          markIntroSeen()
          document.getElementById('main-content')?.focus()
          setMounted(false)
        }
      }}
    >
      {/* Soft stage atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 42%, rgba(0,128,138,0.14) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex w-[min(92vw,420px)] flex-col items-center px-5 text-center">
        {/* Beat 1: emblem reveal */}
        <motion.div
          className="relative"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: reduceMotion ? 0 : 0.12,
            duration: reduceMotion ? 0.15 : 0.75,
            ease: EASE,
          }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(12,110,118,0.28) 0%, transparent 68%)',
            }}
          />
          <Image
            src="/images/Logos/dr-lazic-emblem.png"
            alt="Dental Clinic Dr Vesna Lazić"
            width={727}
            height={727}
            priority
            className="relative mx-auto h-auto w-[min(52vw,220px)] object-contain sm:w-[240px]"
          />
        </motion.div>

        {/* Beat 2: divider */}
        <motion.div
          className="mt-7 h-px origin-center bg-[#0c6e76]/70 sm:mt-8"
          initial={reduceMotion ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            delay: reduceMotion ? 0 : 0.78,
            duration: reduceMotion ? 0.12 : 0.45,
            ease: EASE,
          }}
          style={{ width: 'min(42vw, 148px)' }}
        />

        {/* Beat 3: wordmark */}
        <motion.div
          className="mt-5 flex flex-col items-center gap-1.5 sm:mt-6"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: reduceMotion ? 0.02 : 1.05,
            duration: reduceMotion ? 0.12 : 0.5,
            ease: EASE,
          }}
        >
          <p
            className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-[#00808a] sm:text-[0.72rem]"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            Dental Clinic
          </p>
          <p
            className="text-[1.05rem] font-medium uppercase tracking-[0.14em] text-[#c8d0d1] sm:text-[1.15rem]"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            Dr Vesna Lazić
          </p>
        </motion.div>

        {/* Beat 4: sparse Serbian line */}
        <motion.p
          className="mt-4 text-[0.7rem] font-normal tracking-[0.18em] text-[#8a9190] sm:mt-5 sm:text-[0.72rem]"
          style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: reduceMotion ? 0.04 : 1.4,
            duration: reduceMotion ? 0.1 : 0.4,
            ease: EASE,
          }}
        >
          Od 1998 · prvi pregled besplatan
        </motion.p>
      </div>

      <button
        type="button"
        tabIndex={-1}
        onClick={(e) => {
          e.stopPropagation()
          finishIntro()
        }}
        className="absolute bottom-6 right-6 z-20 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-white/45 transition-colors duration-300 hover:text-white/85 sm:bottom-8 sm:right-8"
      >
        Preskoči
      </button>
    </motion.div>
  )
}
