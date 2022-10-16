import { alpha } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#ffffff !important",
    color: "#000000 !important",
    boxShadow: "0 0 30px rgb(0 0 0 / 10%) !important",
    borderBottom: "1px solid rgba(32, 33, 37, 0.12)",
  },
  toolBar: {
    [theme.breakpoints.down("md")]: {
      margin: "0 16px",
    },
    [theme.breakpoints.up("md")]: {
      margin: "0 30px",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "0 30px",
    },
    padding: "0 !important",
  },
  section1: {
    flex: 1,
    justifyContent: "flex-start",
  },
  section2: {
    flex: 2,
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  section3: {
    flex: 1,
    justifyContent: "flex-end",
  },
  hide: {
    display: "none",
  },
  logo: {
    height: "30px",
    display: "flex",
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
    fontSize: 24,
    color: "rgba(0, 0, 0, 255)",
  },
  joinBtn: {
    // width: 135,
  },
  navItemBtn: {},
  navItemBtnSelected: {
    textDecoration: "underline",
  },
}));
