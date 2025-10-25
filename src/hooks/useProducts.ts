'use client'
import { useEffect, useState } from 'react'
import { client } from '@/lib/sanity'

export interface Product {
  _id: string
  name: string
  description: string
  price: string
  image: {
    asset: {
      _ref: string
      _type: string
    }
  }
  order?: number
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const query = `*[_type == "product"] | order(order asc, _createdAt desc) {
          _id,
          name,
          description,
          price,
          image,
          order
        }`
        
        const data = await client.fetch(query)
        setProducts(data)
      } catch (error) {
        console.error('Erro ao buscar produtos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading }
}
