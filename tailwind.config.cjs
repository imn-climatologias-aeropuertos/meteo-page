/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      'red': '#dc2626',
      'blue': '#061027',
      'lightblue': '#1786d4',
      'white': '#fff',
      'gray': '#8492a6',
    },
  },
  plugins: [],
}
