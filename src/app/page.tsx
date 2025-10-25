'use client'
/* eslint-disable react/no-unescaped-entities */
import { Header } from '@/components/header'
import { AboutSection } from '@/Sections/aboutSection'
import { HomeSection } from '@/Sections/homeSection'
import { Footer } from '@/components/footer'
import { useEffect } from 'react'
import { ProductsSection } from '@/Sections/productSection'
import { DifferentialsSection } from '@/Sections/differentialsSection'
import { HowItWorksSection } from '@/Sections/howItWorksSection'
import { ContactSection } from '@/Sections/contactSection'
import { WhatsAppButton } from '@/components/whatsappButton'

export default function Home() {
  useEffect(() => {
    const scrollToSection = () => {
      const params = new URLSearchParams(window.location.search)
      const section = params.get('section')
      if (section) {
        const sectionElement = document.getElementById(section)
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    scrollToSection()
  }, [])
  return (
    <div className="overflow-x-hidden">
      <Header />
      <WhatsAppButton />
      <main className="overflow-x-hidden">
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-light to-[#B3D9F2] py-20"
        >
          <HomeSection />
          <div className="relative w-full overflow-hidden">
            <svg
              className="block w-full"
              style={{ display: 'block', marginBottom: '-1px' }}
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                fill="#E8F4FA"
                fillOpacity="1"
                d="M0,224L80,202.7C160,181,320,139,480,138.7C640,139,800,181,960,208C1120,235,1280,245,1360,250.7L1440,256L1440,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        <section
          id="presentation"
          className="relative overflow-hidden bg-[#E8F4FA] py-20"
        >
          <AboutSection />
          <div className="relative w-full overflow-hidden">
            <svg
              className="block w-full"
              style={{ display: 'block', marginBottom: '-1px' }}
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                fill="#D4E9F7"
                fillOpacity="1"
                d="M0,256L80,234.7C160,213,320,171,480,149.3C640,128,800,128,960,154.7C1120,181,1280,235,1360,250.7L1440,266L1440,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#D4E9F7] py-20">
          <DifferentialsSection />
          <div className="relative w-full overflow-hidden">
            <svg
              className="block w-full"
              style={{ display: 'block', marginBottom: '-1px' }}
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,224L80,202.7C160,181,320,139,480,138.7C640,139,800,181,960,208C1120,235,1280,245,1360,250.7L1440,256L1440,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-20">
          <HowItWorksSection />
          <div className="relative w-full overflow-hidden">
            <svg
              className="block w-full"
              style={{ display: 'block', marginBottom: '-1px' }}
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                fill="#E8F4FA"
                fillOpacity="1"
                d="M0,256L80,234.7C160,213,320,171,480,149.3C640,128,800,128,960,154.7C1120,181,1280,235,1360,250.7L1440,266L1440,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        <section
          id="representatives"
          className="relative overflow-hidden bg-[#E8F4FA] py-20"
        >
          <ProductsSection />
          <div className="relative w-full overflow-hidden">
            <svg
              className="block w-full"
              style={{ display: 'block', marginBottom: '-1px' }}
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                fill="#B3D9F2"
                fillOpacity="1"
                d="M0,224L80,202.7C160,181,320,139,480,138.7C640,139,800,181,960,208C1120,235,1280,245,1360,250.7L1440,256L1440,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden bg-[#B3D9F2] py-20"
        >
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  )
}
