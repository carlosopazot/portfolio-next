'use client'

import Image from 'next/image'
import Avatar from '@/images/profile-img.png'
import { motion } from 'framer-motion'

const About = () => {
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
              ¡Hola! 👋
            </h3>
            <p className='mt-2 text-lg text-gray-500 dark:text-gray-200 mb-6'>
              Soy <b>Carlos Opazo</b>, diseñador UX/UI y Front-end con más de 8
              años de experiencia en el diseño y desarrollo productos digitales.
            </p>
            <p className='mt-2 text-lg text-gray-500 dark:text-gray-200'>
              Mi enfoque es crear interfaces atractivas y funcionales, basadas
              en una profunda comprensión de las necesidades de los usuarios.
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
              alt='Foto de perfil'
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
