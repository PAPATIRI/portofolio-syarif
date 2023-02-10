/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "milk-white": "#EEEEEE",
        "milk-cyan": "#00ADB5",
        "milk-coffe": "#393E46",
        "milk-choco": "#222831",
      },
      keyframes: {
        skeleton: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
      animation: {
        "skeleton-loading": "skeleton 2s infinite",
      },
    },
  },
  plugins: [],
};
