'use client'

import Link from 'next/link'
import ToggleTheme from '@/components/ToggleTheme/ToggleTheme'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { NavMenu } from './NavMenu'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navigation = [
    { name: 'Acerca de mí', href: '/#about' },
    { name: 'Experiencia', href: '/#experience' },
    { name: 'Habilidades', href: '/#skills' },
    { name: 'Proyectos', href: '/#projects' },
    { name: 'Contacto', href: '/#contact' }
  ]

  const pathname = usePathname()

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY < 70 // True if scrolled more than 70px
      setScrolled(isScrolled)
    }

    // Check scroll position on mount
    handleScroll()

    // Correctly add event listener
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ease-in-out ${scrolled && pathname === '/' ? 'bg-transparent' : 'bg-white/90 shadow-lg dark:bg-slate-800/95 backdrop-blur-lg'}`}
    >
      <nav
        className='flex items-center justify-between px-6 py-6 container mx-auto'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link href='/#hero' className='-m-1.5 p-1.5'>
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
              className='inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-50/10 transition ease-in-out'
              onClick={toggleMenu}
            >
              <span className='sr-only'>Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon
                  className='text-slate-900 dark:text-white h-6 w-6'
                  aria-hidden='true'
                />
              ) : (
                <Bars3Icon
                  className='text-slate-900 dark:text-white h-6 w-6'
                  aria-hidden='true'
                />
              )}
            </button>
          </div>
        </div>
      </nav>
      {mobileMenuOpen && (
        <motion.div
          className='fixed inset-x-2 top-[5.25rem] bg-gray-100 dark:bg-slate-700 shadow-lg rounded-lg px-4 py-6 lg:hidden'
          id='menu'
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <NavMenu
            items={navigation}
            onClick={() => setMobileMenuOpen(false)}
          />
        </motion.div>
      )}
    </header>
  )
}

export default Navbar
