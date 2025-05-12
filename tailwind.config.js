/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6C63FF', // Vibrant purple
          hover: '#5A52E0',
        },
        secondary: {
          DEFAULT: '#00F5A0', // Neon green
          hover: '#00E091',
        },
        dark: {
          DEFAULT: '#121212', // Near black
          light: '#1E1E1E',   // Dark gray
          lighter: '#2D2D2D', // Medium dark gray
        },
        accent: '#FF3D00',    // Vibrant orange accent
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Audiowide', 'cursive'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'tech-pattern': "url('/images/tech-pattern.svg')",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(108, 99, 255, 0.5)' },
          '100%': { boxShadow: '0 0 15px rgba(108, 99, 255, 0.8), 0 0 30px rgba(108, 99, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
