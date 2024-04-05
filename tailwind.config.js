/** @type {import('tailwindcss').Config} */

const { addDynamicIconSelectors } = require("@iconify/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sega: ["sega", "sans-serif"],
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
};

