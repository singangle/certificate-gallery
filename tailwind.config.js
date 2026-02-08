/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        matcha: {
          50: '#f7fcf5',
          100: '#ecf8e8',
          200: '#d5efcc',
          300: '#b2dfa1',
          400: '#87c76f',
          500: '#62ab48',
          600: '#4a8d34',
          700: '#3b702b',
          800: '#325925',
          900: '#294921',
          DEFAULT: '#87c76f', // matcha-400 roughly
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        cursive: ['"Ananda Black"', 'cursive'],
      }
    },
  },
  plugins: [],
}
