/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    colors: {
      colorPicker: {
        biruBG: "#008DDA",
        krem: "#F7EEDD",
        submit: "#41C9E2",
        cancel: "#ACE2E1",
        logout: "#ACE2E1",
      },
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
