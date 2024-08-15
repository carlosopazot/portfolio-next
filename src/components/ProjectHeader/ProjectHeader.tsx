import ProjectTags from '@/components/ProjectTags/ProjectTags'

interface ProjectHeaderProps {
  project: {
    title: string
    description: string
    bgHeaderColor: string
  }
}

const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  return (
    <section
      className='pt-32 pb-20'
      style={{ backgroundColor: project.bgHeaderColor }}
    >
      <div className='container mx-auto px-6'>
        <div className='flex flex-col gap-3'>
          <h1 className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            {project.title}
          </h1>
          <p className='text-lg leading-8 text-white'>{project.description}</p>
          <ProjectTags item={project} />
        </div>
      </div>
    </section>
  )
}

export default ProjectHeader
