/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    colors: {
      "white":"#FFFFFF",
      "light":"#F8FAFC",
      "dark":"#0F172A",
      "primary":"#0ea5e9",
      "secondary":"#0F172A",
      "accent":"#B45309"
    },
    extend: {
      fontSize: {
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}

