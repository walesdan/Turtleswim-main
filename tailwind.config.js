module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: (theme) => theme("colors"),
      backgroundOpacity: (theme) => theme("opacity"),
      borderColor: (theme) => theme("colors"),
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      boxShadow: {
        testimonial: "0px 9px 32px rgba(89, 92, 219, 0.05)",
      },
      colors: {
        transparent: "transparent",
        white: "#FFFFFF",
        bluedark: "#1B1C57",
        orange: "#F59E0B",
        green700: "#047857",
        green500: "#10B981",
        green100: "#D1FAE5",
        gray: "#888B97",
        red500: "#EF4444",
        red100: "#FEE2E2",
        blue700: "#1D4ED8",
        blue100: "#DBEAFE",
        lightgreen: "#90EE90",
        bgblack: "#000000",
        'blue-600': '#2563EB',
        'blue-700': '#1D4ED8',
        'blue-500': '#3B82F6',
        'sky-blue': '#BEE2FD',
        denim: '#013220',
        bg: '#EFF5FF',
        'light-blue': '#ABBCFF',
        grey: '#9699AA',
        red: '#EE374A',
        'border-grey': '#D6D9E6',
        purple: '#483EFF',
        'very-light-grey': '#F8F9FF',
      },
      height: {
        none: "none",
        auto: "auto",
        full: "100%",
        screen: "100vh",
      },
      width: {
        none: "none",
        auto: "auto",
        full: "100%",
        screen: "100vw",
        '2/3': '66.666667%',
        '1/3': '33.333333%',
      },
      opacity: {
        inherit: "inherit",
        0: "0",
        5: ".05",
        15: ".15",
        25: ".25",
        35: ".35",
        50: ".5",
        75: ".75",
        80: ".80",
        90: ".90",
        100: "1",
      },
      fontSize: {
        '2xl': '1.5rem',
        'lg': '1.125rem',
        'sm': '0.875rem',
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fill: (theme) => theme("colors"),
    stroke: (theme) => theme("colors"),
    textColor: (theme) => theme("colors"),
  },
  plugins: [],
};