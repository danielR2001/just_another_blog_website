import { Grid, Typography } from "@mui/material";
import React from "react";
import useStyles from "../styles";

export default function NotSoBadTopics() {
  var classes = useStyles();

  return (
    <Grid
      container
      direction="column"

      //   alignItems="center"
      //   justifyContent="center"
    >
      <Typography
        sx={{ my: 4, mx: "auto" }}
        className={classes.s2Title}
        variant="h2"
      >
        Not So Bad Topics{" "}
      </Typography>
    </Grid>
  );
}
