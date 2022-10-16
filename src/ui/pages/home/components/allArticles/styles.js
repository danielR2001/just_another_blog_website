import { alpha } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  mainGrid: {
    overflow: "hidden",
    // height: 800,
    [theme.breakpoints.down("md")]: {
      padding: "25px 24px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "25px 48px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "25px 64px",
    },
    flexDirection: "column",
  },
  card: {
    display: "flex !important",
    height: "100%",
    flexDirection: "column",
    marginRight: 20,
    borderRadius: "15px",
    cursor: "pointer",
    boxShadow:
      "rgb(0 0 0 / 6%) 0px 0px 0.125rem 0px, rgb(0 0 0 / 12%) 0px 0.125rem 0.125rem 0px",
    "&:hover": {
      boxShadow:
        "rgb(0 0 0 / 4%) 0px 0px 0.375rem, rgb(0 0 0 / 8%) 0px 0.125rem 0.3755rem",
      transform: "scale(1.03) translateZ(0px)",
    },
    [theme.breakpoints.down("md")]: {
      width: "calc(((100vw - 36px) - 20px) / 2) !important",
    },
    [theme.breakpoints.up("md")]: {
      width: "calc(((100vw - 60px) - 40px) / 3) !important",
    },
    [theme.breakpoints.up("lg")]: {
      width: "calc(((100vw - 60px) - 60px) / 4) !important",
    },
  },
  cardLast: {
    marginRight: 0,
  },
  cardLink: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  cardMedia: {
    paddingTop: "46%",
  },
  cardContent: {
    height: "calc(55% - 50px)",
    padding: "15px 25px 0 25px",
    position: "relative",
    flexDirection: "column",
  },
  cardContentGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    overflow: "hidden",
  },
  cardAuthorGrid: {
    width: "fit-content",
    borderRadius: "99em",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.08),
    },
  },
  cardAvatar: {
    width: 20,
    height: 20,
  },
  cardAuthor: {
    alignSelf: "center",
    padding: "0 8px",
    fontWeight: "bold",
    fontSize: 12,
  },
  cardTitle: {
    fontWeight: "bold",
    paddingTop: 10,
  },
  cardSummary: {
    display: "-webkit-box",
    "-webkitLineClamp": 5,
    "-webkitBoxOrient": "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "#757575",
  },
  cardActions: {
    justifyContent: "space-between",
    padding: "10px 25px",
    height: 50,
    flex: 1,
    alignItems: "end",
  },
  cardDateTimeGrid: {},
  cardDate: {
    color: "#757575",
    fontSize: 13,
  },
  cardDotSpace: {
    color: "#757575",
    padding: "0 6px",
    fontSize: 13,
  },
  cardTimeRead: {
    color: "#757575",
    fontSize: 13,
  },
}));
