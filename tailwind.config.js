/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // enable manual (class-based) dark mode
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}', // if you're using app directory (Next 13+)
    ],
    theme: {
      extend: {},
    },
    plugins: {
        "@tailwindcss/postcss": {},
    },
  };
  