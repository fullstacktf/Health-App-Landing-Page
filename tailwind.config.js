module.exports = {
  theme: {
    fontFamily: {
      display: ["Zilla\\ Slab", "sans-serif"],
      body: ["Zilla\\ Slab", "sans-serif"]
    }
  },
  variants: {},
  plugins: [
    require("tailwind-percentage-heights-plugin")(),
    require("tailwindcss-elevation")(["responsive"])
  ]
};
