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
    delay: 0.5,
    description: {
      es: 'Creo experiencias centradas en las necesidades de los usuarios',
      en: 'I create experiences centered on user needs'
    },
    items: [
      { es: 'Research', en: 'Research' },
      { es: 'Journey Maps', en: 'Journey Maps' },
      { es: 'Test de usabilidad', en: 'Usability Testing' },
      { es: 'User Flows', en: 'User Flows' },
      {
        es: 'Arquitectura de la información',
        en: 'Information Architecture'
      },
      { es: 'Benchmarks', en: 'Benchmarks' },
      { es: 'User Persona', en: 'User Persona' }
    ]
  },
  {
    id: 2,
    title: 'UI',
    icon: <LayoutOutlined className='text-3xl text-gray-800' />,
    delay: 0.75,
    color: 'bg-purple-200',
    description: {
      es: 'Diseño interfaces atractivas y funcionales para aplicaciones web y móviles.',
      en: 'I design attractive and functional interfaces for web and mobile applications.'
    },
    items: [
      { es: 'Wireframes', en: 'Wireframes' },
      { es: 'Mockups', en: 'Mockups' },
      { es: 'Prototipado', en: 'Prototyping' },
      { es: 'Sistemas de diseño', en: 'Design Systems' },
      { es: 'Style Guides', en: 'Style Guides' },
      { es: 'Diseño responsivo', en: 'Responsive Design' }
    ]
  },
  {
    id: 3,
    title: 'Frontend',
    icon: <CodeOutlined className='text-3xl text-gray-800' />,
    delay: 1,
    color: 'bg-indigo-200',
    description: {
      es: 'Traduzco mis diseños al código, utilizando tecnologías web modernas.',
      en: 'I translate my designs into code, using modern web technologies.'
    },
    items: [
      { es: 'HTML', en: 'HTML' },
      { es: 'CSS', en: 'CSS' },
      { es: 'JavaScript', en: 'JavaScript' },
      { es: 'React', en: 'React' },
      { es: 'Vue', en: 'Vue' },
      { es: 'Bootstrap', en: 'Bootstrap' },
      { es: 'TailwindCSS', en: 'TailwindCSS' },
      { es: 'Styled Components', en: 'Styled Components' },
      { es: 'SASS', en: 'SASS' },
      { es: 'LESS', en: 'LESS' }
    ]
  }
]
