// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: "Poppins, sans-serif",
    },
    screens: {
      xs: "380px",
      sm: "540px",
      md: "720px",
      lg: "920px",
      xl: "1040px",
    },
    container: {
      center: true,
      screens: {
        lg: "1200px",
        xl: "1200px",
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        "cyan-hover": "#9be3e2",
        red: "hsl(0, 87%, 67%)",
        darkViolet: "hsl(257, 27%, 26%)",
        gray: "hsl(0, 0%, 75%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryLightGray: "#f0f1f6",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%)",
      },
      backgroundImage: {
        "boost-pattern-desktop": "url(../assets/images/bg-boost-desktop.svg)",
        "boost-pattern-mobile": "url(../assets/images/bg-boost-mobile.svg)",
        "shorten-pattern-mobile": "url(../assets/images/bg-shorten-mobile.svg)",
        "shorten-pattern-desktop":
          "url(../assets/images/bg-shorten-desktop.svg)",
      },
      maxWidth: {
        20: "24rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
