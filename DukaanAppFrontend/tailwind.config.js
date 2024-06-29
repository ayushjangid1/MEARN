/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': "#ffffff",
        'gray-text': "#3f3f46",
        'blue-500': "#63a5cf",
        'blue-400': "#146eb4",
        'blue-300': "#0e4f82",
        'gray-100': "#e6e6e6",
        'off-white': "#fafafa",
        'gray-200': "#808080",
        'off-white-100': "#F2F2F2",
        'dark-blue': "#1e2640"

      }
    },
  },
  plugins: [],
}

