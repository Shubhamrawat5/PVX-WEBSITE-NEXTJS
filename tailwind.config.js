/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
