/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        app: 'url(/app-bg.png)'
      },

      fontFamily: {
        sans: 'Roboto, sans-serif'
      },

      colors: {
        gray: {
          100: '#C4C4CC',
          300: '#8D8D99',
          600: '#323238',
          800: '#202024',
          900: '#09090A',
        }
      }
    },
  },
  plugins: [],
}
