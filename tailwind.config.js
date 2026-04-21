/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        newsreader: ['Newsreader', 'serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
