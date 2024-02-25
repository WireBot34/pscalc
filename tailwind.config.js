/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBG: '#016A70', 
        darkFG: '#FFFFDD'
      },
    },
  },
  plugins: [],
};
