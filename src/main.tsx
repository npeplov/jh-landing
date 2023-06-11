declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
  }
}

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

const darkTheme = createTheme({
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
