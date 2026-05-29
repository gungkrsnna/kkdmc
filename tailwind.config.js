/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: '#1E3A5F',
        dark: '#1A1A1A',
        soft: '#F8F9FB',
      },

      boxShadow: {
        card: '0 4px 20px rgba(0,0,0,0.08)',
      },

      borderRadius: {
        xl2: '20px',
      },

    },
  },
  plugins: [],
}