/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'float-gems': 'float-gems linear infinite',
        'float-3d': 'float-3d linear infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'sparkle': 'sparkle 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'gradient': 'gradient-shift 5s ease infinite',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'light-ray': 'light-ray 4s ease-in-out infinite',
        'ping-slow': 'ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'rotate-3d': 'rotate-3d linear infinite',
        'spin-slow': 'spin-slow linear infinite',
        'orbit': 'orbit linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'gem-sparkle': 'gem-sparkle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-20px) translateX(10px)' },
          '66%': { transform: 'translateY(10px) translateX(-10px)' },
        },
        'float-gems': {
          '0%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.3' },
          '50%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)', opacity: '0' },
        },
        'float-3d': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) translateZ(0px) rotateZ(0deg)', opacity: '0.3' },
          '25%': { transform: 'translateY(-40px) translateX(30px) translateZ(20px) rotateZ(90deg)', opacity: '0.5' },
          '50%': { transform: 'translateY(-80px) translateX(-20px) translateZ(-10px) rotateZ(180deg)', opacity: '0.7' },
          '75%': { transform: 'translateY(-120px) translateX(40px) translateZ(15px) rotateZ(270deg)', opacity: '0.4' },
          '100%': { transform: 'translateY(-200px) translateX(-30px) translateZ(0px) rotateZ(360deg)', opacity: '0' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1.5)' },
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        'light-ray': {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.3' },
        },
        'ping-slow': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        'rotate-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'rotate-3d': {
          '0%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
          '50%': { transform: 'perspective(1000px) rotateX(180deg) rotateY(180deg) rotateZ(180deg)' },
          '100%': { transform: 'perspective(1000px) rotateX(360deg) rotateY(360deg) rotateZ(360deg)' },
        },
        'spin-slow': {
          'from': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
          'to': { transform: 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)' },
        },
        'orbit': {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg) translateX(150px) rotate(-360deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gem-sparkle': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1.2) rotate(180deg)' },
        },
      },
    },
  },
  plugins: [],
}
