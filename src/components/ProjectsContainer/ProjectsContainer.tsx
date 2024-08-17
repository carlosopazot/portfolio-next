import ProjectCard from '../ProjectCard/ProjectCard'
import BgShape from '../BgShape/BgShape'
import { projects } from '@/data/projects'

const ProjectsContainer = () => {
  return (
    <div className='py-8 scroll-mt-20 relative' id='projects'>
      {/* <BgShape /> */}
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
          Proyectos
        </h2>
        <p className='mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400'>
          Algunos de los proyectos en los que he trabajado.
        </p>
      </div>
      <div className='mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={{ ...project, sections: project.sections || [] }}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectsContainer
