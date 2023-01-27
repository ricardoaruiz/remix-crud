import { createStitches } from '@stitches/react';

const stitches = createStitches({
  theme: {
    colors: {
      gray400: 'gainsboro',
      gray500: 'lightgray',
    },
  },
});

export const globalStyles = stitches.globalCss({
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap')"
  ],
  '@font-face': {
    fontFamily: 'Roboto, sans-serif'
  },
  '*': { 
    margin: 0, 
    padding: 0 
  },
  body: {
    fontFamily: 'Roboto, sans-serif'
  }
});

export const {
  styled,
  css,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = stitches