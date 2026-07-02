'use client'

import { useState, useEffect } from 'react'
import Input from '@/components/Input/Input'
import InputTextArea from '@/components/InputTextArea/InputTextArea'
import Notification from '@/components/Notification/Notification'
import ReCAPTCHA from 'react-google-recaptcha'
import { useLanguage } from '@/context/LanguageContext'

const content = {
  es: {
    firstName: 'Nombre',
    lastName: 'Apellido',
    email: 'Correo electrónico',
    message: 'Mensaje',
    submit: 'Enviar',
    submitting: 'Enviando...',
    submitAriaLabel: 'Enviar mensaje',
    recaptchaError: 'Por favor, verifica que no eres un robot.',
    successMessage:
      '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.',
    genericError: 'Ha ocurrido un error. Por favor, intenta nuevamente.'
  },
  en: {
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    message: 'Message',
    submit: 'Send',
    submitting: 'Sending...',
    submitAriaLabel: 'Send message',
    recaptchaError: 'Please verify that you are not a robot.',
    successMessage: 'Thanks for your message! I will get in touch with you soon.',
    genericError: 'An error has occurred. Please try again.'
  }
}

const ContactForm = () => {
  const { language } = useLanguage()
  const t = content[language]

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [notification, setNotification] = useState({
    message: '',
    type: 'success' as 'success' | 'error'
  })
  const [showNotification, setShowNotification] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)

  useEffect(() => {
    if (showNotification) {
      const timeout = setTimeout(() => {
        setShowNotification(false)
      }, 3000) // Adjust time as needed

      return () => clearTimeout(timeout)
    }
  }, [showNotification])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setShowNotification(false) // Reset notification visibility

    if (!recaptchaToken) {
      setNotification({
        message: t.recaptchaError,
        type: 'error'
      })
      setShowNotification(true)
      setSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData, recaptchaToken })
      })

      if (!response.ok) {
        throw new Error('An error occurred while submitting the form')
      }

      setNotification({
        message: t.successMessage,
        type: 'success'
      })
      setShowNotification(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      })
    } catch (err) {
      setNotification({
        message: t.genericError,
        type: 'error'
      })
      setShowNotification(true)
    } finally {
      setSubmitting(false)
    }
  }

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='mt-16 sm:mt-20 mb-4'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <Input
            type='text'
            name='firstName'
            id='firstName'
            label={t.firstName}
            value={formData.firstName}
            onChange={handleChange}
            autoComplete='given-name'
            required
          />
          <Input
            type='text'
            name='lastName'
            id='lastName'
            label={t.lastName}
            value={formData.lastName}
            onChange={handleChange}
            autoComplete='family-name'
            required
          />
          <div className='sm:col-span-2'>
            <Input
              type='email'
              name='email'
              id='email'
              label={t.email}
              value={formData.email}
              onChange={handleChange}
              autoComplete='email'
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <InputTextArea
              name='message'
              id='message'
              label={t.message}
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='mt-6 flex justify-center'>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
            onChange={handleRecaptchaChange}
          />
        </div>
        <div className='mt-10'>
          <button
            type='submit'
            className='block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            disabled={submitting}
            aria-label={t.submitAriaLabel}
          >
            {submitting ? t.submitting : t.submit}
          </button>
        </div>
      </form>
      <Notification
        message={notification.message}
        type={notification.type}
        visible={showNotification}
      />
    </>
  )
}

export default ContactForm
