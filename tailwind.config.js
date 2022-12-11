/**
 * @file tailwind.config.js
 * Theme colors: https://coolors.co/011627-fdfffc-2ec4b6-e71d36-ff9f1c
 */
const { colors, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  // corePlugins: {
  //   preflight: false,
  // },

  // If you want to support toggling dark mode manually instead of relying on the operating
  // system preference, use the class strategy instead of the media strategy
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    screens: {
      xs: '480px',
      //sm: '768px',
      md: '768px',
      lg: '1024px',
      mlg: '1280px',
      xl: '1600px',
      xxl: '1920px',
    },
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        accent0: '#ECC2E8',
        accent1: '#E7B1EC',
        accent2: '#9F6B9A',
        accent3: '#1C0C16',
        accent4: '#D9731B',
        accent5: '#A04DB9',
        accent6: '#2C4CFF',
        accent7: '#59C5FF',
        black: '#000000',
        white: '#ffffff',
        gray: {
          ...colors.gray,
          10: '#101010',
          22: '#222326',
          '2a': '#2A2A2A',
          17: '#171717',
          '1d': '#1d1d1d',
          f2: '#f2f2f2',
          91: '#919496',
          40: '#404040',
          98: '#989898',
          '6e': '#6E6E6E',
        },
        pink: {
          ...colors.pink,
          fa: '#FA1FB6',
        },
        purple: {
          ...colors.purple,
          '00': '#001440',
          b7: '#B765D7',
          77: '#7773E1',
        },
        orange: {
          ...colors.orange,
          ff: '#FF8300',
          ec: '#ec7a00',
        },
        yellow: {
          ff: '#FFB600',
          df: '#DFED00',
        },
        green: {
          65: '#65D46E',
          '0e': '#0ef1b3',
          '2f': '#2FFFE7',
          '3f': '#34FFE7',
        },
        red: {
          ...colors.red,
          f5: '#F52513',
          c8: '#C80000',
          ff: '#FF0003',
          ea: '#EA281E',
        },
        blue: {
          ...colors.blue,
          '02': '#02003E',
          '04': '#04347A',
          '2d': '#2D4DC8',
        },
      },
      borderRadius: {
        ms: '0.25rem',
      },
      fontFamily: {
        block: ['BLOKKNeue', 'Helvetica', 'Arial', 'sans-serif'],
        pixel: ['Neue Pixel Grotesk', 'Helvetica', 'Arial', 'sans-serif'],
        sans: ['DM Sans', ...fontFamily.sans],
        remboy: ['Remboy', 'Garamond', 'serif'],
      },
      fontSize: {
        xxs: '.625rem',
      },
      gap: {
        6: '-1.5rem',
      },
      height: {
        'screen-1/2': '50vh',
        'screen-1/3': '33vh',
      },
      width: {
        profile: '1200px',
        'screen-1/2': '50vw',
        'screen-1/3': '33vw',
      },
      zIndex: {
        '-1': '-10',
        100: 100,
        50: 50,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        content: 10,
        hud: 20,
        modal: 40,
        nav: 45,
        loader: 50,
        cursor: 60,
        infinity: 9999999999,
      },
      transitionTimingFunction: {
        custom: 'cubic-bezier(.45,.09,.35,.91)',
        'in-quad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
        'in-cubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
        'in-quart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
        'in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
        'out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        'out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
        'in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        'in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        'in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
        'in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',
        'in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
        'in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
      },
      animation: {
        'marquee-faster': 'marquee 2.5s linear infinite',
        'marquee-inverted-faster': 'marquee 2.5s linear infinite',
        marquee: 'marquee 5s linear infinite',
        'marquee-inverted': 'marquee 5s linear infinite',
        'marquee-slower': 'marquee 10s linear infinite',
        'marquee-inverted-slower': 'marquee 10s linear infinite',
        'flicker-slower': 'flicker 10s infinite forwards',
        'flicker-slow': 'flicker 6s infinite forwards',
        flicker: 'flicker 4s infinite forwards',
        'flicker-fast': 'flicker 2s infinite forwards',
        'flicker-faster': 'flicker 1s infinite forwards',
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translate3d(calc(var(--offset) * -1), 0, 0)',
          },
          '100%': {
            transform: 'translate3d(calc(-100% - var(--offset)), 0, 0)',
          },
        },
        'marquee-inverted': {
          '0%': {
            transform: 'translate3d(calc(-100% - var(--offset)), 0, 0)',
          },
          '100%': {
            transform: 'translate3d(calc(var(--offset) * -1), 0, 0)',
          },
        },
        flicker: {
          '0%': {
            opacity: 1,
          },
          '3%': {
            opacity: 0.4,
          },
          '6%': {
            opacity: 1,
          },
          '7%': {
            opacity: 0.4,
          },
          '8%': {
            opacity: 1,
          },
          '9%': {
            opacity: 0.4,
          },
          '10%': {
            opacity: 1,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@rvxlab/tailwind-plugin-ios-full-height'),
    require('tailwindcss-touch')(),
  ],
};
