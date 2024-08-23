'use client'

import { useState } from 'react'
import { Project } from '@/types/projects'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCardInfo from '@/components/ProjectCard/ProjectCardInfo'
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
    <motion.div
      className='relative z-10 h-60 flex flex-col items-center justify-center p-6 bg-white rounded-lg dark:bg-gray-900 overflow-hidden'
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: project.delay }}
      viewport={{ once: true }}
    >
      <Image
        className='rounded-lg object-cover'
        fill={true}
        src={project.cover}
        alt={project.title}
        sizes='100%'
      />
      <AnimatePresence>
        {isHovered && <ProjectCardInfo project={project} />}
      </AnimatePresence>
    </motion.div>
  )
}

export default ProjectCard
