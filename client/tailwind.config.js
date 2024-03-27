/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      custom: ["custom-font", "sans-serif"],
      primary: ['Montserrat', 'sans-serif'],
    },
    container: {
      center: true,
    },
    screens: {
      xxl: { max: "1600px" },

      xl: { max: "1399px" },

      lg: { max: "1199px" },

      md: { max: "991px" },

      sm: { max: "767px" },

      xs: { max: "576px" },
    },
    extend: {
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,},
      backgroundImage: {
        radial: "radial-gradient(115% 166% at 0% 100%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        me: "0 0 10px rgba(0,0,0,0.1)",
        sm: "0 0 4px rgba(0,0,0,0.1)",
      },
      width: {
        nine: "90%",
      },
      colors: {
        primary: "#144DDF",
        "primary-dark": "#512da8",
        gradient: ["#0041e9", "#5445e2"],
        dark: "#333",
        "dark-50": "#777",
        light: "#fefefe",
        "light-50": "#eee",
      },
    },
  },
  plugins: [],
}

