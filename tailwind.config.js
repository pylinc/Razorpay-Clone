/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
      mullish: ["Mulish", "sans-serif"],
    },
      colors: {
        'deep-blue': '#02042a',
        'light-blue': '#2b84ea',
        'light-blue-300': '#4b94ed',
        'light-blue-500': '#0b72e7',
        'green-light': '#61cea6',
        'gray-text': '#818597',
        'light-gray': '#e2e2e2',
        'gray-blue': '#344a6c',
        'deep-blue-head': '#162f56',
        'gray-2': '#525a76',
      },
    },
  },
  plugins: [],
}