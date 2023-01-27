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
  '*': { 
    margin: 0, 
    padding: 0 
  },
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