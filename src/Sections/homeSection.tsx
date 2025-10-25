/* eslint-disable @next/next/no-img-element */
'use client'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

export function HomeSection() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-20 text-center lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-5xl font-bold text-accent drop-shadow-lg md:text-6xl lg:text-7xl"
        >
          Confeitaria da Ge
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 max-w-2xl text-xl font-medium text-accent-light md:text-2xl"
        >
          Delícias feitas com amor para adoçar seus momentos especiais! 🧁
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12 flex flex-wrap justify-center gap-4"
        >
          <Link
            to="representatives"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer rounded-full bg-gradient-to-r from-primary to-primary-light px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl"
          >
            Ver Catálogo
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer rounded-full border-2 border-primary bg-transparent px-8 py-4 text-lg font-semibold text-primary shadow-md transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-white"
          >
            Fale Conosco
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative element */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-20 flex w-full justify-center md:bottom-28 lg:bottom-32"
      >
        <img
          src="/assets/logo.png"
          alt="Logo Confeitaria"
          className="h-40 w-40 object-contain drop-shadow-2xl md:h-48 md:w-48 lg:h-56 lg:w-56"
          style={{ filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))' }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-8 lg:bottom-10"
      >
        <div className="flex flex-col items-center">
          <span className="mb-1 text-xs font-medium text-accent md:mb-2 lg:text-sm">
            Role para baixo
          </span>
          <svg
            className="h-4 w-4 text-accent md:h-5 md:w-5 lg:h-6 lg:w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </div>
  )
}
