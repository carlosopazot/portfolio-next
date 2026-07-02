import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

export const categories = [
  {
    name: { es: 'Laboral', en: 'Professional' },
    icon: <BriefcaseIcon className='h-6 w-6' />,
    items: [
      {
        id: 1,
        title: { es: 'Diseñador UI / Frontend', en: 'UI Designer / Frontend' },
        date: { es: 'Mayo 2018 - Enero 2024', en: 'May 2018 - January 2024' },
        company: 'Jumpitt',
        description: [
          {
            es: 'Desarrollo de benchmarks y estado del arte.',
            en: 'Development of benchmarks and state of the art analysis.'
          },
          {
            es: 'Definición de arquitectura de la información, mapas de navegación y wireflows.',
            en: 'Definition of information architecture, navigation maps and wireflows.'
          },
          {
            es: 'Diseño de wireframes y prototipos.',
            en: 'Design of wireframes and prototypes.'
          },
          {
            es: 'Creación de sistemas de diseño y componentes.',
            en: 'Creation of design systems and components.'
          },
          {
            es: 'Definición de librerías de estilos y componentes específicos para proyectos.',
            en: 'Definition of style libraries and project-specific components.'
          },
          {
            es: 'Configuración de proyectos y repositorios usando Git.',
            en: 'Configuration of projects and repositories using Git.'
          },
          {
            es: 'Diseño y maquetación de mailings.',
            en: 'Design and layout of email templates.'
          },
          {
            es: 'Diseño y maquetación de sitios web usando herramientas no-code.',
            en: 'Design and layout of websites using no-code tools.'
          }
        ]
      },
      {
        id: 2,
        title: { es: 'Diseñador UX / UI', en: 'UX / UI Designer' },
        date: { es: 'Junio 2016 - Abril 2018', en: 'June 2016 - April 2018' },
        company: 'Tinet Soluciones',
        description: [
          {
            es: 'Desarrollo de investigación de usuario, user persona, benchmarks, test con usuarios, diseño de aplicaciones móvil.',
            en: 'Development of user research, user personas, benchmarks, user testing and mobile application design.'
          },
          {
            es: 'Diseño de interfaces para proyectos web y su posterior maquetación en HTML y CSS.',
            en: 'Interface design for web projects and its subsequent layout in HTML and CSS.'
          }
        ]
      },
      {
        id: 3,
        title: { es: 'Diseñador Web', en: 'Web Designer' },
        date: {
          es: 'Diciembre 2015 - Mayo 2016',
          en: 'December 2015 - May 2016'
        },
        company: 'Vanda Spa',
        description: [
          {
            es: 'Diseño de sitios web y aplicaciones móviles en distintos proyectos.',
            en: 'Design of websites and mobile applications across different projects.'
          },
          {
            es: 'Maquetación en HTML y CSS, haciendo posterior entrega a desarrolladores.',
            en: 'Layout in HTML and CSS, with subsequent handoff to developers.'
          }
        ]
      }
    ]
  },
  {
    name: { es: 'Académica', en: 'Academic' },
    icon: <AcademicCapIcon className='h-6 w-6' />,
    items: [
      {
        id: 1,
        title: {
          es: 'Curso Desarrollo Web React JS',
          en: 'React JS Web Development Course'
        },
        date: { es: 'Julio 2024 - Enero 2024', en: 'July 2024 - January 2024' },
        company: 'Coderhouse',
        description: null
      },
      {
        id: 2,
        title: {
          es: 'Diplomado Experiencia de Usuario',
          en: 'Diploma in User Experience'
        },
        date: {
          es: 'Junio 2020 - Diciembre 2020',
          en: 'June 2020 - December 2020'
        },
        company: 'Universidad Católica de Valparaíso',
        description: null
      },
      {
        id: 3,
        title: { es: 'Diseño', en: 'Design' },
        date: { es: '2008 - 2014', en: '2008 - 2014' },
        company: 'Universidad de Valparaíso',
        description: null
      }
    ]
  }
]
