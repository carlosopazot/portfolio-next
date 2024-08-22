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
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY
  }
}

export default nextConfig
