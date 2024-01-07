/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: "ubuntu",
      },
      colors: {
        "marine-blue": "hsl(213, 96%, 18%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
        "pastel-blue": "hsl(228, 100%, 84%)",
        "light-blue": "hsl(206, 94%, 87%)",
        "strawberry-red": "hsl(354, 84%, 57%)",
        "cool-gray": "hsl(231, 11%, 63%)",
        "light-gray": "hsl(229, 24%, 87%)",
        "border-gray": "hsl(231, 23%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
        white: "hsl(0, 0%, 100%)",
        background: "hsla(218, 100%, 97%, 1)",
      },
      fontSize: {
        heading: "32px",
        "body-lg": "16px",
        "body-md": "14px",
        "body-sm": "12px",
      },
      borderRadius: {
        lg: "15px",
        md: "10px",
        sm: "8px",
      },
      animation: {
        "step-swap": "slide-in .15s ease",
      },
      keyframes: {
        "slide-in": {
          from: {
            opacity: 0,
            transform: "translateX(-20px)",
          },
          to: {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      },
    },
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  safelist: ["justify-between", "justify-end", "justify-start"],
  plugins: [],
};
