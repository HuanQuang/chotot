/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    screens: {
      sm: { min: "540px" },
      md: { min: "680px" },
      lg: { min: "780px" },
      xl: { min: "840px" },
    },

    // screens: {
    //   xl: { max: "1279px" },
    //   // => @media (max-width: 1279px) { ... }

    //   lg: { max: "1023px" },
    //   // => @media (max-width: 1023px) { ... }

    //   md: { max: "767px" },
    //   // => @media (max-width: 767px) { ... }

    //   sm: { max: "639px" },
    //   // => @media (max-width: 639px) { ... }
    // },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
