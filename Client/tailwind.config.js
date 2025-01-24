/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            customGray: '#B5B5B5',
            yellowGreen: '#E6FC15',
            customBeige: '#E3F08E'
        }
      },
    plugins: [],
  }
  }