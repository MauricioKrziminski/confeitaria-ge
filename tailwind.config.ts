import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        'custom-lg': '1600px',
        'custom-xl': '1920px',
      },
      colors: {
        primary: {
          DEFAULT: '#4A90E2', // Azul principal da logo
          light: '#7FBBDA',   // Azul claro
          dark: '#2B5A9E',    // Azul escuro
        },
        secondary: {
          DEFAULT: '#E84A5F', // Rosa/vermelho dos corações
          light: '#FF6B7A',   // Rosa claro
          dark: '#D1384A',    // Rosa escuro
        },
        accent: {
          DEFAULT: '#2B3A67', // Roxo/navy do texto
          light: '#3E497A',   // Roxo claro
          dark: '#1A2342',    // Roxo muito escuro
        },
      },
    },
  },
  plugins: [],
}

export default config
