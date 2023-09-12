/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Roboto: ["Roboto Slab", "serif"],
      },
      backgroundImage: {
        space: "url('/static/background/space.svg')",
      },
    },
  },
  plugins: [],
};
