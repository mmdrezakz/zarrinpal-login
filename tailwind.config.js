/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      iran: "iran",
      iranBold: "iranBold",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#C9C849",
        },
        secondary: {
          DEFAULT: "#FFFE00",
        },
        background: {
          DEFAULT: "#eee;",
        },
      },
    },
  },
  plugins: [],
};
