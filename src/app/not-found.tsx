import BgShape from '@/components/BgShape/BgShape'
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
        <div className='flex flex-col justify-center text-center gap-2'>
          <h1 className='text-4xl font-bold '>Algo salió mal.</h1>
          <p>La página que buscas no está aquí.</p>
        </div>
      </div>
      <BgShape shape2 />
    </div>
  )
}
