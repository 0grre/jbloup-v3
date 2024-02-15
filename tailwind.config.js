/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ocr-a': ['ocr-a-std', 'sans-serif'],
        'museo': ['museo-sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

