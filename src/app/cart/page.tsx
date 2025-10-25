'use client'
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { Header } from '@/components/header'
import { useCart } from '../../context/cartContext'
import Modal from '@/components/modal'
import { CartItem as CartItemType } from '@/types/cartTypes'

const Cart: React.FC = () => {
  const { cartItems, addToCart, removeFromCart } = useCart()
  const [itemToRemove, setItemToRemove] = useState<CartItemType | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleIncreaseQuantity = (item: CartItemType) => {
    addToCart(item)
  }

  const handleDecreaseQuantity = (item: CartItemType) => {
    if (item.quantity > 1) {
      removeFromCart(item.id, false)
    } else {
      setItemToRemove(item)
    }
  }

  const handleWhatsAppRedirect = () => {
    let message =
      'Olá, Boa tarde, gostaria de finalizar a compra dos seguintes itens:\n'

    cartItems.forEach((item) => {
      message += `${item.quantity}x ${item.name} - R$${item.price}\n`
    })

    message += `Total: R$${total.toFixed(2).replace('.', ',')}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappNumber = '555194612103'
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank')
  }

  const confirmRemoveItem = () => {
    if (itemToRemove) {
      removeFromCart(itemToRemove.id, true)
      setItemToRemove(null)
    }
  }

  const total = cartItems.reduce(
    (acc, item) =>
      acc +
      item.quantity *
        parseFloat(item.price.replace('R$', '').replace(',', '.')),
    0,
  )

  return (
    <>
      <Header />
      <div className="mt-28">
        <h1 className="text-center text-3xl font-bold">Carrinho</h1>
        <div className="flex flex-col items-center px-4">
          {isLoading ? (
            <p>Carregando...</p>
          ) : cartItems.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            <>
              <div className="mt-10 w-full max-w-5xl">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b py-4"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="h-16 w-16 rounded object-cover"
                      />
                      <div>
                        <h2 className="text-lg font-bold">{item.name}</h2>
                        <p className="text-sm">{item.description}</p>
                        <p className="mt-1 font-bold">{item.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleDecreaseQuantity(item)}
                        className="rounded border px-3 py-1 text-sm"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleIncreaseQuantity(item)}
                        className="rounded border px-3 py-1 text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
                <div className="mt-4 flex justify-between">
                  <div></div>
                  <h3 className="text-2xl font-bold">
                    Total: R${total.toFixed(2).replace('.', ',')}
                  </h3>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="mt-2 rounded-lg bg-secondary px-6 py-2 font-bold text-white transition-colors duration-200 hover:bg-secondary-dark"
                  >
                    Finalizar compra
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        {itemToRemove && (
          <Modal
            isOpen={!!itemToRemove}
            onConfirm={confirmRemoveItem}
            onCancel={() => setItemToRemove(null)}
            title="Remover item"
            message={`Tem certeza de que deseja remover o item do carrinho?`}
          />
        )}
      </div>
    </>
  )
}

export default Cart
