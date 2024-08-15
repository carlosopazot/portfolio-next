import Badge from '@/components/Badge/Badge'
import { Project } from '@/types/projects'

const ProjectTags = ({ item }: { item: Project }) => {
  const textColorMapping: { [key: string]: string } = {
    UX: 'bg-pink-200',
    UI: 'bg-purple-200',
    Frontend: 'bg-indigo-200'
  }

  const getTagColor = (tag: string) => {
    return textColorMapping[tag] || 'bg-gray-400'
  }

  return (
    <div className='flex gap-1'>
      {(item.tags ?? []).map((tag: string) => (
        <Badge key={tag} text={tag} bgColor={getTagColor(tag)} />
      ))}
    </div>
  )
}

export default ProjectTags
