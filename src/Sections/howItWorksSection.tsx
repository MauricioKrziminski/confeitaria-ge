/* eslint-disable react/no-unescaped-entities */
'use client'
import { FaSearch, FaShoppingCart, FaWhatsapp, FaSmile } from 'react-icons/fa'
import { motion } from 'framer-motion'

const steps = [
  {
    id: 1,
    icon: FaSearch,
    title: 'Escolha seus produtos',
    description: 'Navegue pelo nosso catálogo e selecione seus doces favoritos',
    color: '#4A90E2',
  },
  {
    id: 2,
    icon: FaShoppingCart,
    title: 'Adicione ao carrinho',
    description: 'Clique em "Adicionar ao carrinho" nos produtos desejados',
    color: '#E84A5F',
  },
  {
    id: 3,
    icon: FaWhatsapp,
    title: 'Finalize no WhatsApp',
    description: 'Clique em finalizar e converse conosco pelo WhatsApp',
    color: '#25D366',
  },
  {
    id: 4,
    icon: FaSmile,
    title: 'Receba em casa',
    description: 'Aguarde a entrega e aproveite seus deliciosos doces!',
    color: '#7FBBDA',
  },
]

export function HowItWorksSection() {
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
          Como Funciona?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-accent-light mb-16 text-center text-lg"
        >
          É muito fácil fazer seu pedido!
        </motion.p>

        <div className="relative">
          {/* Linha conectora */}
          <div className="from-primary to-secondary absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 transform bg-gradient-to-b lg:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  }`}
                >
                  <div className="rounded-xl bg-gradient-to-br from-[#E8F4FA] to-white p-6 shadow-lg">
                    <h3 className="text-accent mb-3 text-2xl font-bold">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Circle with icon */}
                <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full shadow-xl lg:h-24 lg:w-24">
                  <div
                    className="flex h-full w-full items-center justify-center rounded-full"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon className="text-3xl text-white lg:text-4xl" />
                  </div>
                  <div className="text-accent absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold shadow-md">
                    {step.id}
                  </div>
                </div>

                {/* Empty space for alignment */}
                <div className="hidden flex-1 lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
