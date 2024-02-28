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
    colors: {
      "black" : "#000",
      'white': '#ffffff',
      'holly': {
        '50': '#edfcf4',
        '100': '#d3f8e1',
        '200': '#aceeca',
        '300': '#75e0ac',
        '400': '#3dca89',
        '500': '#1aaf70',
        '600': '#0e8d5a',
        '700': '#0b714a',
        '800': '#0b5a3c',
        '900': '#0a4a33',
        '950': '#04251a',
    },    
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["black", "forest", "light"],
  }
}

