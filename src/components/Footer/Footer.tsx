import Link from 'next/link'
import { socialLinks, contactLinks } from '@/data/sitelinks'

const Footer = () => {
  return (
    <footer className='bg-gray-100 dark:bg-slate-900 text-white py-8'>
      <div className='container mx-auto mt-auto px-6'>
        <div className='grid grid-cols-4 gap-6'>
          <div className='col-span-4 sm:col-span-2'>
            <p className='text-2xl font-semibold text-slate-600 dark:text-white mb-4'>
              copazo.
            </p>
            <div className='flex flex-wrap gap-4 sm:gap-2 lg:gap-4'>
              {contactLinks.map((item) => (
                <Link
                  key={item.text}
                  href={item.link}
                  target='_blank'
                  className='flex gap-1 text-sm items-center text-gray-800/80 hover:text-gray-800 dark:text-white/80 hover:dark:text-white/100 transition ease-in-out'
                  rel='noopener noreferrer'
                >
                  <item.icon className='w-4 h-4' />
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
          <div className='flex gap-3 justify-start sm:justify-end col-span-4 sm:col-span-2 items-center'>
            {socialLinks.map((link) => (
              <Link
                target='_blank'
                key={link.href}
                href={link.href}
                className='flex justify-center items-center rounded-full bg-gray-400 dark:bg-white/10 w-10 h-10 hover:bg-gray-300 transition ease-in-out'
              >
                <link.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
