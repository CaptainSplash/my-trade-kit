module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#513d86',
        orange: '#f86406',
        green: '#17704d',
        lightCream: '#fffaf5',
      },
      fontFamily: {
        specialGothic: ['Special Gothic Expanded', 'sans-serif'],
        liter: ['Liter', 'sans-serif'],
      },
      backgroundImage: theme => ({
        'hero-gradient': 'linear-gradient(to right, #513d86, #f86406, #17704d)',
      }),
    },
  },
  plugins: [],
}