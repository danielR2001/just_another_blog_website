import { Grid } from "@mui/material";
import React from "react";
import Welcome from "./components/welcome/Welcome";
import PopularTopics from "./components/popularTopics/PopularTopics";
import useStyles from "./styles";
import Trending from "./components/trending/Trending";
import PublishYourArticle from "./components/publishYourArticle/PublishYourArticle";
import AllArticles from "./components/allArticles/AllArticles";

export default function Home() {
  var classes = useStyles();

  return (
    <Grid className={classes.homeGrid} container>
      <Welcome />
      <Trending />
      <PopularTopics />
      <PublishYourArticle />
      <AllArticles />
    </Grid>
  );
}
