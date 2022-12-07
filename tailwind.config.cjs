/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landpage: "url('/assets/background.jpg')"
      }
    },
  },
  plugins: [],
}
