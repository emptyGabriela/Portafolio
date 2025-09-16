/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: { colors: {
        brand: {
          50: "#ffffff",
          100: "#ffffff",
          200: "#ffffff",
          300: "#e5eaf2",
          400: "#d1dbe8",
          500: "#b5c5da",
          600: "#9ab0cc",
          700: "#7f9bbf",
          800: "#6485b1",
          900: "#4f719e"
        }
      } } }
  },
  plugins: [],
};
