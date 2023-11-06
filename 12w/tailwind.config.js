/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(247, 196, 55)",
        "primary-light": "rgb(247, 196, 55, 0.3)",
      },
    },
  },
  plugins: [],
};
