'use client'

import Link from 'next/link'

interface NavLinkProps {
  item: {
    name: string
    href: string
  }
  onClick?: () => void
}

export const NavLink: React.FC<NavLinkProps> = ({ item, onClick }) => {
  return (
    <Link
      onClick={onClick}
      key={item.name}
      href={item.href}
      className={`p-3 lg:p-0 text-md block rounded-lg lg:rounded-none font-semibold leading-6 text-gray-800/80 hover:text-gray-800 dark:text-white/80 hover:dark:text-white dark:active:text-white transition-all hover:bg-gray-800/10 lg:hover:bg-transparent dark:hover:bg-gray-50/10 dark:lg:hover:bg-transparent`}
      aria-label={item.name}
    >
      {item.name}
    </Link>
  )
}
