import { motion, AnimatePresence } from 'framer-motion'

interface NotificationProps {
  message: string
  type: 'success' | 'error'
  visible: boolean
}

const Notification = ({ message, type, visible }: NotificationProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={message} // Ensure AnimatePresence tracks this properly
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className={`text-white text-center rounded-lg p-4 ${
            type === 'success' ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Notification
