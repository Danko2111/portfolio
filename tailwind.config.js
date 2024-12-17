/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideIn: {
          "0%": {
            right: "-60%",
          },
          "85%": {
            right: "5%",
          },
          "100%": {
            right: "0",
          },
        },
        slideOut: {
          "0%": {
            right: "0",
          },
          "15%": {
            right: "5%",
          },
          "100%": {
            right: "-60%",
          },
        },
        dropDown: {
          "0%": {
            top: "-30px",
            opacity: "0",
          },
          "70%": {
            opacity: "0.2",
          },
          "100%": {
            top: "0px",
            opacity: "1",
          },
        },
        fadeIn: {
          "0%": {
            bottom: "-25px",
            opacity: "0",
          },
          "40%": {
            opacity: "0",
          },
          "100%": {
            bottom: "0px",
            opacity: "1",
          },
        },
      },
      animation: {
        slideIn: "slideIn 0.25s ease-out",
        slideOut: "slideIn 0.25s ease-out",
        dropDown: "dropDown 0.15s ease-out",
        fadeIn: "fadeIn 0.5s ease-in-out forwards 400ms",
      },
    },
  },
  plugins: [require("daisyui")],
};
