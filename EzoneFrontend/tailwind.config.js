/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#010752',
        'fog-cream': '#f5f5f5',
      },
      fontFamily: {
        heading: ["Cardo" , "sans-serif"],
        subHeading: ["Poppins" , "sans-serif"],
      },
    },
  },
  plugins: [],
}