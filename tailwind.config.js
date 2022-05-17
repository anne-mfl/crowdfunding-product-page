module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'headerImage': 'url("../src/images/image-hero-desktop.jpg")',
    },
    fontFamily: {
      'commissioner' : ['Commissioner', 'sans-serif']
    },
    extend: {
      colors: {
        moderateCyan: 'hsl(176, 50%, 47%)',
        darkCyan: 'hsl(176, 72%, 28%)',
        darkGray: 'hsl(0, 0%, 48%)',
        backgroundWhite: '#FAFAFA',
        borderLight: '#EBEBEB',
        borderMiddle: '#F6F6F6',
        borderDark: '#CBCBCB'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}