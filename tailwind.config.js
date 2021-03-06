const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        label: "auto 1fr",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
      spacing: {
        108: "28rem",
      },
      colors: {
        "theme-fg": "#97D700",
        "theme-dark": "#092700",
        "theme-bg": "#161616",
      },
    },
  },
  variants: {
    extend: {
      dropShadow: ["hover", "focus"],
      translate: ["group-hover"],
      rotate: ["group-hover"],
      borderWidth: ["hover", "focus"],
      display: ["group-hover", "hover", "focus"],
      visibility: ["group-hover", "hover", "focus"],
      pointerEvents: ["group-hover", "hover", "focus"],
      ringWidth: ["hover", "active"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
