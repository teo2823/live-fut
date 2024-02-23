/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      "score": "url('/src/assets/images/bg-scoree.jpg')",
      
    }},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["forest", "dark", "light"],
  }
}

