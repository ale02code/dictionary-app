/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['serif'],
        sans: ['sans-serif'],
        mono: ['monospace'],
      },

      spacing: {
        '90': '90%',
      },

      colors: {
        'gray-main': '#838383',
        'purple-main': '#A445ED',
      },
    },
  },
  plugins: [],
}