'use client'

import SectionHeader from '@/components/SectionHeader/SectionHeader'
import ContactForm from '@/components/ContactForm/ContactForm'
import { motion } from 'framer-motion'

const ContactContainer = () => {
  return (
    <div className='isolate relative py-24 sm:py-32 scroll-mt-20' id='contact'>
      <div className='max-w-xl mx-auto '>
        <SectionHeader
          title='Conversemos'
          subtitle='Dejame un mensaje y me pondré en contacto contigo.'
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  )
}

export default ContactContainer
