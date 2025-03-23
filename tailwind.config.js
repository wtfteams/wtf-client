/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#192230',
        secondary: '#ffcd00', 
        tertiary: '#2c2f38', 
        fourth: '#2c2f38', 
      },
      textColor: {
        textWhite: '#FFFFFF', 
        textBlack: '#000000', 
        textWhiteShade: '#FFFFFF80',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
        roboto: ['Roboto', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
