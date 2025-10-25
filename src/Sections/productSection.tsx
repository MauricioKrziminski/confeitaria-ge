/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import { useCart } from '../context/cartContext'
import { CartItem } from '@/types/cartTypes'
import { motion, AnimatePresence } from 'framer-motion'
import { useProducts, Product } from '@/hooks/useProducts'
import { urlFor } from '@/lib/sanity'

export function ProductsSection() {
  const { addToCart } = useCart()
  const [showAddedMessage, setShowAddedMessage] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const { products, loading } = useProducts()

  const handleAddToCart = (item: Product) => {
    const cartItem: Omit<CartItem, 'quantity'> = {
      id: item._id,
      name: item.name,
      description: item.description,
      price: item.price,
      imageUrl: urlFor(item.image).width(800).height(600).fit('crop').url(),
    }
    addToCart(cartItem)
    setShowAddedMessage(true)
    setTimeout(() => setShowAddedMessage(false), 3000)
  }

  const visibleItems = showAll ? products : products.slice(0, 4)

  return (
    <div className="relative w-full py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mb-3 text-center text-4xl font-bold text-accent drop-shadow-md lg:text-5xl"
      >
        Nossos Produtos
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mb-12 text-center text-lg text-accent-light"
      >
        Delícias artesanais feitas com ingredientes selecionados
      </motion.p>

      <AnimatePresence>
        {showAddedMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed left-1/2 top-40 z-50 -translate-x-1/2 transform whitespace-nowrap rounded-lg border-2 border-secondary bg-white px-6 py-4 shadow-2xl"
            role="alert"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
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
              <p className="font-medium text-secondary">
                Produto adicionado ao carrinho!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {loading && (
        <div className="text-center text-lg text-accent-light">
          Carregando produtos...
        </div>
      )}

      {!loading && products.length === 0 && (
        <div className="text-center text-lg text-accent-light">
          Nenhum produto cadastrado ainda. Adicione produtos no Sanity Studio!
        </div>
      )}

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visibleItems.map((item, index) => {
          const imageUrl = urlFor(item.image)
            .width(800)
            .height(600)
            .fit('crop')
            .url()

          return (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="flex flex-col items-center justify-between rounded-lg bg-white p-6 text-center shadow-lg transition-all duration-200 hover:shadow-2xl"
            >
              <div className="mb-4 w-full overflow-hidden rounded-lg">
                <motion.img
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  src={imageUrl}
                  alt={item.name}
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                />
              </div>

              <h2 className="text-lg font-semibold text-accent-light">
                {item.name}
              </h2>

              <p className="flex-grow text-sm text-gray-600">
                {item.description}
              </p>

              <p className="mt-4 text-xl font-bold text-secondary">
                {item.price}
              </p>

              <motion.button
                onClick={() => handleAddToCart(item)}
                whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                className="mt-3 w-full rounded-md bg-gradient-to-r from-primary to-primary-light px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:shadow-lg"
              >
                Adicionar ao carrinho
              </motion.button>
            </motion.div>
          )
        })}
      </div>

      {products.length > 4 && (
        <div className="mt-12 flex justify-center">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
            className="rounded-full bg-gradient-to-r from-primary to-primary-light px-8 py-3 text-lg font-medium text-white shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            {showAll ? '← Ver menos' : 'Ver mais →'}
          </motion.button>
        </div>
      )}
    </div>
  )
}
