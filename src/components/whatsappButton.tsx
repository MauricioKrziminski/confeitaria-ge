'use client'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const whatsappNumber = '555194612103'
    const message = encodeURIComponent(
      'Olá! Gostaria de saber mais sobre os produtos da Confeitaria da Ge.',
    )
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#20BA5A]"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 1,
      }}
      whileHover={{ rotate: 360 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp size={32} />
      <motion.span
        className="absolute -right-1 -top-1 flex h-5 w-5"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex h-5 w-5 rounded-full bg-[#20BA5A]"></span>
      </motion.span>
    </motion.button>
  )
}
