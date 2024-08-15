import { Project } from '@/types'
import { RightOutlined } from '@ant-design/icons'
import Link from 'next/link'
import Badge from '@/components/Badge/Badge'
import ProjectTags from '@/components/ProjectTags/ProjectTags'

const ProjectCardInfo = ({ item }: { item: Project }) => {
  return (
    <div className='absolute z-10 bottom-0 left-0 rounded-lg right-0 w-full bg-white dark:bg-slate-800 p-4 flex flex-col align-middle gap-2'>
      <h3 className='text-2xl font-semibold text-gray-900 dark:text-white'>
        {item.title}
      </h3>
      <div className='flex justify-between align-middle'>
        <ProjectTags item={item} />
        <Link
          href={`/projects/${item.id}`}
          className='flex w-8 h-8 rounded-full align-middle justify-center text-gray-900 bg-gray-300 hover:bg-gray-400 transition ease-in-out'
          passHref
        >
          <RightOutlined />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCardInfo
