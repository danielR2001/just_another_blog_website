import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  firstSection: {
    position: "relative",
  },
  homeBgImg: {
    height: "500px",
    width: "100vw",
    objectFit: "cover",
    filter: "brightness(0.4)",
  },
  welcomeText: {
    position: "absolute",
    top: "75px",
    margin: "0 100px",
  },
  welcomeTitle: {
    color: "white",
    fontWeight: "bold",
  },
  welcomeSubtitle: {
    color: "white",
    // fontWeight: "bold !important",
  },
  s2Title: {
    justifyContent: "center",
  },
}));
