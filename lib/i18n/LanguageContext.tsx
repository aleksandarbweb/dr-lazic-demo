"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { sr } from './translations/sr'
import { en } from './translations/en'
import { ru } from './translations/ru'

type Language = 'sr' | 'en' | 'ru'
type Dictionary = typeof sr

const dictionaries: Record<Language, Dictionary> = {
  sr,
  en,
  ru
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('sr')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedLang = localStorage.getItem('site_language') as Language
    if (savedLang && ['sr', 'en', 'ru'].includes(savedLang)) {
      setLanguage(savedLang)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = language
    }
  }, [language, mounted])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('site_language', lang)
  }

  // Prevent hydration mismatch by returning a loader or just children without translation until mounted
  // However, for SEO on Serbian, we don't want to block rendering. 
  // Returning children with default SSR 'sr' is fine, client will hydrate 'sr' then might flash to 'en'/'ru'
  
  const value = {
    language: mounted ? language : 'sr', // Force 'sr' on server to match initial HTML
    setLanguage: handleSetLanguage,
    t: dictionaries[mounted ? language : 'sr']
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Helper hook for just getting translations
export function useTranslation() {
  const { t, language } = useLanguage()
  return { t, language }
}
