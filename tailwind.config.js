module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black': '#000000',
        'purple': '#6b3fa0',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'red': 'red',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
    },
    plugins: [require("daisyui")],
  }