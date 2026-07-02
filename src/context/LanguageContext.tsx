'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from 'react'

export type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language')
      if (savedLanguage === 'es' || savedLanguage === 'en') {
        setLanguage(savedLanguage)
      } else if (window.navigator.language.toLowerCase().startsWith('en')) {
        setLanguage('en')
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language
    }
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === 'es' ? 'en' : 'es'
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', newLanguage)
      }
      return newLanguage
    })
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
