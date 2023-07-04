import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    common: {
      black: '#101335',
      white: '#D0D0D0',
    },
    primary: {
      main: '#2E3153',
      contrastText: '#D0D0D0',
    },
    secondary: {
      main: '#D0D0D0',
      contrastText: '#D0D0D0',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#D0D0D0',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
        contained: {
          boxShadow: 'none',
        },
        containedPrimary: {
          backgroundColor: '#00A1E7',
          color: '#D0D0D0',
        },
        outlinedPrimary: {
          color: '#82D9FF',
          borderColor: '#82D9FF',
        },
        outlined: {
          borderColor: '#82D9FF',
          color: '#82D9FF',
        },
        containedSecondary: {
          backgroundColor: '#D6F3FF',
          color: '#101335',
        },
        textSecondary: {
          color: '#D0D0D0',
        },
      },
    },
  },
});

export default theme;
