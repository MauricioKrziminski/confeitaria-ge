/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import { useCart } from '../context/cartContext'
import { CartItem } from '@/types/cartTypes'
import { motion, AnimatePresence } from 'framer-motion'

const catalogItems = [
  {
    id: 1,
    name: 'Brigadeiro Gourmet',
    description: 'Delicioso brigadeiro feito com chocolate belga.',
    price: 'R$5,00',
    imageUrl: '/assets/brigadeiro.jpg',
  },
  {
    id: 2,
    name: 'Bolo de Morango',
    description: 'Camadas de bolo de baunilha recheado com morango fresco.',
    price: 'R$45,00',
    imageUrl: '/assets/brigadeiro.jpg',
  },
  {
    id: 3,
    name: 'Torta de Limão',
    description: 'Torta cremosa de limão com base crocante de biscoito.',
    price: 'R$30,00',
    imageUrl: '/assets/brigadeiro.jpg',
  },
  {
    id: 4,
    name: 'Cupcake Red Velvet',
    description: 'Cupcake macio de red velvet com cobertura de cream cheese.',
    price: 'R$8,00',
    imageUrl: '/assets/brigadeiro.jpg',
  },
  {
    id: 5,
    name: 'Cookie Recheado',
    description: 'Cookie crocante por fora e recheado com chocolate derretido.',
    price: 'R$6,00',
    imageUrl: '/assets/brigadeiro.jpg',
  },
  {
    id: 6,
    name: 'Pudim de Leite',
    description: 'Pudim cremoso de leite condensado com calda de caramelo.',
    price: 'R$20,00',
    imageUrl: '/assets/brigadeiro.jpg',
  },
  {
    id: 7,
    name: 'Brownie Recheado',
    description: 'Brownie fudge com recheio de doce de leite cremoso.',
    price: 'R$12,00',
    imageUrl: '/assets/brigadeiro.jpg',
  },
  {
    id: 8,
    name: 'Cheesecake de Frutas Vermelhas',
    description: 'Cheesecake cremoso com calda de frutas vermelhas.',
    price: 'R$38,00',
    imageUrl: '/assets/brigadeiro.jpg',
  },
  {
    id: 9,
    name: 'Macaron Sortido',
    description: 'Delicados macarons franceses em diversos sabores.',
    price: 'R$7,50',
    imageUrl: '/assets/brigadeiro.jpg',
  },
  {
    id: 10,
    name: 'Bolo de Chocolate',
    description: 'Bolo de chocolate trufado com ganache de chocolate belga.',
    price: 'R$50,00',
    imageUrl: '/assets/brigadeiro.jpg',
  },
  {
    id: 11,
    name: 'Torta de Maracujá',
    description: 'Torta refrescante de maracujá com merengue suíço.',
    price: 'R$32,00',
    imageUrl: '/assets/brigadeiro.jpg',
  },
  {
    id: 12,
    name: 'Petit Gateau',
    description: 'Bolinho quente de chocolate com sorvete de creme.',
    price: 'R$15,00',
    imageUrl: '/assets/brigadeiro.jpg',
  },
]

export function ProductsSection() {
  const { addToCart } = useCart()
  const [showAddedMessage, setShowAddedMessage] = useState(false)
  const [showAll, setShowAll] = useState(false)

  const handleAddToCart = (item: Omit<CartItem, 'quantity'>) => {
    addToCart(item)
    setShowAddedMessage(true)
    setTimeout(() => setShowAddedMessage(false), 3000)
  }

  const visibleItems = showAll ? catalogItems : catalogItems.slice(0, 4)

  return (
    <div className="relative w-full py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mb-3 text-center text-4xl font-bold text-[#2B3A67] drop-shadow-md lg:text-5xl"
      >
        Nossos Produtos
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mb-12 text-center text-lg text-[#3E497A]"
      >
        Delícias artesanais feitas com ingredientes selecionados
      </motion.p>

      <AnimatePresence>
        {showAddedMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed left-1/2 top-40 z-50 -translate-x-1/2 transform whitespace-nowrap rounded-lg border-2 border-[#8D3F60] bg-white px-6 py-4 shadow-2xl"
            role="alert"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8D3F60]">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="font-medium text-[#8D3F60]">
                Produto adicionado ao carrinho!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visibleItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="flex flex-col items-center justify-between rounded-lg bg-white p-6 text-center shadow-lg transition-all duration-200 hover:shadow-2xl"
          >
            <div className="mb-4 overflow-hidden rounded-lg">
              <motion.img
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                src={item.imageUrl}
                alt={item.name}
                className="h-40 w-full max-w-[180px] rounded-lg object-cover"
              />
            </div>

            <h2 className="text-lg font-semibold text-[#3E497A]">
              {item.name}
            </h2>

            <p className="flex-grow text-sm text-gray-600">
              {item.description}
            </p>

            <p className="mt-4 text-xl font-bold text-[#8D3F60]">
              {item.price}
            </p>

            <motion.button
              onClick={() => handleAddToCart(item)}
              whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              className="mt-3 w-full rounded-md bg-gradient-to-r from-[#8D3F60] to-[#D1919A] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:shadow-lg"
            >
              Adicionar ao carrinho
            </motion.button>
          </motion.div>
        ))}
      </div>

      {catalogItems.length > 4 && (
        <div className="mt-12 flex justify-center">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
            className="rounded-full bg-gradient-to-r from-[#8D3F60] to-[#D1919A] px-8 py-3 text-lg font-medium text-white shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            {showAll ? '← Ver menos' : 'Ver mais →'}
          </motion.button>
        </div>
      )}
    </div>
  )
}
