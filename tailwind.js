module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        graydarker: "#121212",
        graydarkest: "#000000",
        lightgray: "#F0F0F0",
        accent: "#3B48E3",
      },
      gridTemplateRows: {
        "12": "repeat(12, minmax(0, 1fr))",
      },
      gridRow: {
        "span-11": "span 11 / span 11",
      },
      inset: {
        "2": "0.5rem",
      },
      maxHeight: {
        "64": "16rem",
      },
    },
  },
  variants: [
    "dark",
    "dark-hover",
    "dark-focus",
    "dark-active",
    "dark-disabled",
    "dark-group-hover",
    "dark-focus-within",
    "dark-even",
    "dark-odd",
    "dark-placeholder",
    "responsive",
    "group-hover",
    "group-focus",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [require("tailwindcss-dark-mode")()],
};
