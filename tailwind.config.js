/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#83c5be',
          DEFAULT: '#006d77',
          dark: '#004f58',
        },
        secondary: {
          light: '#ffddd2',
          DEFAULT: '#e29578',
          dark: '#c76f5b',
        },
        background: '#f8f9fa',
        paper: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'pixel': '2px 2px 0 rgba(0, 0, 0, 0.1)',
        'pixel-md': '4px 4px 0 rgba(0, 0, 0, 0.1)',
        'pixel-lg': '6px 6px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
