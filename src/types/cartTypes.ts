export interface CartItem {
  id: number
  name: string
  description: string
  price: string
  imageUrl: string
  quantity: number
}

export interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (itemId: number, removeAll: boolean) => void
}
