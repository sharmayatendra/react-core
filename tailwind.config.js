/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
    fontFamily: {
      sans: ["ProximaNova", "arial", "Helvetica Neue", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      orange: {
        default: "#FC8019",
        light: "#DB7C38",
        pale: "#E1B055",
      },
      gray: {
        light: "#686B78",
        default: "#808080",
        dark: "#171A29",
        xlight: "#B2BEB5",
      },
      red: "#FF6161",
      white: "#FFFFFF",
      black: "#000000",
      green: "#48C479",
      brown: "#8A584B",
      cyan: "#5D8Ed5",
    },
  },
  plugins: [],
};
