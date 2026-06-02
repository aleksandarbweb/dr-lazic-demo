"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from "motion/react"

interface DoctorCardProps {
  name: string
  title: string
  bio: string
  imageSrc: string
  reversed?: boolean
  profileHref?: string
  enableFocusEasterEgg?: boolean
  onFocusEasterEggTrigger?: () => void
}

export function DoctorCard({
  name,
  title,
  bio,
  imageSrc,
  reversed,
  profileHref,
  enableFocusEasterEgg = false,
  onFocusEasterEggTrigger,
}: DoctorCardProps) {
  const router = useRouter()
  const [focusClicks, setFocusClicks] = useState(0)
  const [firstClickAt, setFirstClickAt] = useState<number | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-80px" })
  const shouldReduce = useReducedMotion()

  const bioParts = useMemo(() => {
    if (!enableFocusEasterEgg) {
      return { before: bio, after: '' }
    }
    const matchIndex = bio.toLowerCase().indexOf('fokus')
    if (matchIndex === -1) {
      return { before: bio, after: '' }
    }
    return {
      before: bio.slice(0, matchIndex),
      after: bio.slice(matchIndex + 'fokus'.length),
    }
  }, [bio, enableFocusEasterEgg])

  useEffect(() => {
    if (focusClicks >= 7 && firstClickAt && Date.now() - firstClickAt <= 10000) {
      onFocusEasterEggTrigger?.()
      router.push('/faktor')
    }
  }, [focusClicks, firstClickAt, onFocusEasterEggTrigger, router])

  useEffect(() => {
    if (focusClicks === 0 || !firstClickAt) return
    const timeout = window.setTimeout(() => {
      if (Date.now() - firstClickAt > 10000) {
        setFocusClicks(0)
        setFirstClickAt(null)
      }
    }, 300)
    return () => window.clearTimeout(timeout)
  }, [focusClicks, firstClickAt])

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={shouldReduce ? false : { opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{
          duration: shouldReduce ? 0 : 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
      >
        <div className="w-full md:w-2/5">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[350px] overflow-hidden rounded-[1.75rem] border border-[#e3d8cf] bg-[#f5eee6] p-1.5 shadow-[0_24px_48px_-30px_rgba(45,31,22,0.38)]">
            <div className="relative h-full w-full overflow-hidden rounded-[calc(1.75rem-0.375rem)]">
              {profileHref ? (
                <Link href={profileHref} className="absolute inset-0 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]">
                  <Image
                    src={imageSrc}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                  <span className="sr-only">{name}</span>
                </Link>
              ) : (
                <Image
                  src={imageSrc}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1f1711]/25 via-transparent to-transparent" />
            </div>
            <div className="absolute left-5 top-5 h-12 w-12 border-l border-t border-[#b91c1c]/60" />
            <div className="absolute bottom-5 right-5 h-12 w-12 border-b border-r border-[#b91c1c]/60" />
          </div>
        </div>
        <div className={`w-full md:w-3/5 ${reversed ? 'md:border-r md:border-l-0 md:pl-0 md:pr-10' : 'md:pl-10'} border-l border-[#b91c1c]/40 pl-8`}>
          <h3 className="mb-3 font-serif text-3xl text-[#1a1a1a] md:text-4xl">
            {profileHref ? (
              <Link href={profileHref} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]">
                {name}
              </Link>
            ) : (
              name
            )}
          </h3>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.15em] text-[#b91c1c]">{title}</p>
          <p className="text-[#5f5a55] leading-relaxed font-light">
            {bioParts.before}
            {enableFocusEasterEgg && bioParts.after ? (
              <>
                <button
                  type="button"
                  onClick={() => {
                    if (!firstClickAt) setFirstClickAt(Date.now())
                    setFocusClicks((prev) => prev + 1)
                  }}
                  className="mx-[1px] bg-transparent p-0 text-inherit font-inherit leading-inherit focus-visible:outline-none cursor-text select-none"
                  aria-label="Fokus"
                >
                  Fokus
                </button>
                {bioParts.after}
              </>
            ) : null}
          </p>
        </div>
      </motion.div>
    </>
  )
}
