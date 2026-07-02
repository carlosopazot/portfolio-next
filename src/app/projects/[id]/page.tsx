import { projects } from '@/data/projects'
import type { Metadata } from 'next'
import ProjectDetail from '@/components/ProjectDetail/ProjectDetail'

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

  return <ProjectDetail project={project} />
}
