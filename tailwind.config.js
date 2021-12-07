module.exports = {
  purge: [
    './pages/**/*.{tsx}', './components/**/*.{tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'kaushan': '"Kaushan Script"',
     },
    extend: {
      colors: {
        'myColor': '#3e7c17',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
