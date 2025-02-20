import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/cartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Confeitaria da Ge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CartProvider>
      <html lang="en" className="antialiased">
        <body className={inter.className}>
          <link rel="icon" href="/assets/LogoConfeitaria3.png" sizes="any" />
          {children}
        </body>
      </html>
    </CartProvider>
  )
}
