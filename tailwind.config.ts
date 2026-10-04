import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff7f8',
          100: '#ffe7ec',
          200: '#ffd1dc',
          300: '#f8b2c5',
          400: '#eb8ea5',
          500: '#dd728e',
          600: '#c95e7a',
          700: '#a84d65',
          800: '#8f4055',
          900: '#773d4b'
        },
        ink: '#171717',
        soft: '#f5f5f4',
        line: '#e7e5e4'
      },
      boxShadow: {
        card: '0 10px 30px rgba(15, 23, 42, 0.06)'
      }
    }
  },
  plugins: []
};

export default config;
