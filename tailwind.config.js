/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    extend: {
      colors: {
        primary: "#101828",
        secondary: "#7F56D9",
        navColor: "#0ca39a",
      },
    },
  },
  daisyui: {
    themes: [],
    base: true,
    styled: true,
    utils: true,
    prefix: "",
  },
  plugins: [require("daisyui")],
};

