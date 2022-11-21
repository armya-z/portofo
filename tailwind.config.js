module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('../public/img/code.png')",
        hero1: "url('../public/img/hero1.jpg')",
        hero2: "url('../public/img/hero2.jpg')",
        hero3: "url('../public/img/hero3.jpg')",
        main2: "url('../public/img/main2.jpg')",
      },
    },
    keyframes: {
      "fade-in-down": {
        "0%": {
          opacity: "0",
          transform: "translateY(-20px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
      "fade-out-down": {
        from: {
          opacity: "1",
          transform: "translateY(0px)",
        },
        to: {
          opacity: "0",
          transform: "translateY(10px)",
        },
      },
      "fade-in-up": {
        "0%": {
          opacity: "0",
          transform: "translateY(10px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
      "fade-out-up": {
        from: {
          opacity: "1",
          transform: "translateY(0px)",
        },
        to: {
          opacity: "0",
          transform: "translateY(10px)",
        },
      },
    },
    animation: {
      "fade-in-down": "fade-in-down 1s ease-out ",
      "fade-out-down":
        "fade-out-down 0.5s ease-out",
      "fade-in-up": "fade-in-up 0.5s ease-out",
      "fade-out-up": "fade-out-up 0.5s ease-out",
    },
  },
  plugins: [],
};
