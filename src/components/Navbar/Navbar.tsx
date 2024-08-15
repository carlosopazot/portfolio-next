'use client'

import Link from 'next/link'
import ToggleTheme from '@/components/ToggleTheme/ToggleTheme'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import { NavMenu } from './NavMenu'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navigation = [
    { name: 'Acerca de', href: '/#about' },
    { name: 'Experiencia', href: '/#experience' },
    { name: 'Habilidades', href: '/#skills' },
    { name: 'Proyectos', href: '/#projects' },
    { name: 'Contacto', href: '/#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY < 80
      if (offset !== scrolled) {
        setScrolled(offset)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
      console.log('remove')
    }
  }, [scrolled])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ease-in-out ${scrolled ? 'bg-transparent' : 'backdrop-blur-lg bg-white/10'}`}
    >
      <nav
        className='flex items-center justify-between px-6 py-4 container mx-auto'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Carlos Opazo</span>
            <h4 className=' text-2xl text-gray-800 dark:text-white font-semibold'>
              copazo.
            </h4>
          </Link>
        </div>
        <NavMenu items={navigation} hidden={true} />
        <div className='flex lg:flex-1 justify-end gap-2'>
          <ToggleTheme />
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-200 transition ease-in-out'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon
                className='text-slate-900 dark:text-white h-6 w-6'
                aria-hidden='true'
              />
            </button>
          </div>
        </div>
      </nav>
      <Sidebar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      >
        <NavMenu items={navigation} onClick={() => setMobileMenuOpen(false)} />
      </Sidebar>
    </header>
  )
}

export default Navbar
