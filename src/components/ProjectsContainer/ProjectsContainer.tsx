import ProjectCard from '../ProjectCard/ProjectCard'
import { projects } from '@/data/projects'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import BgShape from '@/components/BgShape/BgShape'

const ProjectsContainer = () => {
  return (
    <div className='py-8 scroll-mt-20 relative isolate' id='projects'>
      <SectionHeader
        title='Proyectos'
        subtitle='Algunos de los proyectos en los que he trabajado.'
      />
      <div className='mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={{ ...project, sections: project.sections || [] }}
          />
        ))}
      </div>
      <BgShape shape2 />
    </div>
  )
}

export default ProjectsContainer
