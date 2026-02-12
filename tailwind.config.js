/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
          '2k': '2000px',
          '4k': '3800px',
        },
        maxWidth: {
          '8xl': '88rem',
          '9xl': '96rem',
        },
      colors: {
        maroon: '#8B1E3F',
      }
    },
  },
  plugins: [],
}