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
  },
  contentGrid: {
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    padding: "5px 0 ",
    textAlign: "center",
    fontWeight: "bold",
  },
  subtitle: {
    padding: "5px 0 ",
    textAlign: "center",
  },
  joinBtn: {
    margin: "5px 0 ",
  },
}));
