/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState } from 'react'
import { FaBars, FaShoppingCart } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
import NextLink from 'next/link'
import { Link } from 'react-scroll'
import { useCart } from '../context/cartContext'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export function Header() {
  const [activeSection, setActiveSection] = useState<string>('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartItems } = useCart()

  const uniqueItemCount = cartItems.length

  const pathname = usePathname()
  const isCartPage = pathname === '/cart'

  useEffect(() => {
    if (!isCartPage) {
      const handleScroll = () => {
        const sections = ['home', 'presentation', 'representatives', 'contact']
        const scrollTop = window.pageYOffset + window.innerHeight / 3

        sections.forEach((section) => {
          const element = document.getElementById(section)
          if (element) {
            const offsetTop = element.offsetTop
            const offsetBottom = offsetTop + element.offsetHeight

            if (scrollTop >= offsetTop && scrollTop < offsetBottom) {
              setActiveSection(section)
            }
          }
        })
      }

      handleScroll()
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    } else {
      setActiveSection('')
    }
  }, [isCartPage])

  const getIconClassName = (section: string) =>
    `relative cursor-pointer text-lg font-medium text-accent transition-all duration-300 ${
      activeSection === section ? 'text-primary' : 'hover:text-primary'
    }`

  const handleLinkClick = (section?: string) => {
    setIsMenuOpen(false)
    const homeSections = ['home', 'presentation', 'representatives', 'contact']

    if (homeSections.includes(section || '')) {
      if (window.location.pathname !== '/') {
        window.location.href = `/?section=${section}`
      }
    }
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-gray-200 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300">
      <div className="mx-auto flex w-full items-center justify-between p-3 lg:p-4">
        {/* Logo */}
        <div className="flex cursor-pointer items-center space-x-3 lg:ml-10">
          <NextLink href="/" onClick={() => handleLinkClick('/')}>
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="mt-2 h-12 w-12 self-center transition-transform duration-300 hover:scale-110"
            />
          </NextLink>
          <span className="flex h-12 cursor-default items-center text-2xl font-semibold text-primary transition-colors duration-300 hover:text-primary-dark">
            Confeitaria da Ge
          </span>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 40,
                duration: 0.7,
                ease: 'easeInOut',
              }}
              className="absolute right-0 top-full h-screen w-2/3 bg-white/90 lg:hidden"
            >
              <ul className="mt-36 flex h-full w-full flex-col items-center justify-start space-y-6">
                {['home', 'presentation', 'representatives', 'contact'].map(
                  (section) => (
                    <li key={section} className="relative">
                      <Link
                        to={section}
                        onClick={() => handleLinkClick(section)}
                        className={getIconClassName(section)}
                        smooth={true}
                        duration={500}
                      >
                        {section === 'home'
                          ? 'Home'
                          : section === 'presentation'
                            ? 'Sobre'
                            : section === 'representatives'
                              ? 'Catálogo'
                              : 'Contato'}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>

        <nav className="hidden lg:flex">
          <ul className="flex items-center space-x-6 xl:mr-48">
            {['home', 'presentation', 'representatives', 'contact'].map(
              (section) => (
                <li key={section} className="relative">
                  <Link
                    to={section}
                    onClick={() => handleLinkClick(section)}
                    className={getIconClassName(section)}
                    smooth={true}
                    duration={500}
                  >
                    {section === 'home'
                      ? 'Home'
                      : section === 'presentation'
                        ? 'Sobre'
                        : section === 'representatives'
                          ? 'Catálogo'
                          : 'Contato'}

                    {!isCartPage && activeSection === section && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 top-full mt-1 h-[3px] w-full bg-primary"
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30,
                          duration: 0.5,
                        }}
                      />
                    )}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex gap-4 md:gap-6">
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <CgClose size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <div className="relative">
            <NextLink href="/cart" passHref>
              <p className="mb-1 text-accent hover:text-primary lg:mr-10">
                <FaShoppingCart size={24} />
              </p>
            </NextLink>
            {uniqueItemCount > 0 && (
              <span className="absolute -right-3 top-3 rounded-full bg-primary px-1 text-xs font-bold text-white md:px-2 lg:right-6">
                {uniqueItemCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
