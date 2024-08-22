'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle: string
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='mx-auto max-w-2xl text-center'
    >
      <h2 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
        {title}
      </h2>
      <p className='mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400'>
        {subtitle}
      </p>
    </motion.div>
  )
}

export default SectionHeader
