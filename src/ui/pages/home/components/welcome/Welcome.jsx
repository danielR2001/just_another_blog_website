import { Grid, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import HomeBg from "../../../../assets/home_bg.png";

export default function Welcome() {
  var classes = useStyles();

  return (
    <Grid className={classes.mainGrid}>
      <img className={classes.bgImg} src={HomeBg} alt="Home page"></img>
      <Grid className={classes.textGrid} container>
        <Typography sx={{ my: 4 }} className={classes.title} variant="h3">
          Just Another Blog
        </Typography>
        <Typography
          sx={{ my: 4 }}
          className={classes.subtitle}
          variant="subtitle1"
        >
          This is where we tell stories.
          <br />
          We have plenty of interesting articles about everything.
        </Typography>
      </Grid>
    </Grid>
  );
}
