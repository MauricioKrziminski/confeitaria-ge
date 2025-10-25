/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <div className="relative w-full py-16">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center lg:flex-row lg:px-16 lg:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-8 max-w-2xl lg:mb-0"
        >
          <h2 className="text-accent mb-6 text-4xl font-bold drop-shadow-md lg:text-5xl">
            Feito com carinho, pensado para você! 💖
          </h2>
          <div className="text-accent-light space-y-4 text-lg">
            <p>
              Na <strong className="text-primary">Confeitaria da Ge</strong>,
              cada doce é preparado com amor e dedicação. Usamos ingredientes de
              qualidade para garantir um sabor inesquecível e proporcionar
              momentos especiais para você e sua família.
            </p>
            <p>
              Do clássico brigadeiro a bolos personalizados, cada detalhe é
              pensado para encantar! Nossa missão é transformar seus momentos
              especiais em lembranças ainda mais doces.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex items-center justify-center lg:ml-20"
        >
          <div className="relative">
            <div className="bg-primary absolute -left-4 -top-4 h-64 w-64 rounded-lg opacity-50"></div>
            <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-lg bg-white shadow-2xl">
              <img
                src="/assets/logo.png"
                alt="Confeitaria da Ge"
                className="h-48 w-48 object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
