'use client'

import SkillCard from '@/components/SkillCard/SkillCard'
import { skills } from '@/data/skills'
import { Skill } from '@/types'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import BgShape from '@/components/BgShape/BgShape'
import { useLanguage } from '@/context/LanguageContext'

const content = {
  es: {
    title: 'Habilidades',
    subtitle:
      'Herramientas, tecnologías y habilidades que he adquirido en el transcurso de mi carrera'
  },
  en: {
    title: 'Skills',
    subtitle:
      'Tools, technologies and skills I have acquired throughout my career'
  }
}

const SkillContainer = () => {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <div className='relative py-20 scroll-mt-20 isolate' id='skills'>
      <div className='container mx-auto'>
        <SectionHeader title={t.title} subtitle={t.subtitle} />
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {skills.map((skill: Skill) => (
            <SkillCard key={skill.id} item={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillContainer
