module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./src/**/*.css", "./js/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        md: "550px",
      },
      width: {
        md: "330px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
