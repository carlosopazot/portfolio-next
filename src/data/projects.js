import IpropCover from '@/images/covers/cover-iprop.png'
import MaestranzaCover from '@/images/covers/cover-maestranza.png'
import MettriCover from '@/images/covers/cover-mettri.png'
import WomCover from '@/images/covers/cover-wom.png'
import SalfaCover from '@/images/covers/cover-salfa.png'
import RiiviCover from '@/images/covers/cover-riivi.png'
import HcvmCover from '@/images/covers/cover-hcvm.png'
import SurviCover from '@/images/covers/cover-survi.png'

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
    description: {
      es: 'Diseño de aplicación móvil.',
      en: 'Mobile application design.'
    },
    cover: WomCover,
    bgHeaderColor: '#5A2E90',
    tags: ['UX', 'UI'],
    delay: 0.25,
    sections: [
      {
        id: 'intro',
        title: { es: 'Introducción', en: 'Introduction' },
        intro: {
          es: 'Wom es una plataforma de telecomunicaciones que ofrece servicios de telefonía móvil, internet y televisión. Para este proyecto tuve que desarrollar el diseño de interfaz para la primera versión de la aplicación móvil.',
          en: 'Wom is a telecommunications platform that offers mobile phone, internet and television services. For this project I had to develop the interface design for the first version of the mobile application.'
        }
      },
      {
        id: 'ui',
        title: { es: 'Diseño de interfaz', en: 'Interface design' },
        intro: {
          es: 'El proyecto consistió en el diseño de la interfaz de usuario de la aplicación móvil, siguiendo las directrices de diseño y la identidad visual de la marca. Para esto se realizaron procesos de investigación con usuarios y se desarrollaron prototipos de alta fidelidad que permitieron visualizar cómo se vería la aplicación en su versión final.',
          en: 'The project consisted of designing the user interface of the mobile application, following the design guidelines and visual identity of the brand. For this, user research processes were carried out and high-fidelity prototypes were developed that allowed visualizing how the application would look in its final version.'
        },
        images: [Wom1, Wom2, Wom3, Wom4]
      }
    ]
  },
  {
    id: 'salfa',
    title: 'Salfa Rent',
    description: {
      es: 'Plataforma de arriendo de vehículos.',
      en: 'Vehicle rental platform.'
    },
    cover: SalfaCover,
    bgHeaderColor: '#012D55',
    tags: ['UI', 'Frontend'],
    delay: 0.5,
    sections: [
      {
        id: 'intro',
        title: { es: 'Introducción', en: 'Introduction' },
        intro: {
          es: 'Salfa Rent es una plataforma de arriendo de vehículos que permite a los usuarios arrendar vehículos de forma rápida y sencilla.',
          en: 'Salfa Rent is a vehicle rental platform that allows users to rent vehicles quickly and easily.'
        }
      },
      {
        id: 'ui',
        title: { es: 'Interfaz de usuario', en: 'User interface' },
        intro: {
          es: 'El proyecto consistió en el rediseño de la interfaz de usuario de la plataforma, así como también viaje del usuario a través de la misma con el objetivo de mejorar la experiencia de arrendar un vehículo. Luego se realizó el desarrollo de la aplicación usando React.js y Tailwind CSS.',
          en: 'The project consisted of redesigning the platform user interface, as well as the user journey through it, with the goal of improving the experience of renting a vehicle. The application was then developed using React.js and Tailwind CSS.'
        },
        images: [Salfa1, Salfa2, Salfa3, Salfa4]
      }
    ]
  },
  {
    id: 'survi',
    title: 'Survi',
    description: {
      es: 'Plataforma para creación de encuestas.',
      en: 'Survey creation platform.'
    },
    cover: SurviCover,
    bgHeaderColor: '#0000B7',
    tags: ['UI'],
    delay: 0.75,
    sections: [
      {
        id: 'intro',
        title: { es: 'Introducción', en: 'Introduction' },
        intro: {
          es: 'Survi es una plataforma para la creación de encuestas que permite a los usuarios crear, compartir y analizar encuestas de forma rápida y sencilla.',
          en: 'Survi is a survey creation platform that allows users to create, share and analyze surveys quickly and easily.'
        }
      },
      {
        id: 'ui',
        title: { es: 'Interfaz de usuario', en: 'User interface' },
        intro: {
          es: 'El proyecto consistió en desarrollar los componentes y vistas de la plataforma, siguiendo las directrices de diseño y la identidad visual de la marca. Luego se realizó el desarrollo de la aplicación usando React.js y Bootstrap.',
          en: 'The project consisted of developing the components and views of the platform, following the design guidelines and visual identity of the brand. The application was then developed using React.js and Bootstrap.'
        },
        images: [Survi1, Survi2]
      }
    ]
  },
  {
    id: 'mettri',
    title: 'Mettri',
    description: {
      es: 'Plataforma para la gestión de clima laboral.',
      en: 'Workplace climate management platform.'
    },
    cover: MettriCover,
    bgHeaderColor: '#3457D8',
    tags: ['UX', 'UI'],
    delay: 1,
    sections: [
      {
        id: 'intro',
        title: { es: 'Introducción', en: 'Introduction' },
        intro: {
          es: 'Mettri es una plataforma para la gestión de clima laboral que permite a los usuarios evaluar, analizar y mejorar el clima laboral de sus organizaciones. ',
          en: 'Mettri is a workplace climate management platform that allows users to evaluate, analyze and improve the workplace climate of their organizations.'
        }
      },
      {
        id: 'ux',
        title: { es: 'Arquitectura del sitio', en: 'Site architecture' },
        intro: {
          es: 'Primero se realizó un análisis de la arquitectura del sitio para definir la estructura de la información y la navegación del sitio, lo que permitió definir los flujos de usuario y la jerarquía de la información.',
          en: 'First, an analysis of the site architecture was carried out to define the information structure and site navigation, which allowed defining the user flows and information hierarchy.'
        },
        images: [MettriNav]
      },
      {
        id: 'branding',
        title: { es: 'Branding', en: 'Branding' },
        intro: {
          es: 'Luego se realizó el diseño de la identidad visual de la marca, definiendo la paleta de colores, tipografía y elementos gráficos que representan la marca.',
          en: 'Then the visual identity of the brand was designed, defining the color palette, typography and graphic elements that represent the brand.'
        },
        images: [MettriBrand, MettriColors, MettriTypography]
      },
      {
        id: 'ui',
        title: { es: 'Interfaz de usuario', en: 'User interface' },
        intro: {
          es: 'Finalmente se realizó el diseño de la interfaz de usuario, desarrollando prototipos de alta fidelidad que permitieron visualizar cómo se vería la plataforma en su versión final.',
          en: 'Finally, the user interface was designed, developing high-fidelity prototypes that allowed visualizing how the platform would look in its final version.'
        },
        images: [Mettri1, Mettri2, Mettri3]
      }
    ]
  },
  {
    id: 'maestranza',
    title: 'Maestranza Diesel',
    description: {
      es: 'Plataforma para control de horarios de operarios.',
      en: 'Platform for operator schedule control.'
    },
    cover: MaestranzaCover,
    bgHeaderColor: '#1E3C8D',
    tags: ['UI', 'Frontend'],
    delay: 1.25,
    sections: [
      {
        id: 'intro',
        title: { es: 'Introducción', en: 'Introduction' },
        intro: {
          es: 'Maestranza Diesel es una empresa de servicios de transporte y logística que ofrece soluciones de transporte a nivel nacional.',
          en: 'Maestranza Diesel is a transport and logistics services company that offers transportation solutions nationwide.'
        }
      },
      {
        id: 'ui',
        title: { es: 'Interfaz de usuario', en: 'User interface' },
        intro: {
          es: 'Para este proyecto se realizó el diseño de la interfaz de usuario y posterior desarrollo de la aplicación usando Vue.js y Bootstrap. El sistema permite a los operarios registrar sus horas de trabajo y a los supervisores llevar un control de los horarios de los operarios.',
          en: 'For this project, the user interface was designed and the application was subsequently developed using Vue.js and Bootstrap. The system allows operators to record their work hours and supervisors to keep track of operators schedules.'
        },
        images: [Md1, Md2, Md3, Md4]
      }
    ]
  },
  {
    id: 'riivi',
    title: 'Riivi',
    description: {
      es: 'Plataforma de streaming de contenido latinoamericano.',
      en: 'Latin American content streaming platform.'
    },
    cover: RiiviCover,
    bgHeaderColor: '#28015B',
    tags: ['Frontend'],
    delay: 1.5,
    sections: [
      {
        id: 'intro',
        title: { es: 'Introducción', en: 'Introduction' },
        intro: {
          es: 'Riivi es una plataforma de streaming de contenido latinoamericano que permite a los usuarios ver contenido en tiempo real.',
          en: 'Riivi is a Latin American content streaming platform that allows users to watch content in real time.'
        }
      },
      {
        id: 'front',
        title: { es: 'Frontend', en: 'Frontend' },
        intro: {
          es: 'Mi trabajo consistio en el desarrollo del frontend de la plataforma, plasmando los diseños de la interfaz de usuario en código utilizando React.js y Bootstrap.',
          en: 'My work consisted of developing the platform frontend, translating the user interface designs into code using React.js and Bootstrap.'
        },
        images: [Riivi1, Riivi2, Riivi3, Riivi4, Riivi5, Riivi6, Riivi7]
      }
    ]
  }
]
