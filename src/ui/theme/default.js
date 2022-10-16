import { alpha, createTheme } from "@mui/material";
import tinycolor from "tinycolor2";

const primary = "#536DFE";
const secondary = "#FF5C93";
const warning = "#FFC260";
const success = "#3CD4A0";
const info = "#9013FE";

const lightenRate = 7.5;
const darkenRate = 15;

const remFontUnit = 0.0625;

const defaultTheme = createTheme({
  typography: {
    fontFamily: "'Roboto', 'PT Sans', 'Helvetica', sans-serif",
    h1: {
      fontSize: `${remFontUnit * 96}rem`,
      color: "black",
    },
    h2: {
      fontSize: `${remFontUnit * 60}rem`,
      color: "black",
    },
    h3: {
      fontSize: `${remFontUnit * 48}rem`,
      color: "black",
    },
    h4: {
      fontSize: `${remFontUnit * 34}rem`,
      color: "black",
    },
    h5: {
      fontSize: `${remFontUnit * 24}rem`,
      color: "black",
    },
    h6: {
      fontSize: `${remFontUnit * 20}rem`,
      color: "black",
    },
    subtitle1: {
      ontSize: `${remFontUnit * 16}rem`,
      color: "black",
    },
    subtitle2: {
      fontSize: `${remFontUnit * 14}rem`,
      color: "black",
    },
    body1: {
      fontSize: `${remFontUnit * 16}rem`,
      color: "black",
    },
    body2: {
      fontSize: `${remFontUnit * 14}rem`,
      color: "black",
    },
    button: {
      fontSize: `${remFontUnit * 14}rem`,
      color: "black",
    },
    caption: {
      fontSize: `${remFontUnit * 12}rem`,
      color: "black",
    },
    overline: {
      fontSize: `${remFontUnit * 10}rem`,
      color: "black",
    },
  },
  spacing: 2,
  palette: {
    primary: {
      main: primary,
      light: tinycolor(primary).lighten(lightenRate).toHexString(),
      dark: tinycolor(primary).darken(darkenRate).toHexString(),
    },
    secondary: {
      main: secondary,
      light: tinycolor(secondary).lighten(lightenRate).toHexString(),
      dark: tinycolor(secondary).darken(darkenRate).toHexString(),
      contrastText: "#FFFFFF",
    },
    warning: {
      main: warning,
      light: tinycolor(warning).lighten(lightenRate).toHexString(),
      dark: tinycolor(warning).darken(darkenRate).toHexString(),
    },
    success: {
      main: success,
      light: tinycolor(success).lighten(lightenRate).toHexString(),
      dark: tinycolor(success).darken(darkenRate).toHexString(),
    },
    info: {
      main: info,
      light: tinycolor(info).lighten(lightenRate).toHexString(),
      dark: tinycolor(info).darken(darkenRate).toHexString(),
    },
    text: {
      primary: "#4A4A4A",
      secondary: "#6E6E6E",
      hint: "#B9B9B9",
    },
    background: {
      default: "#F6F7FF",
      light: "#F3F5FF",
    },
  },
  customShadows: {
    widget:
      "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetDark:
      "0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetWide:
      "0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          height: "40px",
          borderRadius: "99em",
          boxShadow: "none !important",
          textTransform: "none",
          backgroundColor: "transparent",
          ...(ownerState.variant === "contained" && {
            backgroundColor: "#000000",
            ":hover": {
              backgroundColor: alpha("#000000", 0.8),
            },
            ":active": {
              backgroundColor: "#ff0000",
            },
          }),
          ...(ownerState.variant === "outlined" && {
            backgroundColor: "transparent",
            ":hover": {
              backgroundColor: alpha(theme.palette.primary.light, 0.1),
            },
          }),
          ...(ownerState.variant === "text" && {
            color: "black",
            ":hover": {
              backgroundColor: alpha(theme.palette.common.black, 0.08),
            },
            "&& .MuiTouchRipple-child": {
              backgroundColor: alpha(theme.palette.common.black, 0.08),
            },
          }),
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          height: "40px",
          borderRadius: "99em",
          boxShadow: "none !important",
          textTransform: "none",
          backgroundColor: "transparent",
          ...(ownerState.variant === "contained" && {
            backgroundColor: "#000000",
            ":hover": {
              backgroundColor: alpha("#000000", 0.8),
            },
            ":active": {
              backgroundColor: "#ff0000",
            },
          }),
          ...(ownerState.variant === "outlined" && {
            backgroundColor: "transparent",
            ":hover": {
              backgroundColor: alpha(theme.palette.primary.light, 0.1),
            },
          }),
          ...(ownerState.variant === "text" && {
            color: "black",
            ":hover": {
              backgroundColor: alpha(theme.palette.common.black, 0.08),
            },
            "&& .MuiTouchRipple-child": {
              backgroundColor: alpha(theme.palette.common.black, 0.08),
            },
          }),
        }),
      },
    },
  },
});

export default defaultTheme;
