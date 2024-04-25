import tailwind from "./packages/tailwind/src/index";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./packages/**/*.{ts,tsx,html}"],
  theme: {
    extend: {
      colors: tailwind.theme.colors,
    },
  },
  plugins: [],
};
