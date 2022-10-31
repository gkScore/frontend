/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
      },
      backgroundImage: {
        default_image: "url(/public/bgimage.svg)",
      },
    },
  },
  plugins: [],
};
