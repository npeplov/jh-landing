declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    //xs: false; // removes the `xs` breakpoint
    //sm: false;
    //md: false;
    //lg: false;
    xl: false;
    // mobile: true; // adds the `mobile` breakpoint
    // touchscreen: true;
    // tablet: true;
    // laptop: true;
    // desktop: true;
  }
}

// 1. hover на мобильных
// 2. анимация алертов

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

const theme = createTheme({
  breakpoints: {},
  components: {
    MuiInputBase: {
      styleOverrides: {
        // root: {
        //   ":hover": {
        //     borderBottomColor: "blue",
        //   },
        //   borderBottomColor: "blue",
        //   borderBottom: "3px solid blue"
        // }
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
          },
        },
      ],
      styleOverrides: {
        root: {
          "@media(hover: hover)": {
            ":hover": {
            },
          },
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
    background: {
      paper: "#2E3153",
      default: "#101335",
    },
    grey: {
      800: "#969696",
    },
    primary: { // backgrounds, borders, require a slightly different shade of the primary color
      main: "#00a1e7",
      200: "#82d9ff",
      300: "#00a1e7",
      400: "#0e44d0",
      500: "#0050ad",
      600: "#001e7b",
      700: "#2e3153", 
      800: "#0B1F33",
      900: "#5C5C5C",
      // for shading, gradients, and creating visual depth
      dark: "#82D9FF",
      light: "#fff",
      // to ensure legibility and contrast against a background color.
      contrastText: "#ffffff",
      //main: "#00A1E7", // mui label root focused
    },
    text: { 
      primary: "#ffffff", // text-primary = input text
      secondary: "#E6E1E5", // text-secondary = input placeholder
      disabled: "#aaaaaa",
    },
    info: {
      main: "#00a1e7",
      light: "#aaaaaa",
      dark: "#aaaaaa",
      contrastText: "#aaaaaa",
    },
    error: {
      main: "#ff4c51",
      light: "#aaaaaa",
      dark: "#ff4c51",
      contrastText: "#aaaaaa",
    },
    action: {
      // active: "#eee",
      // activatedOpacity: 0.5,
      // disabled: "green", // со свойством disabled
      // disabledBackground: "#eee", // со свойством disabled
      // disabledOpacity: 0,
      // focus: "#eee",
      // focusOpacity: 1,
      // hover: "#eee",
      // hoverOpacity: 1,
      // selected: "#eee",
      // selectedOpacity: 1,
      
    },
  },

});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
