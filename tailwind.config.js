module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '4px 4px 12px rgba(67, 130, 248, 0.12)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        '900': '900px',
      },
    },
  },
  plugins: [],
}

