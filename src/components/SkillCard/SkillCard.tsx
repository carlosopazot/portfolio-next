import { Skill } from '@/types'
import Badge from '@/components/Badge/Badge'

const SkillCard = ({ item }: { item: Skill }) => {
  return (
    <div className='px-6 py-8 rounded-lg bg-gray-100 dark:bg-white/10 text-center'>
      <div className='flex justify-center align-middle flex-col gap-3'>
        <div
          className={`${item.color} h-16 w-16 flex justify-center align-middle rounded-full mx-auto`}
        >
          {item.icon}
        </div>
        <h3 className='text-2xl font-semibold text-gray-900 dark:text-white'>
          {item.title}
        </h3>
        <p className='text-gray-800 dark:text-white mb-4'>{item.description}</p>
        <div className='flex justify-center align-middle flex-wrap gap-2'>
          {(item.items ?? []).map((tag: string) => (
            <Badge key={tag} text={tag} bgColor={item.color} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillCard
