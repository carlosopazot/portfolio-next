import { Dialog, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface SidebarProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (value: boolean) => void
  children: React.ReactNode
}

export const Sidebar: React.FC<SidebarProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  children
}) => {
  return (
    <Dialog
      className='lg:hidden'
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className='fixed inset-0 z-50' />
      <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
        <div className='flex items-center justify-between'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <h4 className=' text-2xl text-gray-800 dark:text-white font-semibold'>
              copazo.
            </h4>
          </a>
          <button
            type='button'
            className='-m-2.5 rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className='sr-only'>Close menu</span>
            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='mt-6 flow-root'>
          <div className='-my-6 divide-y divide-gray-500/10'>
            <div className='space-y-2 py-6'>{children}</div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  )
}
