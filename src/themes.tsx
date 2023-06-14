import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            color: "ffffff",
          },
        },
      ],
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "1rem",
          borderRadius: "3rem",
          lineHeight: "135%",
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontFamily: ["Zen Maru Gothic", "serif"].join(","),
      fontWeight: 500,
    },
    fontFamily: ["Nunito", "serif"].join(","),
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#00A1E7",
      dark: "#82D9FF",
      contrastText: "#ffffff",
    },
    background: {
      paper: "#2E3153",
      default: "#101335",
    },
    text: {
      primary: "#ffffff",
      secondary: "#00000",
      disabled: "",
    },
  },
});


export const lightTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#F5F5F5',
      dark: '#00A1E7',
      contrastText: '#101335',
      light: '#F5F5F5',
    },
    background: {
      paper: '#EAEAEA',
      default: '#F5F5F5',
    },
    text: {
      primary: '#101335',
      secondary: '#2E3153',
      disabled: '#A4A4A4',
    },
    error: {
      main: '#E15100',
      dark: '#E15100',
      light: '#E15100',
    },
    success: {
      main: '#5DD04A',
      dark: '#5DD04A',
      light: '#148E00',
    },
    info: {
      main: '#447979',
    },
  },
});