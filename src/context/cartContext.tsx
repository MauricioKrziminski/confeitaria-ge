'use client'
import React, { createContext, useContext, ReactNode } from 'react'
import useLocalStorage from '../hook/useLocalStorage'
import { CartItem, CartContextType } from '../types/cartTypes'

const CartContext = createContext<CartContextType | undefined>(undefined)

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cartItems', [])

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems((prevItems: CartItem[]) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id)
      if (existingItemIndex !== -1) {
        const newCartItems = [...prevItems]
        newCartItems[existingItemIndex].quantity += 1
        return newCartItems
      }
      return [...prevItems, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (itemId: string | number, removeAll: boolean) => {
    setCartItems((prevItems: CartItem[]) => {
      if (removeAll) {
        return prevItems.filter((item) => item.id !== itemId)
      } else {
        return prevItems
          .map((item) =>
            item.id === itemId
              ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
              : item,
          )
          .filter((item) => item.quantity > 0)
      }
    })
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
