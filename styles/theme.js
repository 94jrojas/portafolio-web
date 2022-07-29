import { createMuiTheme } from "@material-ui/core/styles";
//import Rubik from "typeface-rubik";
import color from "@material-ui/core/colors/amber";
import { esES } from "@material-ui/core/locale";

/**
 * #F1F2FA
 * #4C7AF1
 * #42CDAD
 * #F6BC41
 * **/

const theme = createMuiTheme(
  {
    palette: {
      type: "dark",
      primary: {
        light: "#242424",
        main: "#000",
        dark: "#242424",
        contrastText: "#fff",
      },
      secondary: {
        light: "#7bdcc6",
        main: "#42cdad",
        dark: "#2e9079",
        contrastText: "#000",
      },
      text: {
        primary: "#000",
        secondary: "rgba(0,0,0,0.54)",
        disabled: "rgba(0,0,0,0.38)",
        hint: "rgba(0,0,0,0.38)",
      },
      error: {
        light: "#e57373",
        main: "#f44336",
        dark: "#d32f2f",
        contrastText: "#fff",
      },
      // divider: "rgba(0,0,0,0.12)",
      background: { default: "#fff", paper: "#fff" },
    },
    typography: {
      fontFamily: "Hind",
      h1: {
        fontFamily: "Mukta",
        fontSize: "4.5rem",
      },
      h2: {
        fontFamily: "Kulim Park , Verdana",
        fontSize: "3.75rem",
      },
      h3: {
        fontFamily: "Poppins , Verdana",
        fontWeight: 600,
        fontSize: "2.5rem",
      },
      h4: {
        fontFamily: "Kulim Park , Verdana",
      },
      h5: {
        fontFamily: "Kulim Park, Verdana",
      },
      h6: {
        fontFamily: "Kulim Park, Verdana",
      },

      subtitle1: {
        fontFamily: "Poppins, Verdana",
        fontSize: "1.5em",
        fontWeight: 600,
      },
      subtitle2: {
        fontFamily: "Poppins, Verdana",
        fontSize: "1.2rem",
        fontWeight: 600,
      },
      body1: {
        fontFamily: "Hind, Verdana",
        fontSize: "1.3rem",
        fontWeight: 400,
      },
      body2: {
        fontFamily: "Hind, Verdana",
        fontSize: "1.1rem",
        fontWeight: 400,
      },
      button: {
        fontFamily: "Poppins, Verdana",
        fontWeight: 600,
        fontSize: "1.2rem",
        textTransform: "capitalize",
      },
    },
    overrides: {
      MuiButton: {
        label: { fontFamily: "Poppins, Verdana" },
      },
      MuiBackdrop: {
        root: {
          backgroundColor: "rgba(0,0,0,0.9)",
        },
      },
    },
    shape: { borderRadius: 20 },
    shadows: [
      "none",
      "rgba(0, 0, 0, 0.06) 0px 2px 4px, rgba(0, 0, 0, 0.05) 0px 0.5px 1px",
      "rgba(0, 0, 0, 0.18) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0.5px 1px",
      "rgba(0, 0, 0, 0.06) 0px 19px 43px, rgba(0, 0, 0, 0.15) 0px 4px 11px",
      "rgba(0, 0, 0, 0.06) 0px 19px 43px, rgba(0, 0, 0, 0.15) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
      "rgba(0, 0, 0, 0.22) 0px 19px 43px, rgba(0, 0, 0, 0.18) 0px 4px 11px",
    ],
  },
  esES
);

export default theme;
