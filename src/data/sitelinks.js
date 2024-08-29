import {
  LinkedinFilled,
  BehanceOutlined,
  GithubOutlined,
  GitlabOutlined,
  PhoneOutlined,
  MailOutlined
} from '@ant-design/icons'

export const navigation = [
  { name: 'Acerca de mí', href: '/#about' },
  { name: 'Experiencia', href: '/#experience' },
  { name: 'Habilidades', href: '/#skills' },
  { name: 'Proyectos', href: '/#projects' },
  { name: 'Contacto', href: '/#contact' }
]

export const socialLinks = [
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

export const contactLinks = [
  {
    icon: PhoneOutlined,
    text: '+569 73392820',
    link: 'https://wa.me/+56973392820'
  },
  {
    icon: MailOutlined,
    text: 'carlos.opazo.t@gmail.com',
    link: 'mailto:carlos.opazo.t@gmail.com'
  }
]
