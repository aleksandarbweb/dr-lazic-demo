"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from "motion/react"

interface DoctorCardProps {
  name: string
  title: string
  bio: string
  imageSrc: string
  reversed?: boolean
  profileHref?: string
  ctaLabel?: string
}

export function DoctorCard({
  name,
  title,
  bio,
  imageSrc,
  reversed,
  profileHref,
  ctaLabel,
}: DoctorCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-80px" })
  const shouldReduce = useReducedMotion()

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
          <p className="text-[#5f5a55] leading-relaxed font-light">{bio}</p>
          {ctaLabel && profileHref && (
            <Link
              href={profileHref}
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-[#b91c1c]/30 px-6 py-3 text-sm font-medium uppercase tracking-[0.14em] text-[#b91c1c] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:border-[#b91c1c] hover:bg-[#b91c1c] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]/70 focus-visible:ring-offset-2"
            >
              {ctaLabel}
              <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
          )}
        </div>
      </motion.div>
    </>
  )
}
