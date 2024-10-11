/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2d98da',
          DEFAULT: '#2d98da',
          dark: '#c0392b'
        },
        primary100: {
          light: '#73c9ff',
          DEFAULT: '#73c9ff',
          dark: '#c0392b'
        },
        secondary: {
          light: '#fc5c65',
          DEFAULT: '#eb3b5a'
        },
        neutral: {
          light: '#f5f5f5',
          dark: '#2c3e50'
        }
      }
    }
  },
  plugins: []
}
