import {
  DesktopOutlined,
  LayoutOutlined,
  CodeOutlined
} from '@ant-design/icons'

export const skills = [
  {
    id: 1,
    title: 'UX',
    color: 'bg-pink-200',
    icon: <DesktopOutlined className='text-3xl text-gray-800' />,
    description:
      'Creo experiencias centradas en las necesidades de los usuarios',
    items: [
      'Research',
      'Journey Maps',
      'Test de usabilidad',
      'User Flows',
      'Arquitectura de la información',
      'Benchmarks',
      'User Persona'
    ]
  },
  {
    id: 2,
    title: 'UI',
    icon: <LayoutOutlined className='text-3xl text-gray-800' />,
    color: 'bg-purple-200',
    description:
      'Diseño interfaces atractivas y funcionales para aplicaciones web y móviles.',
    items: [
      'Wireframes',
      'Mockups',
      'Prototipado',
      'Sistemas de diseño',
      'Style Guides',
      'Diseño responsivo'
    ]
  },
  {
    id: 3,
    title: 'Frontend',
    icon: <CodeOutlined className='text-3xl text-gray-800' />,
    color: 'bg-indigo-200',
    description:
      'Desarrollo interfaces de usuario con tecnologías web modernas.',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Vue',
      'Bootstrap',
      'TailwindCSS',
      'Styled Components',
      'SASS',
      'LESS'
    ]
  }
]
