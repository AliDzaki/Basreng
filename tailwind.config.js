/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      colors: {
        'primary': "#FF0000",
        'line': "#FFE8C5",
        'second': "#FFA27F"
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif'],      
      }
    },
  },
  plugins: [],
}

