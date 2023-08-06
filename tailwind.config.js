module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'roboto' : ['Roboto','sans-serif'],
        'titilium' : ['Titillium Web', 'sans-serif']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}