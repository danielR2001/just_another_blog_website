import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStyles from "./styles";
import {
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import Slider from "react-slick";
import classNames from "classnames";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../../../../core/actions/articles";

export default function Trending() {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Trending page init");
    dispatch(getArticles());
  }, []);

  useEffect(() => {
    return () => {
      console.log("Trending page disposed");
    };
  }, []);

  var classes = useStyles();
  const navigate = useNavigate();
  const [sliderRef, setSliderRef] = useState(null);
  const [slide, setSlide] = useState(0);

  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));
  const tablet = useMediaQuery(theme.breakpoints.up("md"));
  // const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid className={classes.mainGrid} container>
      <Grid className={classes.titleGrid} container>
        <Typography
          sx={{ my: 4, mx: "auto" }}
          className={classes.title}
          variant="h5"
        >
          Trending Articles
        </Typography>
        <Grid className={classes.controlsGrid} container>
          <Button
            className={classes.seeAllBtn}
            component={Link}
            to="/trending"
            variant="text"
          >
            See all
          </Button>
          <IconButton
            className={classes.sliderArrows}
            onClick={sliderRef?.slickPrev}
            disabled={slide === 0}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            className={classes.sliderArrows}
            onClick={sliderRef?.slickNext}
            disabled={
              desktop
                ? slide === Math.max(articles.length - 4, 0)
                : tablet
                ? slide === Math.max(articles.length - 3, 0)
                : slide === Math.max(articles.length - 2, 0)
            }
          >
            <ArrowForwardIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Slider
        ref={setSliderRef}
        className={classes.slider}
        {...{
          initialSlide: 0,
          arrows: false,
          slidesToShow: 2,
          infinite: false,
          variableWidth: true,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 1536,
              settings: {
                slidesToShow: 4,
              },
            },
          ],
        }}
        beforeChange={(oldSlide, newSlide) => {
          console.log(newSlide);
          setSlide(Math.max(newSlide, 0));
        }}
      >
        {articles.map((article, index) => (
          <Card
            key={article._id}
            className={classNames(classes.card, {
              [classes.CardLast]: articles.length - 1 === index,
            })}
            onClick={(e) => {
              navigate(article.url);
            }}
          >
            <CardMedia className={classes.cardMedia} image={article.imageUrl} />
            <CardContent className={classes.cardContent}>
              <Grid container className={classes.cardContentGrid}>
                <Grid container className={classes.cardAuthorGrid}>
                  <Avatar
                    className={classes.cardAvatar}
                    key={article.author._id}
                    src={article.author.imageUrl}
                  />
                  <Typography
                    className={classes.cardAuthor}
                    variant="subtitle2"
                  >
                    {`${article.author.firstName} ${article.author.lastName}`}
                  </Typography>
                </Grid>
                <Typography className={classes.cardTitle} variant="subtitle1">
                  {article.title}
                </Typography>
              </Grid>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Grid container className={classes.cardDateTimeGrid}>
                <Typography className={classes.cardDate} variant="body2">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </Typography>
                <Typography className={classes.cardDotSpace} variant="body2">
                  ·
                </Typography>
                <Typography className={classes.cardTimeRead} variant="body2">
                  {`${article.minToRead} min. read`}
                </Typography>
              </Grid>
            </CardActions>
          </Card>
        ))}
      </Slider>
    </Grid>
  );
}
