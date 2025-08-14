/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hitesh: {
          primary: '#FF6B35',
          secondary: '#F7931E',
          dark: '#2C3E50'
        },
        piyush: {
          primary: '#4F46E5',
          secondary: '#7C3AED',
          dark: '#1E293B'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}