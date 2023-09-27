/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        chomsky: ["Chomsky"],
        crimson: ["Crimson Text"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
