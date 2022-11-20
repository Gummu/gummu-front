/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1d2123',
        light_gray: '##ffffff40',
        dark_alt: '#1A1E1F'
      },
      fontFamily: {
        Quicksand: ["Quicksand", "sans-serif"],
       },
    },
  },
  plugins: [],
}
