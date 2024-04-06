/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "sans-serif"],
        open_sans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "hero-image": "url('/src/components/Home/assets/doink.png')",
      },
      colors: {
        darkBlue: "#0D1A32",
      },
    },
  },
  plugins: [],
}

