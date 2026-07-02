'use client'

import Image from 'next/image'
import Avatar from '@/images/profile-img.png'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const content = {
  es: {
    greeting: '¡Hola! 👋',
    introBeforeName: 'Soy ',
    introAfterName:
      ', diseñador UX/UI y Front-end con más de 8 años de experiencia en el diseño y desarrollo productos digitales.',
    focus:
      'Mi enfoque es crear interfaces atractivas y funcionales, basadas en una profunda comprensión de las necesidades de los usuarios.',
    photoAlt: 'Foto de perfil'
  },
  en: {
    greeting: 'Hi! 👋',
    introBeforeName: "I'm ",
    introAfterName:
      ', a UX/UI and Front-end designer with more than 8 years of experience in the design and development of digital products.',
    focus:
      'My approach is to create attractive and functional interfaces, based on a deep understanding of user needs.',
    photoAlt: 'Profile photo'
  }
}

const About = () => {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <div id='about' className='py-20 scroll-mt-20'>
      <div className='container mx-auto'>
        <div className='grid sm:grid-cols-2 gap-6'>
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
            className='col-span-1'
          >
            <h3 className='text-3xl font-semibold text-gray-900 dark:text-white mb-8'>
              {t.greeting}
            </h3>
            <p className='mt-2 text-lg text-gray-500 dark:text-gray-200 mb-6'>
              {t.introBeforeName}
              <b>Carlos Opazo</b>
              {t.introAfterName}
            </p>
            <p className='mt-2 text-lg text-gray-500 dark:text-gray-200'>
              {t.focus}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
            className='col-span-1'
          >
            <Image
              src={Avatar}
              alt={t.photoAlt}
              width={260}
              height={260}
              className='mx-auto rounded-full'
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
