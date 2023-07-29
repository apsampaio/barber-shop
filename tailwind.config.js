/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      title: ["Karantina", "cursive"],
      inter: ["Inter", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        background: "#151515",
        foreground: "#1f1f1f",
        primary: "#d6a354",
        secondary: "#8e6e3c",
      },
    },
  },
  plugins: [],
};
