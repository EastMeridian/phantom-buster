/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      background: "#F5F1EF",
      surface: "#FFFFFF",
      disabled: "#d9d4d0",
      primary: "#5273e8",
      secondaryText: "#73706e",
      primaryText: "#1e1e1f",
    },
  },
  plugins: [],
  fontFamily: {
    display: ["Inter"],
    body: ["Inter"],
  },
};
