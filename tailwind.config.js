module.exports = {
  content: ["./**/*.{html,js}"],
  theme: { 
    extend: {
      colors: {
        darkgray: "hsl(0, 0%, 63%)",
        verydarkgray: "hsl(0, 0%, 27%)",
        black: "hsl(0, 0%, 0%)",
        white: "hsl(0, 0%, 100%)"
      },
      screens: {
        'sm': '440px'
      }
    },
  },
  plugins: [],
}
