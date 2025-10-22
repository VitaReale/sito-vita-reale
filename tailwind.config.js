/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./{App,components,services,types}.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F6EEDF',
        'secondary': '#2B282A',
        'tertiary': '#647F76',
        'accent': '#CAA15A',
        'error': '#BF6B49',
        'historical': '#566B74',
      },
      fontFamily: {
        'heading': ['Helvetica Now Display', 'sans-serif'],
        'body': ['Utopia Std', 'serif'],
      }
    },
  },
  plugins: [],
}