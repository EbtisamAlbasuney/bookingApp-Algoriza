/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{vue,ts,jsx,tsx,html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#2F80ED",
        "color-secondary": "#F2F2F2",
        "rose":"#FCEFCA",
        "dark":"#181818",
        "danger":"#FF0000",
        "par":"#333",
        "para":'#4F4F4F',
        "ylow":"#FFD723",
        "yoyo":"#F2C94C",
        "baby-blue":"#85E0AB",
        "gren":"#219653",
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
}

