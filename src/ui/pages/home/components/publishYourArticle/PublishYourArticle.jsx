import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

export default function PublishYourArticle() {
  var classes = useStyles();

  return (
    <Grid className={classes.mainGrid} container>
      <Grid className={classes.contentGrid} container>
        <Typography className={classes.title} variant="h4">
          Become Just Another Blogger
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle1">
          We all want to hear what is going on in your head,
          <br />
          we are sure you have a lot of interesting things to share with us.
          <br />
          Come on don't be shy.
        </Typography>
        <Button
          sx={{ mx: 2 }}
          component={Link}
          to="/register"
          variant="contained"
          className={classes.joinBtn}
        >
          Join Us
        </Button>
      </Grid>
    </Grid>
  );
}
