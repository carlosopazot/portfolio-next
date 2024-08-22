import EmailTemplate from '@/components/EmailTemplate/EmailTemplate'
import { Resend } from 'resend'
import { verifyRecaptcha } from '@/utils/verifyRecaptcha'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message, recaptchaToken } =
      await request.json()

    const verificationData = await verifyRecaptcha(recaptchaToken)

    if (!verificationData.success) {
      return new Response(
        JSON.stringify({ error: 'reCAPTCHA verification failed' }),
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: `${firstName} ${lastName} <${process.env.FROM_EMAIL}>`,
      to: process.env.SUPPORT_EMAIL || '',
      subject: 'Mensaje desde mi sitio web',
      react: EmailTemplate({ firstName, lastName, message, email })
    })
    if (error) {
      return Response.json({ error }, { status: 500 })
    }
    return Response.json({ data })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
