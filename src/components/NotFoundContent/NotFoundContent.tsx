'use client'

import { useLanguage } from '@/context/LanguageContext'

const content = {
  es: {
    title: 'Algo salió mal.',
    subtitle: 'La página que buscas no está aquí.'
  },
  en: {
    title: 'Something went wrong.',
    subtitle: 'The page you are looking for is not here.'
  }
}

const NotFoundContent = () => {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <div className='flex flex-col justify-center text-center gap-2'>
      <h1 className='text-4xl font-bold '>{t.title}</h1>
      <p>{t.subtitle}</p>
    </div>
  )
}

export default NotFoundContent
