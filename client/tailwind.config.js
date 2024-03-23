/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '475px',
    },
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: 'hsl(223 30% 9%)',
        'secondary-dark': 'hsl(223 36% 14%)',
        'secondary-light': 'hsl(223 23% 46%)',
        accent: 'hsl(0 97% 63%)',
      },
    },
  },
};
