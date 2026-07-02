'use client'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import { categories } from '@/data/experience'
import { DownloadOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import BgShape from '../BgShape/BgShape'
import { useLanguage } from '@/context/LanguageContext'

const content = {
  es: {
    title: 'Mi experiencia',
    paragraph1:
      'A lo largo de mis años como profesional en la industria TI, he tenido la oportunidad de participar en proyectos de diversas áreas, incluyendo telecomunicaciones, seguros, banca y salud, entre otros.',
    paragraph2:
      'Además, he integrado cursos académicos y talleres a mi experiencia para fortalecer mis conocimientos y aplicarlos en mis proyectos.',
    downloadCv: 'Descargar CV'
  },
  en: {
    title: 'My experience',
    paragraph1:
      'Throughout my years as a professional in the IT industry, I have had the opportunity to participate in projects from diverse areas, including telecommunications, insurance, banking and health, among others.',
    paragraph2:
      'I have also included academic courses and workshops in my experience to strengthen my knowledge and apply it to my projects.',
    downloadCv: 'Download CV'
  }
}

const ExperienceContainer = () => {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <div className='py-20 relative isolate scroll-mt-20' id='experience'>
      <div className='mt-12 grid sm:grid-cols-2 gap-24 mb-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className='flex flex-col'
        >
          <h3 className='text-3xl font-semibold text-gray-900 dark:text-white mb-8'>
            {t.title}
          </h3>
          <p className='mt-2 text-lg text-gray-500 dark:text-gray-200 mb-6'>
            {t.paragraph1}
          </p>
          <p className='mt-2 text-lg text-gray-500 dark:text-gray-200 mb-6'>
            {t.paragraph2}
          </p>
          <div className='flex gap-4'>
            <a
              href='/docs/CV_Copazo_ES.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-1 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-md px-3.5 py-2.5 shadow-sm flex align-middle'
            >
              <DownloadOutlined className='inline-block mr-2 text-sm' />
              {t.downloadCv}
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <TabGroup>
            <TabList className='flex gap-2'>
              {categories.map(({ id, name, icon }) => (
                <Tab
                  key={id}
                  className='flex items-center gap-2 rounded-full transition ease-in-out py-2 px-4 text-lg/6 font-semibold 
                text-slate-800 dark:text-white 
                focus:outline-none 
                data-[selected]:bg-slate-800/10 data-[hover]:bg-slate-800/5 data-[selected]:data-[hover]:bg-slate-800/10 
                data-[focus]:outline-1 data-[focus]:outline-slate-800/10
                dark:data-[selected]:bg-white/10 dark:data-[hover]:bg-white/5 dark:data-[selected]:dark:data-[hover]:bg-white/10
                '
                >
                  {icon}
                  {name[language]}
                </Tab>
              ))}
            </TabList>
            <TabPanels className='mt-5 ps-2'>
              {categories.map(({ id, name, items }) => (
                <TabPanel key={id} className='rounded-xl gap-8'>
                  <ol className='relative border-s border-gray-200 dark:border-gray-700'>
                    {items.map((item) => (
                      <ExperienceCard key={item.id} item={item} />
                    ))}
                  </ol>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </motion.div>
      </div>
      <BgShape />
    </div>
  )
}

export default ExperienceContainer
