import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './content/**/*.md',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      'roboto': ['Roboto', 'helvetica', 'sans-serif'],
      'inter': ['Inter', 'helvetica', 'sans-serif'],
      'lato': ['Lato', 'helvetica', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      blue: colors.blue,
      gray: colors.gray,
      green: colors.green,
      red: colors.red,
      yellow: colors.yellow,
      primary: {
        50: '#f2faff',
        100: '#e6f3fa',
        200: '#b3dbf1',
        300: '#80c3e8',
        400: '#4dabdf',
        500: '#0e7bba',
        600: '#0b6295',
        700: '#084a70',
        800: '#06314a',
        900: '#031925',
      },
      secondary: {
        100: '#faf1e6',
        200: '#f1cfb3',
        300: '#e8b980',
        400: '#df8c4d',
        500: '#e06f12',
        600: '#95450b',
        700: '#703508',
        800: '#4a2306',
        900: '#251103',
      },
      danger: {
        100: '#fbedee',
        200: '#f4cdd0',
        300: '#ecadb2',
        400: '#e58d94',
        500: '#dc3545',
        600: '#b02a37',
        700: '#842029',
        800: '#58151c',
        900: '#2c0b0e',
      },
      success: {
        100: '#e9f6f0',
        200: '#c3e6d9',
        300: '#9ed6c2',
        400: '#78c6ab',
        500: '#198754',
        600: '#146c43',
        700: '#0f5132',
        800: '#0a3622',
        900: '#051b11',
      },
      info: {
        100: '#e7fbfe',
        200: '#b5f1fc',
        300: '#84e8fa',
        400: '#52def8',
        500: '#0dcaf0',
        600: '#0aa2c0',
        700: '#087990',
        800: '#055160',
        900: '#032830',
      },
      warning: {
        100: '#fff9e6',
        200: '#ffeeb3',
        300: '#ffe380',
        400: '#ffd84d',
        500: '#ffc107',
        600: '#cc9a06',
        700: '#997404',
        800: '#664d03',
        900: '#332701',
      },
    }
  },
  plugins: [],
}

