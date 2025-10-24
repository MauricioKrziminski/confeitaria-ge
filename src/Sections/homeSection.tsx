/* eslint-disable @next/next/no-img-element */
'use client'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { FaBirthdayCake, FaCookie, FaIceCream } from 'react-icons/fa'

export function HomeSection() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#ADD8E6] to-[#FFC0CB] px-6 text-center lg:px-12">
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
          className="mb-4 text-5xl font-bold text-[#2B3A67] drop-shadow-lg md:text-6xl lg:text-7xl"
        >
          Confeitaria da Ge
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 max-w-2xl text-xl font-medium text-[#3E497A] md:text-2xl"
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
            className="cursor-pointer rounded-full bg-gradient-to-r from-[#8D3F60] to-[#D1919A] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl"
          >
            Ver Catálogo
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer rounded-full border-2 border-[#2B3A67] bg-transparent px-8 py-4 text-lg font-semibold text-[#2B3A67] shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#2B3A67] hover:text-white"
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
        className="absolute bottom-32 flex w-full justify-center lg:bottom-40"
      >
        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-2xl">
          <img
            src="/assets/LogoConfeitaria3.png"
            alt="Logo Confeitaria"
            className="h-32 w-32 object-contain"
          />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-4 hidden lg:bottom-6 lg:block"
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm font-medium text-[#2B3A67]">
            Role para baixo
          </span>
          <svg
            className="h-6 w-6 text-[#2B3A67]"
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
