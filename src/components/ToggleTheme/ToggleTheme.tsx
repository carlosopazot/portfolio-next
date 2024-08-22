import { useState, useEffect } from 'react'
import { Button } from '@headlessui/react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

const ToggleTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        setTheme(savedTheme as 'light' | 'dark')
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark')
      }
      setMounted(true)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [theme])

  const toggle = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newTheme)
      }
      return newTheme
    })
  }

  if (!mounted) {
    return null
  }

  return (
    <Button
      onClick={toggle}
      className='inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-gray-800 dark:text-white focus:outline-none data-[hover]:bg-gray-200 dark:data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 transition ease-in-out'
    >
      {theme === 'light' ? (
        <MoonIcon className='h-5 w-5' />
      ) : (
        <SunIcon className='h-5 w-5' />
      )}
    </Button>
  )
}

export default ToggleTheme
