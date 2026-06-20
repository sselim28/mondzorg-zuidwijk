import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Primary: deep forest green ──────────────
        brand: {
          50:  '#EEF5F1',
          100: '#D3E8DC',
          200: '#A7D1B9',
          300: '#79BA96',
          400: '#4EA373',
          500: '#2D8A5C',  // lighter interactive green — links, icons
          600: '#207049',
          700: '#1B4D3E',  // deep forest — dark sections, headings, footer
          800: '#133529',
          900: '#0C2119',
          950: '#061410',
        },
        // ── Accent: warm honey gold — CTAs ──────────
        accent: {
          50:  '#FBF6EC',
          100: '#F5E9D1',
          200: '#EDD29F',
          300: '#E1B96A',
          400: '#C8954A',  // primary CTA
          500: '#AB7C38',
          600: '#8A6228',
          700: '#6A4C1D',
        },
        // ── Ivory: warm off-white backgrounds ───────
        ivory: {
          DEFAULT: '#F8F5EF',
          dark:    '#F2EDE4',
          border:  '#E5DED4',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '10px',
        lg:  '14px',
        xl:  '18px',
        '2xl': '24px',
        '3xl': '32px',
      },
      boxShadow: {
        card:       '0 1px 3px 0 rgb(0 0 0 / .06), 0 4px 12px 0 rgb(0 0 0 / .04)',
        'card-lg':  '0 4px 20px 0 rgb(0 0 0 / .08), 0 1px 4px 0 rgb(0 0 0 / .04)',
        'card-hover': '0 8px 30px 0 rgb(0 0 0 / .12), 0 2px 8px 0 rgb(0 0 0 / .06)',
        float:      '0 8px 32px 0 rgb(0 0 0 / .15), 0 2px 8px 0 rgb(0 0 0 / .08)',
        'float-warm': '0 8px 32px 0 rgb(200 149 74 / .3)',
        inner:      'inset 0 2px 4px 0 rgb(0 0 0 / .04)',
      },
    },
  },
  plugins: [],
}

export default config
