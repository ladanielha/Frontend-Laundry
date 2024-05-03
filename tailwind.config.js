module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    colors: {
      primary: '#0088DA',
      secondary: '#ecc94b',
    }
  }
}