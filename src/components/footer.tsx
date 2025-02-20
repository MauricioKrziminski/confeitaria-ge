/* eslint-disable @next/next/no-img-element */
import { BsInstagram, BsYoutube, BsTiktok } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

export function Footer() {
  return (
    <footer className="bg-[#FFC0CB] py-6 text-[#2B3A67]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between px-6 sm:flex-row">
        <div className="mb-4 text-center sm:mb-0 sm:text-left">
          <p className="mb-2 text-lg font-semibold">Contate-nos</p>
          <a
            href="mailto:contato@confeitariadage.com"
            className="flex items-center justify-center text-sm text-[#3E497A] underline sm:justify-start"
          >
            <MdEmail size={20} className="mr-2" />
            contato@confeitariadage.com
          </a>
        </div>

        <div className="mb-4 text-center sm:mb-0">
          <span className="mb-2 block text-lg font-semibold">Siga-nos</span>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3E497A] transition-transform duration-300 hover:scale-125"
            >
              <BsInstagram size={22} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3E497A] transition-transform duration-300 hover:scale-125"
            >
              <BsYoutube size={22} />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3E497A] transition-transform duration-300 hover:scale-125"
            >
              <BsTiktok size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-[#3E497A]">
        <p>Copyright © {new Date().getFullYear()} Confeitaria da Ge.</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
