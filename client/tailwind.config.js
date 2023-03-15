/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "bright-yellow": "#FFEE32",
      "main-yellow": "#FFD100",
      "main-dark": "#202020",
      "pale-dark": "#333533",
    },
    extend: {
      backgroundImage: {
        "doc-gif": "url('./assets/Untitled design.gif')",
        "full-gif": "url('./assets/background.gif')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // require("@tailwindcss/aspect-ratio"),
  ],
};
