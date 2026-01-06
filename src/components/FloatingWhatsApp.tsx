import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const FloatingWhatsApp = () => {
  const whatsappNumber = '+919876543210' // Replace with your number
  const message = 'Hi! I would like to discuss a project with you.'

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute inset-0 bg-green-500 rounded-full opacity-30"
      />
    </motion.button>
  )
}

export default FloatingWhatsApp
