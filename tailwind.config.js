module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: "jit",
  theme: {
      screens: {
          '-3xl': { max: '1600px' },
          '-2xl': { max: '1535px' },
          '-xl': { max: '1279px' },
          '-lg': { max: '1100px' },
          '-md': { max: '767px' },
          '-sm': { max: '640px' },
          'sm': '640px',
          'md': '767px',
          'lg': '1100px',
          'xl': '1280px',
          '2xl': '1535px',
          '3xl': '1600px',
      },
      extend: {

      },
  },
  plugins: [],
};