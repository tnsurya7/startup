import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'ta'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  en: {
    home: 'Home',
    services: 'Services',
    team: 'Team',
    portfolio: 'Portfolio',
    contact: 'Contact',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    bookMeeting: 'Book a Meeting',
  },
  ta: {
    home: 'முகப்பு',
    services: 'சேவைகள்',
    team: 'குழு',
    portfolio: 'திட்டங்கள்',
    contact: 'தொடர்பு',
    getStarted: 'தொடங்குங்கள்',
    learnMore: 'மேலும் அறிக',
    bookMeeting: 'சந்திப்பு பதிவு',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ta' : 'en')
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
