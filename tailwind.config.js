/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'kipepeo-black': '#1a1a1a',
        'kipepeo-green': '#22c55e',
        'kipepeo-dark-green': '#16a34a',
        'kipepeo-light-green': '#4ade80',
        'kipepeo-cream': '#fafafa',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(34, 197, 94, 0.85) 100%)",
        'wave-pattern': "url('data:image/svg+xml,%3Csvg width=\"1200\" height=\"120\" viewBox=\"0 0 1200 120\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z\" fill=\"%23fafafa\"/%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};