/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      mono: ['Alkatra',...defaultTheme.fontFamily.sans],
      text:[ 'Oswald', ...defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        portfoliotheme: {
          primary: "#ff476b",
          secondary: "#19D3AE",
          accent: "#FCD842",
          neutral: "#AFB7CA",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
