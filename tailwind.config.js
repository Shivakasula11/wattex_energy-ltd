/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'solar-primary': '#e11d48',
        'solar-deep': '#0f172a',
        'solar-sky': '#0ea5e9',
      },
    },
  },
  plugins: [],
}