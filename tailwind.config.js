/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "milk-white": "#EEEEEE",
        "milk-cyan": "#00ADB5",
        "milk-coffe": "#393E46",
        "milk-choco": "#222831",
      },
    },
  },
  plugins: [],
};
