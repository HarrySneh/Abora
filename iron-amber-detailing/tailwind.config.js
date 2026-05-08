/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        obsidian: "#050505",
        amberAccent: "#ff8a00",
      },

      fontFamily: {
        heading: ["Bebas Neue", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
};
