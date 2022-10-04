/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'linear-gradient(90.42deg, #B91DFF -20.6%, #2E3DFF 104.76%)',
        background: '#0B0511',
        font: '#FAFAFA',
        fontLight: '#B9B9B9',
        pros: 'rgba(11, 9, 12, 0.31)',
        tools: 'rgba(14, 7, 21, 0.31)',
        input: 'rgba(13, 6, 21, 0.41)'
      },
      backgroundImage: {
        primary: 'linear-gradient(90.42deg, #B91DFF -20.6%, #2E3DFF 104.76%)',
        landing: "url('./assets/landing_bg.svg')",
        blur: 'linear-gradient(90.42deg, rgba(185, 29, 255, 0.12) -20.6%, rgba(46, 61, 255, 0.12) 104.76%)'
      },
      gridTemplateColumns: {
        form: '2fr 1fr 1fr'
      }
    },
  },
  plugins: [],
}
