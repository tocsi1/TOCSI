/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          900: '#2e1065', // Deep Violet for TOCSI brand
          700: '#6d28d9',
          600: '#7c3aed',
        },
        yellow: {
          400: '#fbbf24', // Gold accent for buttons
        }
      },
    },
  },
  plugins: [],
}