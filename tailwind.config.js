/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      banner: "url('./assets/banner.jpg')",
      banner1: "url('./assets/bg.jpeg')",
    },
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
      robo: ["Roboto Condensed", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
