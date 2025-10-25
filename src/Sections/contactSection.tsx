/* eslint-disable react/no-unescaped-entities */
'use client'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs'
import { MdEmail, MdLocationOn, MdAccessTime } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappNumber = '555194612103'
    const message = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}.\nEmail: ${formData.email}\nMensagem: ${formData.message}`,
    )
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="relative w-full py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-accent mb-4 text-center text-4xl font-bold drop-shadow-md"
        >
          Entre em Contato
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-accent-light mb-12 text-center text-lg"
        >
          Estamos prontos para atendê-lo!
        </motion.p>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-accent mb-6 text-2xl font-bold">
                Informações de Contato
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary mt-1 flex h-12 w-12 items-center justify-center rounded-full">
                    <MdEmail className="text-2xl text-white" />
                  </div>
                  <div>
                    <h4 className="text-accent font-semibold">Email</h4>
                    <a
                      href="mailto:contato@confeitariadage.com"
                      className="text-accent-light hover:underline"
                    >
                      contato@confeitariadage.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]">
                    <BsWhatsapp className="text-2xl text-white" />
                  </div>
                  <div>
                    <h4 className="text-accent font-semibold">WhatsApp</h4>
                    <a
                      href="https://wa.me/555194612103"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-light hover:underline"
                    >
                      (51) 9461-2103
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary-light mt-1 flex h-12 w-12 items-center justify-center rounded-full">
                    <MdLocationOn className="text-2xl text-white" />
                  </div>
                  <div>
                    <h4 className="text-accent font-semibold">Localização</h4>
                    <p className="text-accent-light">Porto Alegre, RS</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary mt-1 flex h-12 w-12 items-center justify-center rounded-full">
                    <MdAccessTime className="text-2xl text-white" />
                  </div>
                  <div>
                    <h4 className="text-accent font-semibold">
                      Horário de Atendimento
                    </h4>
                    <p className="text-accent-light">Seg - Sáb: 9h às 18h</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-accent mb-4 text-xl font-semibold">
                Siga-nos nas Redes Sociais
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white transition-transform duration-300 hover:scale-110"
                >
                  <BsInstagram size={24} />
                </a>
                <a
                  href="https://wa.me/555194612103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-300 hover:scale-110"
                >
                  <BsWhatsapp size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="rounded-2xl bg-white p-8 shadow-2xl"
          >
            <h3 className="text-accent mb-6 text-2xl font-bold">
              Envie uma Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-accent mb-2 block text-sm font-medium"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome"
                  className="focus:border-secondary focus:ring-secondary/20 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-accent mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  className="focus:border-secondary focus:ring-secondary/20 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-accent mb-2 block text-sm font-medium"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Digite sua mensagem aqui..."
                  className="focus:border-secondary focus:ring-secondary/20 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2"
                ></textarea>
              </div>

              <button
                type="submit"
                className="from-primary to-primary-light w-full rounded-lg bg-gradient-to-r px-6 py-3 font-bold text-white transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                Enviar Mensagem via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
