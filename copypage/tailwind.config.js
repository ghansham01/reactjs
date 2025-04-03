/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'border-gradient': 'borderMove 3s infinite',
      },
      keyframes: {
        borderMove: {
          '0%': { borderColor: 'red' },
          '25%': { borderColor: 'blue' },
          '50%': { borderColor: 'green' },
          '75%': { borderColor: 'yellow' },
          '100%': { borderColor: 'red' },
        }
      }
    },
  },
  plugins: [],
}