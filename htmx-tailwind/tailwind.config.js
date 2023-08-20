/*@type {import('tailwindcss').Config}*/
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['"Roboto Condensed"'],
        'poppins': ['"Poppins"']
      }
    },
  },
  plugins: [],
}

