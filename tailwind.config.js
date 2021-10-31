module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      rotate: {
        "-0.25": "-0.25deg",
        "-0.5": "-0.5deg"
      },
      lineHeight: {
        0.75: "0.75"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
