/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'border-flow': {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      animation: {
        'border-flow': 'border-flow 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'slide-up-delay-1': 'slide-up 0.5s ease-out 0.1s forwards',
        'slide-up-delay-2': 'slide-up 0.5s ease-out 0.2s forwards',
        'slide-up-delay-3': 'slide-up 0.5s ease-out 0.3s forwards'
      }
    },
  },
  plugins: [],
} 