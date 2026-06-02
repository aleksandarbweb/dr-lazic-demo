import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
  learnMoreText?: string
}

export function ServiceCard({ icon: Icon, title, description, href, learnMoreText }: ServiceCardProps) {
  const CardWrapper = href ? Link : 'div'
  
  return (
    <CardWrapper
      href={href || '#'}
      className="group relative flex cursor-pointer flex-col h-full overflow-hidden rounded-[1.35rem] border border-[#e5e0da] bg-white p-8 transition-all duration-500 hover:border-[#b91c1c]/40 hover:shadow-xl"
    >
      {/* Red accent line — slides in from left on hover */}
      <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#b91c1c] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:w-full" />

      <div className="mb-6 flex shrink-0 h-14 w-14 items-center justify-center rounded-xl border border-[#e5e0da] transition-all duration-500 group-hover:border-[#b91c1c]/30 group-hover:bg-[#b91c1c]/5">
        <Icon size={26} className="text-[#b91c1c] transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-[-3deg]" />
      </div>
      <h3 className="text-[#1a1a1a] font-serif text-xl mb-3">{title}</h3>
      <p className="text-[#6b6b6b] text-sm leading-relaxed mb-5 font-light flex-grow">{description}</p>
      {href && (
        <span className="mt-auto shrink-0 text-[#b91c1c] text-sm font-medium tracking-wide inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
          {learnMoreText || "Saznajte više"}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">→</span>
        </span>
      )}
    </CardWrapper>
  )
}
