/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        dm: ['var(--font-dm-sans)', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#8b5cf6',
          2: '#c4b5fd',
        },
        amber: '#f59e0b',
      },
      animation: {
        'bulb-flicker': 'bulb-flicker 7s ease-in-out infinite',
        'lamp-swing': 'lamp-swing 1.05s cubic-bezier(.36,.07,.19,.97) both',
        'av-float': 'av-float 5.5s ease-in-out infinite',
        'aura-pulse': 'aura-pulse 5s ease-in-out infinite',
        'blob-shift': 'blob-shift 10s ease-in-out infinite',
      },
      keyframes: {
        'bulb-flicker': {
          '0%, 86%, 100%': { opacity: '1' },
          '88%': { opacity: '.5' },
          '90%': { opacity: '1' },
          '93%': { opacity: '.7' },
          '95%': { opacity: '1' },
        },
        'lamp-swing': {
          '0%':   { transform: 'rotate(0)' },
          '18%':  { transform: 'rotate(9deg)' },
          '38%':  { transform: 'rotate(-6.5deg)' },
          '56%':  { transform: 'rotate(3.5deg)' },
          '72%':  { transform: 'rotate(-1.5deg)' },
          '85%':  { transform: 'rotate(.5deg)' },
          '100%': { transform: 'rotate(0)' },
        },
        'av-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'aura-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%':      { transform: 'scale(1.06)', opacity: '.75' },
        },
        'blob-shift': {
          '0%, 100%': { borderRadius: '60% 40% 55% 45% / 45% 55% 40% 60%' },
          '33%':      { borderRadius: '45% 55% 40% 60% / 60% 40% 55% 45%' },
          '66%':      { borderRadius: '55% 45% 60% 40% / 40% 60% 45% 55%' },
        },
      },
    },
  },
  plugins: [],
}
