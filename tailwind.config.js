/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      screens:{
        'custom': '1000px',
        'prueba': '840px',
      }
    },
  },
  plugins: [],
}
