"use client"

import * as React from "react"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 rounded-full border border-[#e5e0da] bg-white px-3 py-1.5 text-sm font-medium transition-colors hover:bg-[#faf9f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]/70">
        <span className="uppercase text-[11px] tracking-wider text-[#6b6b6b]">{language}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[4rem] rounded-xl border-[#e5e0da] p-1">
        <DropdownMenuItem
          onClick={() => setLanguage('sr')}
          className={`flex items-center justify-center cursor-pointer p-2 rounded-lg ${language === 'sr' ? 'bg-[#faf9f7] text-[#1a1a1a]' : 'text-[#6b6b6b]'}`}
        >
          <span className="uppercase text-[11px] font-medium tracking-wider">SR</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage('en')}
          className={`flex items-center justify-center cursor-pointer p-2 rounded-lg ${language === 'en' ? 'bg-[#faf9f7] text-[#1a1a1a]' : 'text-[#6b6b6b]'}`}
        >
          <span className="uppercase text-[11px] font-medium tracking-wider">EN</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage('ru')}
          className={`flex items-center justify-center cursor-pointer p-2 rounded-lg ${language === 'ru' ? 'bg-[#faf9f7] text-[#1a1a1a]' : 'text-[#6b6b6b]'}`}
        >
          <span className="uppercase text-[11px] font-medium tracking-wider">RU</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
