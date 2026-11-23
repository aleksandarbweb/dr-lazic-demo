'use client'

import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { CircleDot } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
  learnMoreText?: string
}

const sharedClassName =
  'group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[1.35rem] border border-border bg-white p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-xl'

function CardInner({ icon, title, description, href, learnMoreText }: ServiceCardProps) {
  const Icon = icon ?? CircleDot

  return (
    <>
      <div className="absolute left-0 top-0 h-[3px] w-0 bg-primary transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:w-full" />
      <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border transition-all duration-500 group-hover:border-primary/30 group-hover:bg-primary/5">
        <Icon
          size={26}
          className="text-primary transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-[-3deg]"
        />
      </div>
      <h3 className="mb-3 font-serif text-xl text-foreground">{title}</h3>
      <p className="mb-5 flex-grow text-sm font-light leading-relaxed text-muted-foreground">
        {description}
      </p>
      {href && (
        <span className="mt-auto inline-flex shrink-0 items-center gap-2 text-sm font-medium tracking-wide text-primary transition-all duration-300 group-hover:gap-3">
          {learnMoreText || 'Saznajte više'}
          <span
            className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
            aria-hidden="true"
          >
            →
          </span>
        </span>
      )}
    </>
  )
}

export function ServiceCard(props: ServiceCardProps) {
  if (props.href) {
    return (
      <Link href={props.href} className={sharedClassName}>
        <CardInner {...props} />
      </Link>
    )
  }
  return (
    <div className={sharedClassName}>
      <CardInner {...props} />
    </div>
  )
}
