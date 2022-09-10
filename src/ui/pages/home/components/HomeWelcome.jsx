import { Typography } from "@mui/material";
import React from "react";
import useStyles from "../styles";
import HomeBg from "../../../assets/home_bg.png";

export default function HomeWelcome() {
  var classes = useStyles();

  return (
    <div className={classes.firstSection}>
      <img className={classes.homeBgImg} src={HomeBg} alt="Home page"></img>
      <div className={classes.welcomeText}>
        <Typography
          sx={{ my: 4 }}
          className={classes.welcomeTitle}
          variant="h1"
        >
          Oh Hey!
          <br /> I see you looking for something interesting to read.
        </Typography>
        <Typography
          sx={{ my: 4 }}
          className={classes.welcomeSubtitle}
          variant="h3"
        >
          You are in luck!
          <br />
          We have plenty of interesting articles about everything.
        </Typography>
      </div>
    </div>
  );
}
