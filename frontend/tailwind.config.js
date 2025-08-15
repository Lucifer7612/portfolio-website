/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { light: "#FFFFFF", dark: "#0D1117" },
        accent: { light: "#0EA5E9", dark: "#38BDF8" },
        text: { light: "#1E293B", dark: "#E6EDF3" },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
