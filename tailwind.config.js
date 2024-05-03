/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      colorPicker : {
        biruBG : '#008DDA',
        krem : '#F7EEDD',
        submit: '#41C9E2',
        cancel : '#ACE2E1',
        logout : '#ACE2E1',
      }

    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}