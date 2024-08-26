import { Button } from '@headlessui/react'
import {
  LinkedinFilled,
  BehanceOutlined,
  GithubOutlined,
  GitlabOutlined
} from '@ant-design/icons'
import Link from 'next/link'

const socialLinks = [
  {
    icon: LinkedinFilled,
    href: 'https://www.linkedin.com/in/carlosopazo'
  },
  {
    icon: BehanceOutlined,
    href: 'https://www.behance.net/carlosopazo'
  },
  {
    icon: GithubOutlined,
    href: 'https://github.com/carlosopazot'
  },
  {
    icon: GitlabOutlined,
    href: 'https://gitlab.com/copazo'
  }
]

const Footer = () => {
  return (
    <footer className='bg-gray-100 dark:bg-slate-900 text-white py-8'>
      <div className='container mx-auto mt-auto px-6'>
        <div className='grid grid-cols-3'>
          <div className='col-span-1'>
            <p className='text-2xl font-semibold text-slate-600 dark:text-white'>
              copazo.
            </p>
          </div>
          <div className='flex gap-3 justify-end col-span-2'>
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
