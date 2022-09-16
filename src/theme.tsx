import { Theme, createTheme } from '@mui/material';
import { PaletteColor, PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    otherColor?: PaletteColor;
  }
  interface PaletteOptions {
    otherColor?: PaletteColorOptions;
  }
}

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#1760a5',
      light: 'skyblue',
    },
    secondary: {
      main: '#9500ae',
    },
    otherColor: {
      main: '#999',
    },
  },
});

export default theme;
