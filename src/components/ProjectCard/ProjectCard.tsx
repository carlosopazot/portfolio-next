'use client'

import { useState } from 'react'
import { Transition, TransitionChild } from '@headlessui/react'
import { RightOutlined } from '@ant-design/icons'
import { Project } from '@/types/projects'
import ProjectTags from '@/components/ProjectTags/ProjectTags'
import Link from 'next/link'
import Image from 'next/image'

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false)
  const handleHover = () => {
    setIsHovered(true)
  }
  const handleLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      className='relative h-60 flex flex-col items-center justify-center p-6 bg-white rounded-lg dark:bg-gray-900 overflow-hidden'
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <Image
        className='rounded-lg object-cover'
        fill={true}
        src={project.cover}
        alt={project.title}
        sizes='100%'
      />
      <Transition appear show={isHovered}>
        <TransitionChild
          enter='transition-transform duration-200'
          enterFrom='translate-y-full'
          enterTo='translate-y-0'
          leave='transition-transform duration-200'
          leaveFrom='translate-y-0'
          leaveTo='translate-y-full'
        >
          <div className='absolute z-10 bottom-0 left-0 rounded-lg right-0 w-full bg-white dark:bg-slate-800 p-4 flex flex-col align-middle gap-2'>
            <h3 className='text-2xl font-semibold text-gray-900 dark:text-white'>
              {project.title}
            </h3>
            <div className='flex justify-between align-middle'>
              <ProjectTags item={project} />
              <Link
                href={`/projects/${project.id}`}
                className='flex w-8 h-8 rounded-full align-middle justify-center text-gray-900 bg-gray-300 hover:bg-gray-400 transition ease-in-out'
                passHref
              >
                <RightOutlined />
              </Link>
            </div>
          </div>
        </TransitionChild>
      </Transition>
    </div>
  )
}

export default ProjectCard
