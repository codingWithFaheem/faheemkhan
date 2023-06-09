/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors : {
        primary: '#0f288b' ,
        secondary :'#8978e0' ,
        darkPrimary: '',
        darkSecondary : ''
      }
    
    },
  },
  plugins: [],
}

