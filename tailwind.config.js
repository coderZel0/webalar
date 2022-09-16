/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{js,jsx}"],
  theme: {
    extend: {
      screens:{
        sm:"482px",
        md:"786px"
      },
      colors:{
        grayishWhite:"#F0F0F0",
        brightWhite:"#FFFFFF",
        cyan:"#43DDE6",
        grayishBlue:"#364F6B",
        background:"#333333"
      }
    },
  },
  plugins: [],
}
