'use client'

import { useEffect, useLayoutEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { useTranslation } from '@/lib/i18n/LanguageContext'

// Set to true if you want to temporarily remove the intro without touching the layout.
const DISABLE_SITE_INTRO = false
const INTRO_VIDEO_SRC = '/videos/dr-teric-video-intro-sofija.mp4'
// Matches the source video's actual runtime (public/videos/dr-teric-video-intro-sofija.mp4 is ~4.968s)
// so the overlay fades out right as the clip finishes instead of holding on a frozen/looped frame.
const INTRO_HOLD_MS = 4968
const REDUCED_MOTION_HOLD_MS = 1200
const INTRO_FADE_SECONDS = 1.5
const REDUCED_MOTION_FADE_SECONDS = 0.28
// sessionStorage (not a module-level variable) so "already seen" survives a
// hard reload/direct link within the same tab session, but replays in a new
// tab/session — a module-level flag resets on every full page load.
const INTRO_SESSION_KEY = 'dt_intro_seen'

function markIntroSeen() {
  try {
    window.sessionStorage.setItem(INTRO_SESSION_KEY, '1')
  } catch {
    // sessionStorage unavailable (e.g. private browsing) — nothing to persist.
  }
}

export function IntroOverlay() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(!DISABLE_SITE_INTRO)
  const [active, setActive] = useState(true)

  // useLayoutEffect runs synchronously before the browser paints, so a
  // returning visitor within the same session never sees the intro flash in
  // before this hides it.
  useLayoutEffect(() => {
    if (DISABLE_SITE_INTRO) return
    try {
      if (window.sessionStorage.getItem(INTRO_SESSION_KEY) === '1') {
        setMounted(false)
      }
    } catch {
      // sessionStorage unavailable — fall back to showing the intro once.
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

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#070505] text-white cursor-pointer"
      initial={{ opacity: 1 }}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{
        duration: reduceMotion ? REDUCED_MOTION_FADE_SECONDS : INTRO_FADE_SECONDS,
        ease: [0.22, 1, 0.36, 1],
      }}
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
      <video
        className="absolute inset-0 h-full w-full object-cover object-[22%_center] md:object-center"
        src={INTRO_VIDEO_SRC}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      />

      <motion.div
        className="relative z-10 flex w-[min(94vw,1180px)] flex-col items-center px-5 text-center"
        initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.985, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        transition={{
          delay: reduceMotion ? 0 : 0.3,
          duration: reduceMotion ? 0.12 : 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          className="relative w-full"
          initial={reduceMotion ? false : { opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{
            delay: reduceMotion ? 0 : 0.3,
            duration: reduceMotion ? 0.12 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Image
            src="/images/Logos/dr terzic beli logo.png"
            alt="Dr Terzić"
            width={680}
            height={200}
            priority
            className="relative mx-auto h-auto w-full max-w-[680px] object-contain drop-shadow-[0_18px_34px_rgba(0,0,0,0.48)]"
          />
        </motion.div>

        <motion.div
          className="mt-5 w-full max-w-[1040px] sm:mt-7"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: reduceMotion ? 0.04 : 0.62,
            duration: reduceMotion ? 0.12 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="mb-4 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#c6353d] sm:text-xs">
            {t.home.hero.sloganEyebrow || 'VIŠE OD 20 GODINA SA VAMA'}
          </p>
          <p className="text-[clamp(1.9rem,4.6vw,4.15rem)] font-semibold leading-[1.06] text-[#fff8ef] lg:whitespace-nowrap">
            {t.home.hero.sloganMain || 'Briga o zdravlju i lepoti'}
          </p>
          <p className="mt-2 text-[clamp(1.2rem,3.2vw,2.45rem)] italic leading-[1.14] text-[#eee0d2]">
            {t.home.hero.sloganItalic || 'na prirodan i bezbedan način.'}
          </p>
        </motion.div>
      </motion.div>

      <button
        type="button"
        tabIndex={-1}
        onClick={(e) => {
          e.stopPropagation()
          finishIntro()
        }}
        className="absolute bottom-6 right-6 z-20 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-white sm:bottom-8 sm:right-8"
      >
        Preskoči
      </button>
    </motion.div>
  )
}
