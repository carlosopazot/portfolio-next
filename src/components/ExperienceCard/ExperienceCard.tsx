import { ExperienceItem } from '@/types'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
  return (
    <li
      key={item.id}
      className='mb-6 ms-4 rounded-lg p-6 text-slate-800 dark:text-white bg-gray-100 dark:bg-white/5'
    >
      <div className='absolute w-4 h-4 bg-gray-200 rounded-full -start-2 border border-white dark:border-slate-800 dark:bg-gray-700'></div>
      <Disclosure>
        <DisclosureButton className='group flex flex-row justify-between items-center w-full text-left'>
          <div>
            <h3 className='font-semibold text-xl'>{item.title}</h3>
            <ul className='flex flex-col gap-2' aria-hidden='true'>
              <li className='text-lg text-gray-500 dark:text-gray-400 font-semibold'>
                {item.company}
              </li>
              <li className='text-gray-400 dark:text-gray-500'>{item.date}</li>
            </ul>
          </div>
          {item.description && (
            <div className='flex bg-white hover:bg-gray-200 dark:bg-white/5 p-2 rounded-full dark:hover:bg-white/10 transition-all'>
              <ChevronDownIcon className='h-5 w-5 group-data-[open]:rotate-180' />
            </div>
          )}
        </DisclosureButton>
        {item.description && (
          <DisclosurePanel
            transition
            className='origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0'
          >
            <ul className='list-disc ms-4'>
              {item.description.map((desc) => (
                <li key={desc} className='mt-2'>
                  {desc}
                </li>
              ))}
            </ul>
          </DisclosurePanel>
        )}
      </Disclosure>
    </li>
  )
}

export default ExperienceCard
