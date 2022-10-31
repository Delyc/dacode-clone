/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "black-primary":"#3F3F46",
        "text-gray": "#676767",
        "black-secondary": "#3F4246"
      }
    },
  },
  plugins: [],
}