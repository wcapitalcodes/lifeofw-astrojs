import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';
import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
        secondary: 'var(--aw-color-secondary)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        'accent': {
          DEFAULT: '#8E1246',
          50: '#FFFCFD',
          100: '#FCEAF2',
          200: '#F8C6DB',
          300: '#F3A2C4',
          400: '#EF7DAD',
          500: '#EA5996',
          600: '#E5357F',
          700: '#D61B6A',
          800: '#B21758',
          900: '#8E1246',
          950: '#750F3A'
        },
        'athens-gray': {
          DEFAULT: '#F8F9FA',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#F8F9FA',
          500: '#D7DDE3',
          600: '#B7C1CB',
          700: '#96A5B4',
          800: '#75899C',
          900: '#5B6D7F',
          950: '#4F5F6F'
        },
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-serif)', ...defaultTheme.fontFamily.serif],
      },
      animation: {
        fade: 'fadeInUp 1s both',
        'scroll': 'scroll var(--animationDuration) linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'false',
};
