/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      gl: ['48px', '56px'],
      xl: ['24px', '32px'],
      lx: ['72px', '88px'],
      "2xl": ['88px', '96px'],
      "2lx": ['96px', '102px'],
    },
    extend: {},
  },
  width: {
    '128': '90rem',
  },
  plugins: [],
}

