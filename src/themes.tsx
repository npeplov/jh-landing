import { createTheme } from "@mui/material";

export const darkTheme = {
// Material Design guidelines
// primary to indicate their importance or prominence within the UI.

  // mode: "dark",
  // buttons, links, and active states
  grey500: {
    color: "#969696"
  },
  
  primary: {
    customColor: "#aaa",
    default: "#eee", // ????

    // backgrounds, borders, require a slightly different shade of the primary color
    main: "#00A1E7", 

    // for shading, gradients, and creating visual depth
    dark: "#82D9FF",
    light: "#fff",

    // to ensure legibility and contrast against a background color.
    contrastText: "#ffffff",
  },
  common: {
    black: "#000",
    white: "#fff",
  },
  background: {
    paper: "#2E3153",
    default: "#101335",
  },
  text: { 
    primary: "#ffffff", // text-primary = input text
    secondary: "#D0D0D0", // text-secondary = input placeholder
    disabled: "#aaaaaa",
  },
  error: {
    main: "#f2b8b5",
    light: "#aaaaaa",
    dark: "#ff6b17",
    contrastText: "#aaaaaa",
  },
  warning: {
    main: "#aaaaaa",
    light: "#aaaaaa",
    dark: "#aaaaaa",
    contrastText: "#aaaaaa",
  },
  info: {
    main: "#aaaaaa",
    light: "#aaaaaa",
    dark: "#aaaaaa",
    contrastText: "#aaaaaa",
  },
  success: {
    main: "#5DCB4B",
    dark: "#5DCB4B",
    light: "#aaaaaa",
    contrastText: "#aaaaaa",
  },
  action: {
    active: "#eee",
    activatedOpacity: 0.5,
    // disabled: "green", // со свойством disabled
    // disabledBackground: "#eee", // со свойством disabled
    disabledOpacity: 0,
    focus: "#eee",
    focusOpacity: 1,
    hover: "#eee",
    hoverOpacity: 1,
    selected: "#eee",
    selectedOpacity: 1,
  },
}

// export const darkTheme = createTheme({
//   components: {
//     MuiButton: {
//       variants: [
//         {
//           props: { variant: "primary" },
//           style: {
//             color: "ffffff",
//           },
//         },
//       ],
//       styleOverrides: {
//         root: {
//           textTransform: "none",
//           fontSize: "1rem",
//           borderRadius: "3rem",
//           lineHeight: "135%",
//         },
//       },
//     },
//   },
//   typography: {
//     h1: {
//       fontSize: "2rem",
//       fontFamily: ["Zen Maru Gothic", "serif"].join(","),
//       fontWeight: 500,
//     },
//     fontFamily: ["Nunito", "serif"].join(","),
//   },
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#00A1E7",
//       dark: "#82D9FF",
//       contrastText: "#ffffff",
//     },
//     background: {
//       paper: "#2E3153",
//       default: "#101335",
//     },
//     text: {
//       primary: "#ffffff",
//       secondary: "#00000",
//       disabled: "",
//     },
//   },
// });


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