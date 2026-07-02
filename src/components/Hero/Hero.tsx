'use client'

import { motion } from 'framer-motion'
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'
import BgShape from '../BgShape/BgShape'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const content = {
  es: { role: 'Diseñador UX-UI', frontend: 'Frontend' },
  en: { role: 'UX-UI Designer', frontend: 'Frontend' }
}

const Hero = () => {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <div className='relative isolate h-[95vh] flex items-center' id='hero'>
      <BgShape />
      <div className='mx-auto max-w-2xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <h1 className='text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl'>
            carlos opazo.
          </h1>
          <h2 className='mt-6 leading-8 text-gray-400 text-xl sm:text-3xl font-semibold'>
            {t.role} <span className='font-light mx-2'>|</span> {t.frontend}
          </h2>
        </motion.div>
        <Link href='#about'>
          <ChevronDoubleDownIcon className='absolute bottom-20 animate-bounce left-1/2 w-8 h-8 text-gray-900 dark:text-white' />
        </Link>
      </div>
      <BgShape shape2 />
    </div>
  )
}

export default Hero
