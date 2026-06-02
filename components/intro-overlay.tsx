'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useTranslation } from '@/lib/i18n/LanguageContext'

const INTRO_SESSION_KEY = 'dr-terzic-site-intro-seen'

// Testing controls:
// - In development this stays true so a hard refresh shows the intro every time.
// - Set to false locally if you want to test the production sessionStorage behavior.
const FORCE_INTRO_IN_DEVELOPMENT = process.env.NODE_ENV !== 'production'

// Set to true if you want to temporarily remove the intro without touching the layout.
const DISABLE_SITE_INTRO = false

const INTRO_DURATION_MS = 2900
const REDUCED_MOTION_DURATION_MS = 1100
const INTRO_EXIT_DURATION_MS = 850
const REDUCED_MOTION_EXIT_DURATION_MS = 280
const INTRO_HARD_TIMEOUT_MS = 4800

const networkNodes = [
  { id: 'n1', x: 132, y: 148, tone: 'white', r: 3.2 },
  { id: 'n2', x: 214, y: 102, tone: 'red', r: 4.4 },
  { id: 'n3', x: 292, y: 168, tone: 'white', r: 2.8 },
  { id: 'n4', x: 194, y: 252, tone: 'white', r: 3.4 },
  { id: 'n5', x: 336, y: 278, tone: 'red', r: 3.8 },
  { id: 'n6', x: 724, y: 120, tone: 'white', r: 3.1 },
  { id: 'n7', x: 818, y: 172, tone: 'red', r: 4.2 },
  { id: 'n8', x: 892, y: 266, tone: 'white', r: 3 },
  { id: 'n9', x: 742, y: 306, tone: 'white', r: 2.8 },
  { id: 'n10', x: 628, y: 238, tone: 'red', r: 3.7 },
  { id: 'n11', x: 210, y: 438, tone: 'red', r: 3.6 },
  { id: 'n12', x: 324, y: 492, tone: 'white', r: 3 },
  { id: 'n13', x: 690, y: 480, tone: 'white', r: 3.1 },
  { id: 'n14', x: 804, y: 420, tone: 'red', r: 3.9 },
]

const networkLines = [
  ['n1', 'n2'],
  ['n2', 'n3'],
  ['n1', 'n4'],
  ['n3', 'n5'],
  ['n4', 'n5'],
  ['n6', 'n7'],
  ['n7', 'n8'],
  ['n8', 'n9'],
  ['n9', 'n10'],
  ['n6', 'n10'],
  ['n11', 'n12'],
  ['n13', 'n14'],
  ['n5', 'n10'],
]

function lockPageScroll() {
  const html = document.documentElement
  const body = document.body
  const previous = {
    htmlOverflow: html.style.overflow,
    bodyOverflow: body.style.overflow,
  }

  html.classList.add('intro-active')
  body.classList.add('intro-active')
  html.style.overflow = 'hidden'
  body.style.overflow = 'hidden'

  return () => {
    html.classList.remove('intro-active')
    html.classList.remove('intro-revealing')
    body.classList.remove('intro-active')
    body.classList.remove('intro-revealing')
    html.style.overflow = previous.htmlOverflow
    body.style.overflow = previous.bodyOverflow
  }
}

function revealSite() {
  document.documentElement.classList.add('intro-revealing')
  document.body.classList.add('intro-revealing')
}

function shouldShowIntro() {
  if (DISABLE_SITE_INTRO) return false

  try {
    if (window.localStorage.getItem('dr-terzic-disable-intro') === '1') {
      return false
    }

    if (window.localStorage.getItem('dr-terzic-force-intro') === '1') {
      return true
    }

    if (FORCE_INTRO_IN_DEVELOPMENT) {
      return true
    }

    if (window.sessionStorage.getItem(INTRO_SESSION_KEY) === '1') {
      return false
    }

    window.sessionStorage.setItem(INTRO_SESSION_KEY, '1')
    return true
  } catch {
    return true
  }
}

export function IntroOverlay() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()
  const [shouldRender, setShouldRender] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const unlockScrollRef = useRef<(() => void) | null>(null)
  const finishedRef = useRef(false)

  useEffect(() => {
    if (!shouldShowIntro()) return

    const duration = reduceMotion ? REDUCED_MOTION_DURATION_MS : INTRO_DURATION_MS
    finishedRef.current = false
    unlockScrollRef.current = lockPageScroll()
    setShouldRender(true)

    const entryFrame = window.requestAnimationFrame(() => {
      setIsVisible(true)
    })

    const finishIntro = () => {
      if (finishedRef.current) return
      finishedRef.current = true
      setIsExiting(true)
      revealSite()
      setIsVisible(false)
    }

    const introTimer = window.setTimeout(finishIntro, duration)
    const hardTimer = window.setTimeout(() => {
      revealSite()
      setIsVisible(false)
      setShouldRender(false)
      unlockScrollRef.current?.()
      unlockScrollRef.current = null
    }, INTRO_HARD_TIMEOUT_MS)

    return () => {
      window.cancelAnimationFrame(entryFrame)
      window.clearTimeout(introTimer)
      window.clearTimeout(hardTimer)
      unlockScrollRef.current?.()
      unlockScrollRef.current = null
      setIsExiting(false)
    }
  }, [reduceMotion])

  const completeExit = () => {
    unlockScrollRef.current?.()
    unlockScrollRef.current = null
    setIsExiting(false)
    setShouldRender(false)
  }

  const nodeById = Object.fromEntries(networkNodes.map((node) => [node.id, node]))
  const animationMode = reduceMotion
    ? {}
    : {
        x: [0, 10, -6, 0],
        y: [0, -8, 6, 0],
        rotate: [0, 0.6, -0.4, 0],
      }

  return (
    <AnimatePresence onExitComplete={completeExit}>
      {shouldRender && isVisible ? (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-[99999] grid place-items-center overflow-hidden bg-[#070505] text-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: reduceMotion ? 1 : 1.01,
            filter: reduceMotion ? 'blur(0px)' : 'blur(3px)',
            transition: {
              duration: (reduceMotion ? REDUCED_MOTION_EXIT_DURATION_MS : INTRO_EXIT_DURATION_MS) / 1000,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          <style>{`
            html.intro-active,
            body.intro-active {
              overflow: hidden !important;
            }

            body.intro-active nav,
            body.intro-active main,
            body.intro-active footer {
              opacity: 0;
              transform: translateY(12px);
              filter: blur(4px);
              transition:
                opacity 850ms cubic-bezier(0.22, 1, 0.36, 1),
                transform 850ms cubic-bezier(0.22, 1, 0.36, 1),
                filter 850ms cubic-bezier(0.22, 1, 0.36, 1);
              will-change: opacity, transform, filter;
            }

            body.intro-revealing nav,
            body.intro-revealing main,
            body.intro-revealing footer {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }

            @media (prefers-reduced-motion: reduce) {
              body.intro-active nav,
              body.intro-active main,
              body.intro-active footer {
                transform: none;
                filter: none;
                transition: opacity 260ms ease;
              }
            }
          `}</style>

          <motion.div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 50% 44%, rgba(126, 20, 24, 0.34), transparent 28%), radial-gradient(circle at 18% 24%, rgba(255, 255, 255, 0.09), transparent 24%), radial-gradient(circle at 82% 72%, rgba(126, 20, 24, 0.24), transparent 30%), linear-gradient(135deg, #120707 0%, #050404 44%, #140808 100%)',
            }}
          />

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_46%)] opacity-80" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.045),transparent_28%,rgba(122,18,24,0.12)_52%,transparent_74%)]" />

          <motion.svg
            className="absolute inset-0 h-full w-full opacity-90"
            viewBox="0 0 1000 640"
            preserveAspectRatio="xMidYMid slice"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: reduceMotion ? 0.12 : 0.62, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <defs>
              <linearGradient id="skinLayer" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="34%" stopColor="rgba(255,255,255,0.32)" />
                <stop offset="62%" stopColor="rgba(147,30,36,0.5)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
              <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>

            <motion.g
              animate={animationMode}
              transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            >
              <path
                d="M-80 420 C 120 330, 255 478, 420 390 S 710 306, 1080 390"
                fill="none"
                stroke="url(#skinLayer)"
                strokeWidth="1.4"
                opacity="0.36"
              />
              <path
                d="M-100 470 C 110 390, 270 540, 456 454 S 746 374, 1100 458"
                fill="none"
                stroke="url(#skinLayer)"
                strokeWidth="0.9"
                opacity="0.26"
              />
              <path
                d="M-120 512 C 150 458, 312 586, 530 498 S 810 440, 1120 512"
                fill="none"
                stroke="url(#skinLayer)"
                strokeWidth="0.7"
                opacity="0.18"
              />
            </motion.g>

            <motion.g
              animate={
                reduceMotion
                  ? {}
                  : {
                      x: [0, -12, 8, 0],
                      y: [0, 10, -4, 0],
                    }
              }
              transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            >
              {networkLines.map(([from, to], index) => {
                const a = nodeById[from]
                const b = nodeById[to]
                if (!a || !b) return null

                return (
                  <motion.line
                    key={`${from}-${to}`}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke={index % 4 === 0 ? 'rgba(172, 38, 45, 0.62)' : 'rgba(255, 246, 236, 0.32)'}
                    strokeWidth={index % 4 === 0 ? 1.05 : 0.7}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: 1,
                      opacity: index % 4 === 0 ? 0.48 : 0.34,
                      transition: {
                        delay: reduceMotion ? 0 : 0.16 + index * 0.022,
                        duration: reduceMotion ? 0.01 : 0.62,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                  />
                )
              })}

              {networkNodes.map((node, index) => {
                const isRed = node.tone === 'red'

                return (
                  <motion.g key={node.id}>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={node.r * 3.5}
                      fill={isRed ? 'rgba(147,30,36,0.16)' : 'url(#nodeGlow)'}
                      opacity={isRed ? 0.72 : 0.18}
                    />
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={node.r}
                      fill={isRed ? '#a8242b' : '#fff6ec'}
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{
                        opacity: isRed ? [0.45, 0.85, 0.55] : [0.34, 0.7, 0.44],
                        scale: reduceMotion ? 1 : [0.92, 1.18, 0.96],
                        transition: {
                          delay: reduceMotion ? 0 : 0.12 + index * 0.018,
                          duration: reduceMotion ? 0.01 : 3.8 + (index % 4) * 0.45,
                          repeat: reduceMotion ? 0 : Infinity,
                          repeatType: 'mirror',
                          ease: 'easeInOut',
                        },
                      }}
                    />
                  </motion.g>
                )
              })}
            </motion.g>
          </motion.svg>

          <div
            className="absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '42px 42px',
              maskImage: 'radial-gradient(circle at center, black, transparent 72%)',
            }}
          />

          <motion.div
            className="relative z-10 flex w-[min(94vw,1180px)] flex-col items-center px-5 text-center"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18, scale: reduceMotion ? 1 : 0.985 }}
            animate={
              isExiting
                ? {
                    opacity: 0,
                    y: reduceMotion ? 0 : -4,
                    scale: reduceMotion ? 1 : 0.985,
                    filter: reduceMotion ? 'blur(0px)' : 'blur(3px)',
                    transition: {
                      duration: (reduceMotion ? REDUCED_MOTION_EXIT_DURATION_MS : INTRO_EXIT_DURATION_MS) / 1000,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }
                : {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: 'blur(0px)',
                    transition: {
                      delay: reduceMotion ? 0 : 0.12,
                      duration: reduceMotion ? 0.12 : 0.62,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }
            }
          >
            <motion.div
              className="relative w-full"
              animate={reduceMotion ? {} : { y: [0, -3, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8e1f26]/20 blur-3xl" />
              <motion.img
                src="/images/Logos/dr terzic beli logo.png"
                alt="Dr Terzić"
                loading="eager"
                decoding="async"
                className="relative mx-auto h-auto w-full max-w-[680px] object-contain drop-shadow-[0_18px_34px_rgba(0,0,0,0.48)]"
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{
                  opacity: 1,
                  filter: 'blur(0px)',
                  transition: {
                    delay: reduceMotion ? 0 : 0.18,
                    duration: reduceMotion ? 0.12 : 0.64,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
              />
              <motion.div
                className="absolute inset-y-0 left-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.42),transparent)]"
                initial={{ x: '-150%', opacity: 0 }}
                animate={{
                  x: reduceMotion ? '-150%' : '260%',
                  opacity: reduceMotion ? 0 : [0, 0.8, 0],
                  transition: {
                    delay: 0.72,
                    duration: 1.35,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
              />
            </motion.div>

            <motion.div
              className="mt-5 w-full max-w-[1040px] sm:mt-7"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: reduceMotion ? 0.06 : 0.72,
                  duration: reduceMotion ? 0.12 : 0.48,
                  ease: [0.22, 1, 0.36, 1],
                },
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

          <motion.div
            className="absolute bottom-8 left-1/2 h-px w-[min(64vw,420px)] -translate-x-1/2 overflow-hidden bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: reduceMotion ? 0 : 1, transition: { delay: 0.92, duration: 0.32 } }}
          >
            <motion.div
              className="h-full w-1/2 bg-[linear-gradient(90deg,transparent,#b12b32,transparent)]"
              animate={{ x: ['-100%', '220%'] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
