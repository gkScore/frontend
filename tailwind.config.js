/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_col: "#110912",
      },
      backgroundImage: {
        default_image: "url(/public/bgimage.svg)",
      },
    },
  },
  plugins: [],
};
