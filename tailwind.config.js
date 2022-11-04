/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      "#0000008c": "#0000008c",
      "#00000047": "#00000047",
      "#00000082": "#00000082",
      "#919aa3": "#919aa3",
      "#303548": "#303548",
      "#505458": "#505458",
      boxShadow: {
        bottom: "0 0 11px 0 rgb(0 0 0 / 12%)",
        right: "0 0 11px rgb(0 0 0 / 12%)",
        xl: "0 1px 11px 0 rgb(0 0 0 / 12%)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
