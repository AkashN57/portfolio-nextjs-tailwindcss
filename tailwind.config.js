/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    './pages/**/*.jsx',
    './components/**/*.jsx',
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons:"burtons",
      }
    },
  },
  plugins: [],
}
