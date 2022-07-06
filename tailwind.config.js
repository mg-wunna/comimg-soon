/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      walone: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#7FB438',
        secondary: '#754B23'
      },
      animation: {
        heartbeat: 'heartbeat 2s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite reverse forwards'
      },
      keyframes: {
        heartbeat: {
          from: {
            transform: 'scale(1)',
            'animation-timing-function': 'ease-out'
          },
          '10%': {
            transform: 'scale(0.91)',
            'animation-timing-function': 'ease-in'
          },
          '17%': {
            transform: 'scale(0.98)',
            'animation-timing-function': 'ease-out'
          },
          '33%': {
            transform: 'scale(0.87)',
            'animation-timing-function': 'ease-in'
          },
          '45%': {
            transform: 'scale(1)',
            'animation-timing-function': 'ease-out'
          }
        }
      },
      plugins: []
    }
  }
};
