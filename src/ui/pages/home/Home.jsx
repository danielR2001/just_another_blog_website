import { Grid, Typography } from "@mui/material";
import React from "react";
import HomeWelcome from "./components/HomeWelcome";
import NotSoBadTopics from "./components/NotSoBadTopics";
import useStyles from "./styles";

export default function Home() {
  var classes = useStyles();

  return (
    <Grid container>
      <HomeWelcome />
      <NotSoBadTopics />
    </Grid>
  );
}
