'use client'

import { useTranslation } from '@/lib/i18n/LanguageContext'

export function SkipLink() {
  const { t } = useTranslation()
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:rounded-full focus:border focus:border-[#b91c1c]/30 focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-[#b91c1c] focus:shadow-lg focus:outline-none"
    >
      {t.skipToContent}
    </a>
  )
}
