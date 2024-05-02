/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
      hazelWood: "#bdb7ac",
      merigold: {
        100: "#FCAE1E",
        200: "#FFAD4A",
        300: "#BF8237",
        400: "#805725",
        500: "#402B12",
      },
      navy: {
        100: '#3D5AFF',
        100:'#2237B3',
      }
    },
  },
  plugins: [],
};


// emerald: {
//         100: "#57FFDB",
//         200: "#46B39B",
//       },