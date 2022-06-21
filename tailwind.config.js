/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        gold: '#fca311',
        navy: '#14213d',
        'light-navy': '#4a4e69',
        smokey: '#8d99ae',
      },
    },
  },
  plugins: [],
};
