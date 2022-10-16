import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  notfoundMain: {
    height: "100vh",
    width: "100vw",
  },
  notfound: {
    position: "absolute",
    left: "50%",
    top: "50%",
    WebkitTransform: "translate(-50%, -50%)",
    MsTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
    maxWidth: 920,
    width: "100%",
    lineHeight: 1.4,
    textAlign: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    fontWeight: "bold",
    margin: "0px",
  },
  subtitle: {
    padding: "15px 0",
    color: "#757575",
  },
  notfound404: {
    position: "absolute",
    height: "100px",
    top: "0",
    left: "50%",
    WebkitTransform: "translateX(-50%)",
    MsTransform: "translateX(-50%)",
    transform: "translateX(-50%)",
    zIndex: "-1",
    "& h1": {
      color: "#ececec",
      fontWeight: "900",
      fontSize: "276px",
      margin: "0px",
      position: "absolute",
      left: "50%",
      top: "50%",
      WebkitTransform: "translate(-50%, -50%)",
      MsTransform: "translate(-50%, -50%)",
      transform: "translate(-50%, -50%)",
    },
  },
  contactUsLink: {
    textDecoration: "none",
    fontWeight: "bold",
    color: theme.palette.primary.main,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  nothingSpan: {
    color: theme.palette.primary.main,
  },
}));
