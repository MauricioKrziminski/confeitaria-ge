export interface CartItem {
  id: string | number
  name: string
  description: string
  price: string
  imageUrl: string
  quantity: number
}

export interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (itemId: string | number, removeAll: boolean) => void
}
