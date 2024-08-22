/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'tailwindui.com',
      'flowbite.com',
      'flowbite.s3.amazonaws.com',
      'placehold.co'
    ]
  },
  env: {
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    SUPPORT_EMAIL: process.env.SUPPORT_EMAIL,
    FROM_EMAIL: process.env.FROM_EMAIL
  }
}

export default nextConfig
