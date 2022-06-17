module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A9943",
        lightBlack: "#00000099",
        yellowColor: "#FBBF24",
        lightGreen: "#ddeede",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
