'use client'

import { Project } from '@/types'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ProjectTags from '@/components/ProjectTags/ProjectTags'

const ProjectCardInfo = ({ project }: { project: Project }) => {
  return (
    <motion.div
      className='absolute z-50 bottom-0 left-0 rounded-lg right-0 w-full bg-white dark:bg-slate-800 p-4 flex flex-col align-middle gap-2'
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.2 }}
    >
      <h3 className='text-2xl font-semibold text-gray-900 dark:text-white'>
        {project.title}
      </h3>
      <div className='flex justify-between align-middle'>
        <ProjectTags item={project} />
        <Link
          href={`/projects/${project.id}`}
          className='flex w-8 h-8 rounded-full items-center justify-center text-gray-900 bg-gray-300 hover:bg-gray-400 transition ease-in-out'
          passHref
          aria-label='Ver proyecto'
        >
          <ChevronRightIcon className='w-6 h-6' />
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectCardInfo
