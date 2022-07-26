/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        vanilla: '#F6F6F6',
        ltGray: '#E8E8E8',
        dkGray: '#333333',
        crimson: '#990100',
        ltRed: '#B90504',
      },
    },
  },
  plugins: [],
}
