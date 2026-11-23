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
      <DropdownMenuTrigger className="inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-border bg-white px-3 text-sm font-medium transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70">
        <span className="uppercase text-[11px] tracking-wider text-muted-foreground">{language}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[4rem] rounded-xl border-border p-1">
        <DropdownMenuItem
          onClick={() => setLanguage('sr')}
          className={`flex items-center justify-center cursor-pointer p-2 rounded-lg ${language === 'sr' ? 'bg-background text-foreground' : 'text-muted-foreground'}`}
        >
          <span className="uppercase text-[11px] font-medium tracking-wider">SR</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage('en')}
          className={`flex items-center justify-center cursor-pointer p-2 rounded-lg ${language === 'en' ? 'bg-background text-foreground' : 'text-muted-foreground'}`}
        >
          <span className="uppercase text-[11px] font-medium tracking-wider">EN</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage('ru')}
          className={`flex items-center justify-center cursor-pointer p-2 rounded-lg ${language === 'ru' ? 'bg-background text-foreground' : 'text-muted-foreground'}`}
        >
          <span className="uppercase text-[11px] font-medium tracking-wider">RU</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
