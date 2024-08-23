'use client'

import { useState, useEffect } from 'react'
import Input from '@/components/Input/Input'
import InputTextArea from '@/components/InputTextArea/InputTextArea'
import Notification from '@/components/Notification/Notification'
import ReCAPTCHA from 'react-google-recaptcha'

const ContactForm = () => {
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
        message: 'Por favor, verifica que no eres un robot.',
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
        message:
          '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.',
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
        message: 'Ha ocurrido un error. Por favor, intenta nuevamente.',
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
            label='Nombre'
            value={formData.firstName}
            onChange={handleChange}
            autoComplete='given-name'
            required
          />
          <Input
            type='text'
            name='lastName'
            id='lastName'
            label='Apellido'
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
              label='Correo electrónico'
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
              label='Mensaje'
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
            aria-label='Enviar mensaje'
          >
            {submitting ? 'Enviando...' : 'Enviar'}
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
