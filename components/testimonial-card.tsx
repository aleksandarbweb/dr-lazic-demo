import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  author: string
  treatment?: string
  treatmentHref?: string
}

export function TestimonialCard({ quote, author, treatment, treatmentHref }: TestimonialCardProps) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#e5e0da] bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none md:p-10">
      {/* Top red accent line */}
      <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#b91c1c] via-[#b91c1c]/60 to-transparent" />

      <Quote size={28} className="text-[#b91c1c] mb-5 opacity-25 flex-shrink-0" />
      <p className="mb-8 text-lg italic leading-relaxed text-[#5e5953] font-light">&quot;{quote}&quot;</p>
      <div className="mt-auto border-t border-[#e5e0da] pt-6">
        <p className="text-[#1a1a1a] font-medium">{author}</p>
        {treatment && (
          treatmentHref ? (
            <a
              href={treatmentHref}
              className="text-[#b91c1c] text-sm mt-1 tracking-wide hover:underline inline-block"
            >
              {treatment}
            </a>
          ) : (
            <p className="text-[#b91c1c] text-sm mt-1 tracking-wide">{treatment}</p>
          )
        )}
      </div>
    </div>
  )
}
