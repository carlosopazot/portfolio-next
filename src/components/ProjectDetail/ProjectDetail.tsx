'use client'

import Link from 'next/link'
import ProjectSection from '@/components/ProjectSection/ProjectSection'
import ProjectHeader from '@/components/ProjectHeader/ProjectHeader'
import { Project } from '@/types'
import { useLanguage } from '@/context/LanguageContext'

const content = {
  es: {
    title: 'Algo salió mal',
    subtitle: 'El proyecto que buscabas no se encuentra aquí'
  },
  en: {
    title: 'Something went wrong',
    subtitle: 'The project you are looking for is not here'
  }
}

const ProjectDetail = ({ project }: { project: Project | undefined }) => {
  const { language } = useLanguage()
  const t = content[language]

  if (!project) {
    return (
      <div className='h-screen flex flex-col gap-2 justify-center items-center dark:text-white'>
        <h2 className='font-semibold text-4xl'>{t.title}</h2>
        <h4 className='font-normal'>{t.subtitle}</h4>
      </div>
    )
  }

  return (
    <main>
      <ProjectHeader project={project} />
      <section className='bg-white dark:bg-slate-800 text-black dark:text-white py-10 relative snap-x'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-5 gap-10'>
            <div className='col-span-5 lg:col-span-4'>
              {project.sections.map((section) => (
                <ProjectSection
                  key={section.id}
                  id={section.id}
                  title={section.title}
                  intro={section.intro}
                  images={section.images || []}
                />
              ))}
            </div>
            <div className='col-span-1'>
              <ul className='hidden lg:flex flex-col gap-4 sticky top-20 '>
                {project.sections.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`#${item.id}`}
                      className='text-sm text-gray-500 rounded-md px-2 py-1 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-100/10 dark:text-gray-200 dark:hover:text-white'
                    >
                      {item.title[language]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProjectDetail
