/* eslint-disable @next/next/no-img-element */
'use client'
import { FaHeart, FaTruck, FaStar, FaLeaf } from 'react-icons/fa'
import { motion } from 'framer-motion'

const differentials = [
  {
    id: 1,
    icon: FaHeart,
    title: 'Feito com Amor',
    description: 'Cada doce é preparado com carinho e dedicação para você',
    color: '#FF6B7A',
  },
  {
    id: 2,
    icon: FaTruck,
    title: 'Entrega Rápida',
    description: 'Entregamos seus pedidos com agilidade e segurança',
    color: '#E84A5F',
  },
  {
    id: 3,
    icon: FaStar,
    title: 'Qualidade Premium',
    description: 'Ingredientes selecionados para garantir o melhor sabor',
    color: '#4A90E2',
  },
  {
    id: 4,
    icon: FaLeaf,
    title: 'Produtos Frescos',
    description: 'Preparados no dia para máxima qualidade e frescor',
    color: '#7FBBDA',
  },
]

export function DifferentialsSection() {
  return (
    <div className="relative w-full py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-accent mb-4 text-center text-4xl font-bold drop-shadow-md"
        >
          Por que escolher a Confeitaria da Ge?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-accent-light mb-12 text-center text-lg"
        >
          Nossos diferenciais fazem toda a diferença!
        </motion.p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {differentials.map((differential, index) => (
            <motion.div
              key={differential.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-lg transition-all duration-200 hover:shadow-2xl"
            >
              <div
                className="mb-4 flex h-20 w-20 items-center justify-center rounded-full"
                style={{ backgroundColor: differential.color }}
              >
                <differential.icon className="text-4xl text-white" />
              </div>
              <h3 className="text-accent mb-3 text-xl font-bold">
                {differential.title}
              </h3>
              <p className="text-sm text-gray-600">
                {differential.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
