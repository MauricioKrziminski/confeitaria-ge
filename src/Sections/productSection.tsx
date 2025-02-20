/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import { useCart } from '../context/cartContext'
import { CartItem } from '@/types/cartTypes'

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
    <div className="relative w-full bg-[#f3d9e0] py-20">
      <h1 className="mb-8 text-center text-4xl font-bold text-[#2B3A67] drop-shadow-md">
        Nossos Produtos
      </h1>

      {showAddedMessage && (
        <p
          className="fixed left-1/2 top-40 -translate-x-1/2 transform whitespace-nowrap rounded border border-[#8D3F60] bg-[#fde2e4] px-4 py-3 text-[#8D3F60]"
          role="alert"
        >
          Produto adicionado ao carrinho!
        </p>
      )}

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visibleItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-between rounded-lg bg-[white] p-6 text-center shadow-lg transition duration-300 ease-in-out hover:shadow-xl"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="mb-4 h-40 w-full max-w-[180px] rounded-lg object-cover"
            />

            <h2 className="text-lg font-semibold text-[#3E497A]">
              {item.name}
            </h2>

            <p className="flex-grow text-sm text-gray-600">
              {item.description}
            </p>

            <p className="mt-4 text-lg font-bold text-[#8D3F60]">
              {item.price}
            </p>

            <button
              onClick={() => handleAddToCart(item)}
              className="mt-3 w-full rounded-md bg-[#D1919A] px-4 py-2 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-[#BA7F8A]"
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>

      {catalogItems.length > 4 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-md bg-[#D1919A] px-6 py-3 text-lg font-medium text-white transition duration-300 ease-in-out hover:bg-[#BA7F8A]"
          >
            {showAll ? 'Ver menos' : 'Ver mais'}
          </button>
        </div>
      )}
    </div>
  )
}
