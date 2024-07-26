/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: "#d2e3fc",
        black: "#000",
        darkslategray: "#33363f",
        white: "#fff",
        mediumblue: "#0629f1",
        whitesmoke: "#edf1f2",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        "18xl": "37px",
        "11xl": "30px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "11xl": "30px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq600: {
        raw: "screen and (max-width: 600px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
