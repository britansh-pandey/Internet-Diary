/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        antique: '#d4af37',
        darkBg: '#0a0a0a',
      },
      fontFamily: {
        mono: ['"Courier New"', 'monospace'],
        serif: ['Georgia', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'fadeIn': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}