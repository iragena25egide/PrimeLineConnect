module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        boogaloo: ['"Boogaloo"', 'sans-serif'], 
      },
      fontFamily: {
        inder: ['"Inder"', 'sans-serif'], 
      },
      fontFamily: {
        poetsen: ['"Poetsen One"', 'sans-serif'], 
      },
      fontFamily: {
        sulphur: ['"Sulphur Point"', 'sans-serif'],
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      // animation: {
      //   typewriter: 'typewriter 3s steps(30, end) forwards',
      // },
      animation: {
        bubble: "bubble 6s ease-in-out infinite",
        "bubble-slow": "bubble 10s ease-in-out infinite",
      },
      keyframes: {
        bubble: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" },
        },
      },
    },
  },
  plugins: [],
};

