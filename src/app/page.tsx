import Hero from '@/components/Hero/Hero'
import ContactContainer from '@/components/ContactContainer/ContactContainer'
import ProjectsContainer from '@/components/ProjectsContainer/ProjectsContainer'
import ExperienceContainer from '@/components/ExperienceContainer/ExperienceContainer'
import SkillContainer from '@/components/SkillContainer/SkillContainer'
import About from '@/components/About/About'

export default function Home() {
  return (
    <div className='container px-6 mx-auto'>
      <Hero />
      <About />
      <ExperienceContainer />
      <SkillContainer />
      <ProjectsContainer />
      <ContactContainer />
    </div>
  )
}
