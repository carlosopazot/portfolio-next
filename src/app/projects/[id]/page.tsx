import { projects } from '@/data/projects'
import type { Metadata } from 'next'
import Link from 'next/link'
import ProjectSection from '@/components/ProjectSection/ProjectSection'
import ProjectHeader from '@/components/ProjectHeader/ProjectHeader'

interface PageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString()
  }))
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const id = params.id
  const project = await getProjectData(id)

  return {
    title: `${project?.title} | Proyectos`
  }
}

async function getProjectData(id: string) {
  return projects.find((project) => project.id.toString() === id)
}

export default async function ProjectPage({ params }: PageProps) {
  const project = await getProjectData(params.id)

  if (!project) {
    return (
      <div className='h-screen flex flex-col gap-2 justify-center items-center dark:text-white'>
        <h2 className='font-semibold text-4xl'>Algo salió mal</h2>
        <h4 className='font-normal'>
          El proyecto que buscabas no se encuentra aquí
        </h4>
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
                  <li key={item.title}>
                    <Link
                      href={`#${item.id}`}
                      className='text-sm text-gray-500 rounded-md px-2 py-1 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-100/10 dark:text-gray-200 dark:hover:text-white'
                    >
                      {item.title}
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
