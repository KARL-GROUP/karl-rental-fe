/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: "mont",
        montHeavy: "montHeavy",
        montBold:"montBold"
      },
      colors:{
        "primary-gray" : "#1C1C1C",
        "primary-purple" : "#3F3CD4",
        "primary-background" : "#F3F2EF"
      },
      boxShadow:{
        '3xl': '0px 3px 20px rgba(255, 255, 255, 0.25)'
    },
  },
  plugins: [],
}
}