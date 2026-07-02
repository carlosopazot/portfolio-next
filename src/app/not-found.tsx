import BgShape from '@/components/BgShape/BgShape'
import NotFoundContent from '@/components/NotFoundContent/NotFoundContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página no encontrada | Carlos Opazo',
  description: 'Diseñador UX/UI & Frontend.'
}

export default function NotFound() {
  return (
    <div className='h-screen flex items-center justify-center dark:text-white relative isolate overflow-hidden'>
      <BgShape />
      <div className='container mx-auto px-6 py-12'>
        <NotFoundContent />
      </div>
      <BgShape shape2 />
    </div>
  )
}
