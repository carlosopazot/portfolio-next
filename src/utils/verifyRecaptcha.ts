export async function verifyRecaptcha(token: string) {
  const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `secret=${secretKey}&response=${token}`
    }
  )
  return response.json()
}
