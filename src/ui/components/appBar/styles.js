import { alpha } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#ffffff !important",
    color: "#000000 !important",
    boxShadow: "0 0 30px rgb(0 0 0 / 10%) !important",
  },
  toolBar: {
    [theme.breakpoints.down("md")]: {
      margin: "0 24px",
    },
    [theme.breakpoints.up("md")]: {
      margin: "0 48px",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "0 64px",
    },
    padding: "0 !important",
  },
  grow: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  logo: {
    height: "30px",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    height: "40px !important",
    padding: "6px 8px !important",
    paddingRight: 40 + theme.spacing(1.25),
    width: "100%",
    opacity: "0",
    transition: theme.transitions.create(["opacity"]),
    boxSizing: "border-box !important",
  },
  inputInputOpened: {
    opacity: "1",
  },
  search: {
    position: "relative",
    borderRadius: 25,
    paddingLeft: theme.spacing(2.5),
    width: 40,
    height: 40,
    // backgroundColor: "#ffffff",
    transition: theme.transitions.create(["background-color", "width"]),
    "&:hover": {
      cursor: "pointer",
      backgroundColor: alpha(theme.palette.common.black, 0.08),
    },
    margin: "0 5px",
    [theme.breakpoints.down("sm")]: {
      display: "none !important",
    },
  },
  searchFocused: {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 250,
    },
  },
  searchIcon: {
    width: 40,
    right: 0,
    height: 40,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: theme.transitions.create("right"),
    "&:hover": {
      cursor: "pointer",
    },
    zIndex: 2,
  },
  headerIcon: {
    fontSize: 28,
    color: "rgba(0, 0, 0, 255)",
  },
  getStartedBtn: {},
  navItemBtn: {
    [theme.breakpoints.down("sm")]: {
      display: "none !important",
    },
  },
}));
