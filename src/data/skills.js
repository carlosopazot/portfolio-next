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
    icon: DesktopOutlined,
    description:
      'I have experience designing user interfaces and user experiences for web and mobile applications.',
    items: [
      'Research',
      'Journey Maps',
      'Usability Testing',
      'User Flows',
      'Information Architecture',
      'Benchmarks',
      'User Persona'
    ]
  },
  {
    id: 2,
    title: 'UI',
    icon: LayoutOutlined,
    color: 'bg-purple-200',
    description:
      'I have experience designing user interfaces for web and mobile applications.',
    items: [
      'Wireframes',
      'Mockups',
      'Design Systems',
      'Style Guides',
      'Typography',
      'Color Theory',
      'Grid Systems',
      'Responsive Design'
    ]
  },
  {
    id: 3,
    title: 'Frontend',
    icon: CodeOutlined,
    color: 'bg-indigo-200',
    description:
      'I have experience developing frontend applications for web and mobile.',
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
