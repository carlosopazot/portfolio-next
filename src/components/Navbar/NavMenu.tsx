import { NavLink } from './NavLink'

interface NavMenuProps {
  items: {
    name: string
    href: string
  }[]
  hidden?: boolean
  onClick?: () => void
}

export const NavMenu: React.FC<NavMenuProps> = ({ items, hidden, onClick }) => {
  return (
    <nav className={`${hidden && 'hidden'} lg:flex lg:gap-x-12`}>
      {items.map((item) => (
        <NavLink key={item.name} item={item} onClick={onClick} />
      ))}
    </nav>
  )
}
