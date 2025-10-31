/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // class-based dark mode
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
  "spin-slow": "spin 6s linear infinite",
},

      colors: {
        darkbg: "#0f172a", // dark blue
        darktext: "#e0f2fe", // light text
        primary: "#7c3aed", // purple
        primaryDark: "#5b21b6", // darker purple
      },
    },
  },
  plugins: [],
};
