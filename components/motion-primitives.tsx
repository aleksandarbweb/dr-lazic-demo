"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "motion/react"

/* ─── FadeUp ──────────────────────────────────────────────────────────────
   Scroll-triggered fade-up reveal for individual elements or sections.
   Uses IntersectionObserver via useInView (triggers once). */

interface FadeUpProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  y?: number
  className?: string
  once?: boolean
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  y = 24,
  className,
  once = true,
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-60px" })
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={shouldReduce ? false : { opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: shouldReduce ? 0 : duration,
        delay: shouldReduce ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── StaggerChildren ─────────────────────────────────────────────────────
   Container that staggers its StaggerItem children on scroll. */

interface StaggerChildrenProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.08,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: shouldReduce ? 0 : staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── StaggerItem ─────────────────────────────────────────────────────────
   Individual child inside StaggerChildren. */

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      variants={{
        hidden: shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
