import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  mainGrid: {
    position: "relative",
    height: 500,
  },
  bgImg: {
    height: "100%",
    width: "100vw",
    objectFit: "cover",
    filter: "brightness(0.4)",
  },
  textGrid: {
    position: "absolute",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
}));
