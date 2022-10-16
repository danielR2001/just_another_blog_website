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
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStyles from "./styles";
import {
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import Slider from "react-slick";
import classNames from "classnames";

const topics = [
  {
    id: "0",
    image:
      "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",
    title: "Nature",
    count: "101",
    url: "/topics/nature",
  },
  {
    id: "1",
    image:
      "https://img.freepik.com/free-photo/straw-hat-kept-empty-beach-chair_1252-488.jpg",
    title: "Adventure",
    count: "90",
    url: "/topics/adventure",
  },
  {
    id: "2",
    image:
      "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",
    title: "Programming",
    count: "11",
    url: "/topics/programming",
  },
  {
    id: "3",
    image:
      "https://img.freepik.com/free-photo/straw-hat-kept-empty-beach-chair_1252-488.jpg",
    title: "News",
    count: "36",
    url: "/topics/news",
  },
  {
    id: "4",
    image:
      "https://img.freepik.com/free-photo/straw-hat-kept-empty-beach-chair_1252-488.jpg",
    title: "Handy",
    count: "25",
    url: "/topics/handy",
  },
  {
    id: "5",
    image:
      "https://img.freepik.com/free-photo/straw-hat-kept-empty-beach-chair_1252-488.jpg",
    title: "Learning",
    count: "201",
    url: "/topics/learning",
  },
];

export default function PopularTopics() {
  var classes = useStyles();
  const navigate = useNavigate();
  const [sliderRef, setSliderRef] = useState(null);
  const [slide, setSlide] = useState(0);

  return (
    <Grid className={classes.mainGrid} container direction="column">
      <Grid className={classes.titleGrid} container>
        <Typography
          sx={{ my: 4, mx: "auto" }}
          className={classes.title}
          variant="h5"
        >
          Popluar Topics
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
            disabled={slide === topics.length - 4}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Slider
        ref={setSliderRef}
        className={classes.slider}
        {...{
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          variableWidth: true,
          responsive: [
            {
              breakpoint: 900,
              settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: false,
                variableWidth: true,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                variableWidth: true,
              },
            },
            {
              breakpoint: 1536,
              settings: {
                arrows: false,
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: false,
                variableWidth: true,
              },
            },
          ],
        }}
        beforeChange={(oldSlide, newSlide) => {
          console.log(newSlide);
          setSlide(newSlide);
        }}
      >
        {topics.map((post, index) => (
          <Card
            key={post.id}
            className={classNames(classes.card, {
              [classes.cardLast]: topics.length - 1 === index,
            })}
            onClick={(e) => {
              navigate(post.url);
            }}
          >
            <CardMedia className={classes.cardMedia} image={post.image} />
            <CardContent className={classes.cardContent}>
              <Grid className={classes.cardContentGrid} container>
                <Typography className={classes.cardTitle} variant="subtitle1">
                  {post.title}
                </Typography>
                <Typography className={classes.cardSummary} variant="body2">
                  {`${post.count} posts`}
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Grid>
  );
}
