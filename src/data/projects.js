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
          'Wom es una plataforma de telecomunicaciones que ofrece servicios de telefonía móvil, internet y televisión. Para este proyecto tuve que desarrollar el diseño de interfaz para la primera versión de la aplicación móvil.'
      },
      {
        id: 'ui',
        title: 'Diseño de interfaz',
        intro:
          'El proyecto consistió en el diseño de la interfaz de usuario de la aplicación móvil, siguiendo las directrices de diseño y la identidad visual de la marca. Para esto se realizaron procesos de investigación con usuarios y se desarrollaron prototipos de alta fidelidad que permitieron visualizar cómo se vería la aplicación en su versión final.',
        images: [Wom1, Wom2, Wom3, Wom4]
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
          'Salfa Rent es una plataforma de arriendo de vehículos que permite a los usuarios arrendar vehículos de forma rápida y sencilla.'
      },
      {
        id: 'ui',
        title: 'Interfaz de usuario',
        intro:
          'El proyecto consistió en el rediseño de la interfaz de usuario de la plataforma, así como también viaje del usuario a través de la misma con el objetivo de mejorar la experiencia de arrendar un vehículo. Luego se realizó el desarrollo de la aplicación usando React.js y Tailwind CSS.',
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
          'Survi es una plataforma para la creación de encuestas que permite a los usuarios crear, compartir y analizar encuestas de forma rápida y sencilla.'
      },
      {
        id: 'ui',
        title: 'Interfaz de usuario',
        intro:
          'El proyecto consistió en desarrollar los componentes y vistas de la plataforma, siguiendo las directrices de diseño y la identidad visual de la marca. Luego se realizó el desarrollo de la aplicación usando React.js y Bootstrap.',
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
          'Primero se realizó un análisis de la arquitectura del sitio para definir la estructura de la información y la navegación del sitio, lo que permitió definir los flujos de usuario y la jerarquía de la información.',
        images: [MettriNav]
      },
      {
        id: 'branding',
        title: 'Branding',
        intro:
          'Luego se realizó el diseño de la identidad visual de la marca, definiendo la paleta de colores, tipografía y elementos gráficos que representan la marca.',
        images: [MettriBrand, MettriColors, MettriTypography]
      },
      {
        id: 'ui',
        title: 'Interfaz de usuario',
        intro:
          'Finalmente se realizó el diseño de la interfaz de usuario, desarrollando prototipos de alta fidelidad que permitieron visualizar cómo se vería la plataforma en su versión final.',
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
          'Para este proyecto se realizó el diseño de la interfaz de usuario y posterior desarrollo de la aplicación usando Vue.js y Bootstrap. El sistema permite a los operarios registrar sus horas de trabajo y a los supervisores llevar un control de los horarios de los operarios.',
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
