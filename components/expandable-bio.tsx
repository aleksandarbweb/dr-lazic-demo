"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface ExpandableBioProps {
  paragraphs: string[]
  previewCount?: number
  readMoreLabel: string
  readLessLabel: string
  paragraphClassName?: string
}

export function ExpandableBio({
  paragraphs,
  previewCount = 2,
  readMoreLabel,
  readLessLabel,
  paragraphClassName = 'text-[#6b6b6b] leading-relaxed mb-5 font-light',
}: ExpandableBioProps) {
  const [expanded, setExpanded] = useState(false)
  const preview = paragraphs.slice(0, previewCount)
  const rest = paragraphs.slice(previewCount)

  return (
    <div>
      {preview.map((p, i) => (
        <p key={i} className={paragraphClassName}>
          {p}
        </p>
      ))}
      {rest.length > 0 && (
        <>
          <div
            className="overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ maxHeight: expanded ? '2400px' : '0px', opacity: expanded ? 1 : 0 }}
          >
            {rest.map((p, i) => (
              <p key={i} className={paragraphClassName}>
                {p}
              </p>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-2 text-[#b91c1c] text-sm font-medium tracking-[0.1em] uppercase group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]/70"
          >
            {expanded ? readLessLabel : readMoreLabel}
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
        </>
      )}
    </div>
  )
}
