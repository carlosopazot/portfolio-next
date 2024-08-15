import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

export const categories = [
  {
    name: 'Laboral',
    icon: <BriefcaseIcon className='h-6 w-6' />,
    items: [
      {
        id: 1,
        title: 'Diseñador UI / Frontend',
        date: 'Mayo 2018 - Enero 2024',
        company: 'Jumpitt',
        description: [
          'Desarrollo de benchmarks y estado del arte.',
          'Definición de arquitectura de la información, mapas de navegación y wireflows.',
          'Diseño de wireframes y prototipos.',
          'Creación de sistemas de diseño y componentes.',
          'Definición de librerías de estilos y componentes específicos para proyectos.',
          'Configuración de proyectos y repositorios usando Git.',
          'Diseño y maquetación de mailings.',
          'Diseño y maquetación de sitios web usando herramientas no-code.'
        ]
      },
      {
        id: 2,
        title: 'Diseñador UX / UI',
        date: 'Mayo 2018 - Enero 2024',
        company: 'Tinet Soluciones',
        description: [
          'Desarrollo de investigación de usuario, user persona, benchmarks, test con usuarios, diseño de aplicaciones móvil.',
          'Diseño de interfaces para proyectos web y su posterior maquetación en HTML y CSS.'
        ]
      },
      {
        id: 3,
        title: 'Diseñador Web',
        date: 'Diciembre 2015 - Mayo 2016',
        company: 'Vanda Spa',
        description: [
          'Diseño de sitios web y aplicaciones móviles en distintos proyectos.',
          'Maquetación en HTML y CSS, haciendo posterior entrega a desarrolladores.'
        ]
      }
    ]
  },
  {
    name: 'Académica',
    icon: <AcademicCapIcon className='h-6 w-6' />,
    items: [
      {
        id: 1,
        title: 'Curso Desarrollo Web React JS',
        date: 'Julio 2024 - Enero 2024',
        company: 'Coderhouse',
        description: null
      },
      {
        id: 2,
        title: 'Diplomado Experiencia de Usuario',
        date: 'Junio 2020 - Diciembre 2020',
        company: 'Universidad Católica de Valparaíso',
        description: null
      },
      {
        id: 3,
        title: 'Diseño',
        date: '2008 - 2014',
        company: 'Universidad de Valparaíso',
        description: null
      }
    ]
  }
]
