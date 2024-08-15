import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Inicio | Carlos Opazo',
  description: 'Diseñador UX/UI && Frontend.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/icon-dark.png',
        href: '/images/icon-dark.png'
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/icon.png',
        href: '/images/icon.png'
      }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='es' className='scroll-smooth bg-white'>
      <body className={`${dmSans.className} bg-white dark:bg-slate-800`}>
        <Navbar />
        <main className='relative snap-y'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
