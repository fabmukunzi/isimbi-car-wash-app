/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        primary: '#0077B6',
        secondary: '#F5F5F5',
        secondary_dark: '#D9D9D9',
        // gradient: 'linear-gradient(90deg, #1CB5E0 0%, #000851 100%)'
      },
    },
  },
  plugins: [],
};
