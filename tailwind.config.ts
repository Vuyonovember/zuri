import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        zuri: {
          orange: '#DE2C00',
          purple: '#2D0A31',
          teal: '#008080',
          black: '#050505',
        }
      },
      fontFamily: {
        apple: ['system-ui', '-apple-system', 'sans-serif'],
        brush: ['Georgia', 'serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        aurora: 'aurora 22s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        aurora: {
          '0%': {
            transform: 'translate3d(-10%, -10%, 0) scale(1)',
          },
          '50%': {
            transform: 'translate3d(5%, 10%, 0) scale(1.1)',
          },
          '100%': {
            transform: 'translate3d(10%, -5%, 0) scale(1.05)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
export default config
