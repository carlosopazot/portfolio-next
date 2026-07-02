'use client'

import { Button } from '@headlessui/react'
import { useLanguage } from '@/context/LanguageContext'

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <Button
      onClick={toggleLanguage}
      className='inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-gray-800 dark:text-white focus:outline-none data-[hover]:bg-gray-200 dark:data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 transition ease-in-out'
      aria-label={
        language === 'es'
          ? 'Cambiar idioma a inglés'
          : 'Switch language to Spanish'
      }
    >
      {language === 'es' ? 'EN' : 'ES'}
    </Button>
  )
}

export default LanguageToggle
