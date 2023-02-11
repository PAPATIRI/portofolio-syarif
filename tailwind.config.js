/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    backgroundSize: {
      "200%": "200%",
      "300%": "300%",
      "400%": "400%",
    },
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
        lefttoright: {
          "0%": { "background-position": "left" },
          "100%": { "background-position": "right" },
        },
      },
      animation: {
        "skeleton-loading": "skeleton 2s infinite",
        "left-to-right": "lefttoright 3s infinite alternate",
      },
    },
  },
  plugins: [],
};
