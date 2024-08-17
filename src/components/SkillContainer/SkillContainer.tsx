import SkillCard from '@/components/SkillCard/SkillCard'
import { skills } from '@/data/skills'
import { Skill } from '@/types'

const SkillContainer = () => {
  return (
    <div className='py-20 scroll-mt-20' id='skills'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-2'>
            Habilidades
          </h2>
          <p className='mb-8 text-lg leading-8 text-gray-600 dark:text-gray-400'>
            Herramientas, tecnologías y habilidades que he adquirido en el
            transcurso de mi carrera
          </p>
        </div>
        <div className='mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {skills.map((skill: Skill) => (
            <SkillCard key={skill.id} item={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillContainer
