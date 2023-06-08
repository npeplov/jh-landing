import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

const darkTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "0.875rem"
        },
      },
    },
  },
  typography: {
    h2: {
      fontSize: "2rem",
      fontFamily: ["Zen Maru Gothic", "serif"].join(","),
      fontWeight: 500,
      color: "#fff",
    },
    fontFamily: ["Nunito", "serif"].join(","),
  },
  palette: {
    primary: {
      main: "#fff",
    },
    text: {
      primary: "#101335",
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
