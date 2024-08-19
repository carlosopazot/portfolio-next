import IpropCover from '@/images/covers/cover-iprop.png'
import MaestranzaCover from '@/images/covers/cover-maestranza.png'
import MettriCover from '@/images/covers/cover-mettri.png'
import WomCover from '@/images/covers/cover-wom.png'
import SalfaCover from '@/images/covers/cover-salfa.png'
import RiiviCover from '@/images/covers/cover-riivi.png'
import HcvmCover from '@/images/covers/cover-hcvm.png'
import SurviCover from '@/images/covers/cover-survi.png'
import Placeholder from '@/images/placeholder.png'

import Wom1 from '@/images/projects/wom/img_1.png'
import Wom2 from '@/images/projects/wom/img_2.png'
import Wom3 from '@/images/projects/wom/img_3.png'
import Wom4 from '@/images/projects/wom/img_4.png'

import Salfa1 from '@/images/projects/salfa/sf_1.png'
import Salfa2 from '@/images/projects/salfa/sf_2.png'
import Salfa3 from '@/images/projects/salfa/sf_3.png'
import Salfa4 from '@/images/projects/salfa/sf_4.png'

import Survi1 from '@/images/projects/survi/survi_1.png'
import Survi2 from '@/images/projects/survi/survi_2.png'

import MettriNav from '@/images/projects/mettri/navigation.png'
import MettriBrand from '@/images/projects/mettri/brand.png'
import MettriColors from '@/images/projects/mettri/colors.png'
import MettriTypography from '@/images/projects/mettri/typos.png'
import Mettri1 from '@/images/projects/mettri/mettri_1.png'
import Mettri2 from '@/images/projects/mettri/mettri_2.png'
import Mettri3 from '@/images/projects/mettri/mettri_3.png'

import Md1 from '@/images/projects/maestranza/md_1.png'
import Md2 from '@/images/projects/maestranza/md_2.png'
import Md3 from '@/images/projects/maestranza/md_3.png'
import Md4 from '@/images/projects/maestranza/md_4.png'

import Riivi1 from '@/images/projects/riivi/riivi_1.png'
import Riivi2 from '@/images/projects/riivi/riivi_2.png'
import Riivi3 from '@/images/projects/riivi/riivi_3.png'
import Riivi4 from '@/images/projects/riivi/riivi_4.png'
import Riivi5 from '@/images/projects/riivi/riivi_5.png'
import Riivi6 from '@/images/projects/riivi/riivi_6.png'
import Riivi7 from '@/images/projects/riivi/riivi_7.png'

export const projects = [
  {
    id: 'wom',
    title: 'Wom',
    description: 'This is a Wom project description.',
    cover: WomCover,
    bgHeaderColor: '#5A2E90',
    tags: ['UX', 'UI'],
    delay: 0.25,
    sections: [
      {
        id: 'intro',
        title: 'Introducción',
        intro:
          'Wom es una plataforma de gestión de proyectos que permite a los usuarios administrar y publicar proyectos de forma rápida y sencilla.'
      },
      {
        id: 'ux',
        title: 'Experiencia de usuario',
        intro:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        images: [Wom1]
      },
      {
        id: 'ui',
        title: 'Diseño de interfaz',
        intro:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        images: [Wom2, Wom3, Wom4]
      }
    ]
  },
  {
    id: 'salfa',
    title: 'Salfa Rent',
    description: 'Plataforma de arriendo de vehículos.',
    cover: SalfaCover,
    bgHeaderColor: '#012D55',
    tags: ['UI', 'Frontend'],
    delay: 0.5,
    sections: [
      {
        id: 'intro',
        title: 'Introducción',
        intro:
          'Salfa Rent es una plataforma de arriendo de vehículos que permite a los usuarios arrendar vehículos de forma rápida y sencilla. El proyecto consistió en el rediseño de la interfaz de usuario y la maquetación de las vistas en HTML y CSS.'
      },
      {
        id: 'ui',
        title: 'Interfaz de usuario',
        intro:
          'Salfa Rent es una plataforma de arriendo de vehículos que permite a los usuarios arrendar vehículos de forma rápida y sencilla.',
        images: [Salfa1, Salfa2, Salfa3, Salfa4]
      }
    ]
  },
  {
    id: 'survi',
    title: 'Survi',
    description: 'Plataforma para creación de encuestas.',
    cover: SurviCover,
    bgHeaderColor: '#0000B7',
    tags: ['UI'],
    delay: 0.75,
    sections: [
      {
        id: 'intro',
        title: 'Introducción',
        intro:
          'Survi es una plataforma para la creación de encuestas que permite a los usuarios crear, compartir y analizar encuestas de forma rápida y sencilla. El proyecto consistió en el rediseño de la interfaz de usuario y la maquetación de las vistas en HTML y CSS.'
      },
      {
        id: 'ui',
        title: 'Interfaz de usuario',
        intro:
          'Survi es una plataforma para la creación de encuestas que permite a los usuarios crear, compartir y analizar encuestas de forma rápida y sencilla.',
        images: [Survi1, Survi2]
      }
    ]
  },
  {
    id: 'mettri',
    title: 'Mettri',
    description: 'Plataforma para la gestión de clima laboral.',
    cover: MettriCover,
    bgHeaderColor: '#3457D8',
    tags: ['UX', 'UI'],
    delay: 1,
    sections: [
      {
        id: 'intro',
        title: 'Introducción',
        intro:
          'Mettri es una plataforma para la gestión de clima laboral que permite a los usuarios evaluar, analizar y mejorar el clima laboral de sus organizaciones. '
      },
      {
        id: 'ux',
        title: 'Arquitectura del sitio',
        intro:
          'Mettri es una plataforma para la gestión de clima laboral que permite a los usuarios evaluar, analizar y mejorar el clima laboral de sus organizaciones.',
        images: [MettriNav]
      },
      {
        id: 'branding',
        title: 'Branding',
        intro:
          'Mettri es una plataforma para la gestión de clima laboral que permite a los usuarios evaluar, analizar y mejorar el clima laboral de sus organizaciones.',
        images: [MettriBrand, MettriColors, MettriTypography]
      },
      {
        id: 'ui',
        title: 'Interfaz de usuario',
        intro:
          'Mettri es una plataforma para la gestión de clima laboral que permite a los usuarios evaluar, analizar y mejorar el clima laboral de sus organizaciones.',
        images: [Mettri1, Mettri2, Mettri3]
      }
    ]
  },
  {
    id: 'maestranza',
    title: 'Maestranza Diesel',
    description: 'Plataforma para control de horarios de operarios.',
    cover: MaestranzaCover,
    bgHeaderColor: '#1E3C8D',
    tags: ['UI', 'Frontend'],
    delay: 1.25,
    sections: [
      {
        id: 'intro',
        title: 'Introducción',
        intro:
          'Maestranza Diesel es una empresa de servicios de transporte y logística que ofrece soluciones de transporte a nivel nacional.'
      },
      {
        id: 'ui',
        title: 'Interfaz de usuario',
        intro:
          'Maestranza Diesel es una empresa de servicios de transporte y logística que ofrece soluciones de transporte a nivel nacional.',
        images: [Md1, Md2, Md3, Md4]
      }
    ]
  },
  {
    id: 'riivi',
    title: 'Riivi',
    description: 'Plataforma de streaming de contenido latinoamericano.',
    cover: RiiviCover,
    bgHeaderColor: '#28015B',
    tags: ['Frontend'],
    delay: 1.5,
    sections: [
      {
        id: 'intro',
        title: 'Introducción',
        intro:
          'Riivi es una plataforma de streaming de contenido latinoamericano que permite a los usuarios ver contenido en tiempo real.'
      },
      {
        id: 'front',
        title: 'Frontend',
        intro:
          'Mi trabajo consistio en el desarrollo del frontend de la plataforma, plasmando los diseños de la interfaz de usuario en código HTML, CSS y JavaScript.',
        images: [Riivi1, Riivi2, Riivi3, Riivi4, Riivi5, Riivi6, Riivi7]
      }
    ]
  }
]

// export const projects = [
//   {
//     id: 1,
//     title: 'iProp',
//     description: 'This is a iProp project description.',
//     cover: IpropCover,
//     bgHeaderColor: '#1B5E4F',
//     tags: ['UX', 'UI', 'Frontend'],
//     introduction: [
//       {
//         id: 'intro',
//         title: 'Introducción',
//         intro:
//           'iProp es una plataforma de gestión inmobiliaria que permite a los usuarios administrar y publicar propiedades de forma rápida y sencilla.'
//       }
//     ],
//     ux: [
//       {
//         id: 'ux',
//         title: 'Experiencia de usuario',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ],
//     branding: [
//       {
//         id: 'branding',
//         title: 'Branding',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ],
//     ui: [
//       {
//         id: 'ui',
//         title: 'Interfaz de usuario',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ],
//     frontend: [
//       {
//         id: 'frontend',
//         title: 'Frontend',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ]
//   },
//   {
//     id: 2,
//     title: 'Maestranza Diesel',
//     description: 'This is a Maestranza Diesel project description.',
//     cover: MaestranzaCover,
//     bgHeaderColor: '#1E3C8D',
//     tags: ['UI', 'Frontend'],
//     introduction: [
//       {
//         id: 'intro',
//         title: 'Introducción',
//         intro:
//           'Maestranza Diesel es una empresa de servicios de transporte y logística que ofrece soluciones de transporte a nivel nacional.'
//       }
//     ],
//     ux: [
//       {
//         id: 'ux',
//         title: 'Experiencia de usuario',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ],
//     branding: [
//       {
//         id: 'branding',
//         title: 'Branding',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ],
//     ui: [
//       {
//         id: 'ui',
//         title: 'Interfaz de usuario',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ],
//     frontend: [
//       {
//         id: 'frontend',
//         title: 'Frontend',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ]
//   },
//   {
//     id: 3,
//     title: 'Mettri',
//     description: 'This is a Mettri project description.',
//     cover: MettriCover,
//     bgHeaderColor: '#3457D8',
//     tags: ['UX', 'UI'],
//     introduction: [
//       {
//         id: 'intro',
//         title: 'Introducción',
//         intro:
//           'Mettri es una plataforma de gestión de proyectos que permite a los usuarios administrar y publicar proyectos de forma rápida y sencilla.'
//       }
//     ],
//     ux: [
//       {
//         id: 'ux',
//         title: 'Experiencia de usuario',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ],
//     branding: [
//       {
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ],
//     ui: [
//       {
//         id: 'ui',
//         title: 'Interfaz de usuario',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ],
//     frontend: [
//       {
//         id: 'frontend',
//         title: 'Frontend',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ]
//   },
//   {
//     id: 4,
//     title: 'Wom',
//     description: 'This is a project description.',
//     cover: WomCover,
//     bgHeaderColor: '#5A2E90',
//     tags: ['UX', 'UI'],
//     introduction: [
//       {
//         id: 'intro',
//         title: 'Introducción',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
//       }
//     ],
//     ux: [
//       {
//         id: 'ux',
//         title: 'UX',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         images: [Wom1]
//       }
//     ],
//     ui: [
//       {
//         id: 'ui',
//         title: 'UI',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         images: [
//           Wom2,
//           Wom3,
//           Wom4
//         ]
//       }
//     ],
//   },
//   {
//     id: 5,
//     title: 'Salfa Rent',
//     description: 'This is a Salfa Rent project description.',
//     cover: SalfaCover,
//     bgHeaderColor: '#012D55',
//     tags: ['UX', 'UI', 'Frontend'],
//     introduction: [
//       {
//         id: 'intro',
//         title: 'Introducción',
//         intro:
//           'Salfa Rent es una plataforma de arriendo de vehículos que permite a los usuarios arrendar vehículos de forma rápida y sencilla.'
//       }
//     ],
//     ux: [
//       {
//         id: 'ux',
//         title: 'Experiencia de usuario',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ],
//     branding: [
//       {
//         id: 'branding',
//         title: 'Branding',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ],
//     ui: [
//       {
//         id: 'ui',
//         title: 'Interfaz de usuario',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ],
//     frontend: [
//       {
//         id: 'frontend',
//         title: 'Frontend',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ]
//   },
//   {
//     id: 6,
//     title: 'Riivi',
//     description: 'This is a project description.',
//     cover: RiiviCover,
//     bgHeaderColor: '#28015B',
//     tags: ['Frontend'],
//     introduction: [
//       {
//         id: 'intro',
//         title: 'Introducción',
//         intro:
//           'Riivi es una plataforma de gestión de proyectos que permite a los usuarios administrar y publicar proyectos de forma rápida y sencilla.'
//       }
//     ],
//     ux: [
//       {
//         id: 'ux',
//         title: 'Experiencia de usuario',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ],
//     branding: [
//       {
//         id: 'branding',
//         title: 'Branding',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ],
//     ui: [
//       {
//         id: 'ui',
//         title: 'Interfaz de usuario',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ],
//     frontend: [
//       {
//         id: 'frontend',
//         title: 'Frontend',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ]
//   },
//   {
//     id: 7,
//     title: 'Hospital Clínico',
//     description: 'This is a project description.',
//     cover: HcvmCover,
//     bgHeaderColor: '#005DF8',
//     tags: ['Frontend'],
//     introduction: [
//       {
//         id: 'intro',
//         title: 'Introducción',
//         intro:
//           'Hospital Clínico es una plataforma de gestión de proyectos que permite a los usuarios administrar y publicar proyectos de forma rápida y sencilla.'
//       }
//     ],
//     ux: [
//       {
//         id: 'ux',
//         title: 'Experiencia de usuario',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ],
//     branding: [
//       {
//         id: 'branding',
//         title: 'Branding',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ],
//     ui: [
//       {
//         id: 'ui',
//         title: 'Interfaz de usuario',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ],
//     frontend: [
//       {
//         id: 'frontend',
//         title: 'Frontend',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ]
//   },
//   {
//     id: 8,
//     title: 'Survi',
//     description: 'This is a project description.',
//     cover: SurviCover,
//     bgHeaderColor: '#1B5E4F',
//     tags: ['UX', 'UI'],
//     introduction: [
//       {
//         id: 'intro',
//         title: 'Introducción',
//         intro:
//           'Survi es una plataforma de gestión de proyectos que permite a los usuarios administrar y publicar proyectos de forma rápida y sencilla.'
//       }
//     ],
//     ux: [
//       {
//         id: 'ux',
//         title: 'Experiencia de usuario',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ],
//     branding: [
//       {
//         id: 'branding',
//         title: 'Branding',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ],
//     ui: [
//       {
//         id: 'ui',
//         title: 'Interfaz de usuario',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ],
//     frontend: [
//       {
//         id: 'frontend',
//         title: 'Frontend',
//         intro:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         content: Placeholder
//       }
//     ]
//   }
// ]
