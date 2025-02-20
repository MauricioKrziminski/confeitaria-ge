import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        'custom-lg': '1600px',
        'custom-xl': '1920px',
      },
    },
  },
  plugins: [],
}

export default config
