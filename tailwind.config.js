module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./src/**/*.css", "./js/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        md: "240px",
      },
      width: {
        md: "160px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
