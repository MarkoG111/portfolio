/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#fa541c",
      },
      fontFamily: {
        Roboto: ["Onest, sans-serif"],
      },
      container: {
        padding: "32px",
        center: true,
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
    },
    fontSize: {
      s: "8px",
      m: "12.5px",
      l: "16.5px",
      xl: "19.5px",
      "1xl": "24px",
      "2xl": "27.5px",
      "2xxl": "33px",
      "3xl": "48px",
      "4xl": "80px",
    },
  },
  plugins: [],
};
