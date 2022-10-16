import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";

const articles = [
  {
    id: "0",
    image:
      "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",
    title: "Nature",
    count: "101",
    url: "/articles/nature",
  },
  {
    id: "1",
    image:
      "https://img.freepik.com/free-photo/straw-hat-kept-empty-beach-chair_1252-488.jpg",
    title: "Adventure",
    count: "90",
    url: "/articles/adventure",
  },
  {
    id: "2",
    image:
      "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",
    title: "Programming",
    count: "11",
    url: "/articles/programming",
  },
  {
    id: "3",
    image:
      "https://img.freepik.com/free-photo/straw-hat-kept-empty-beach-chair_1252-488.jpg",
    title: "News",
    count: "36",
    url: "/articles/news",
  },
  {
    id: "4",
    image:
      "https://img.freepik.com/free-photo/straw-hat-kept-empty-beach-chair_1252-488.jpg",
    title: "Handy",
    count: "25",
    url: "/articles/handy",
  },
  {
    id: "5",
    image:
      "https://img.freepik.com/free-photo/straw-hat-kept-empty-beach-chair_1252-488.jpg",
    title: "Learning",
    count: "201",
    url: "/articles/learning",
  },
  {
    id: "6",
    image:
      "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",
    title: "Nature Around No More",
    tag: "NATURE",
    summary: "asassasa at live together to form amazing environment.",
    url: "/a2",
  },
  {
    id: "7",
    image:
      "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",
    title: "Nature",
    count: "101",
    url: "/articles/nature",
  },
  {
    id: "8",
    image:
      "https://img.freepik.com/free-photo/straw-hat-kept-empty-beach-chair_1252-488.jpg",
    title: "Adventure",
    count: "90",
    url: "/articles/adventure",
  },
  {
    id: "9",
    image:
      "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",
    title: "Programming",
    count: "11",
    url: "/articles/programming",
  },
  {
    id: "10",
    image:
      "https://img.freepik.com/free-photo/straw-hat-kept-empty-beach-chair_1252-488.jpg",
    title: "News",
    count: "36",
    url: "/articles/news",
  },
  {
    id: "11",
    image:
      "https://img.freepik.com/free-photo/straw-hat-kept-empty-beach-chair_1252-488.jpg",
    title: "Handy",
    count: "25",
    url: "/articles/handy",
  },
  {
    id: "12",
    image:
      "https://img.freepik.com/free-photo/straw-hat-kept-empty-beach-chair_1252-488.jpg",
    title: "Learning",
    count: "201",
    url: "/articles/learning",
  },
  {
    id: "13",
    image:
      "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",
    title: "Nature Around No More",
    tag: "NATURE",
    summary: "asassasa at live together to form amazing environment.",
    url: "/a2",
  },
  {
    id: "14",
    image:
      "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",
    title: "Nature",
    count: "101",
    url: "/articles/nature",
  },
  {
    id: "15",
    image:
      "https://img.freepik.com/free-photo/straw-hat-kept-empty-beach-chair_1252-488.jpg",
    title: "Adventure",
    count: "90",
    url: "/articles/adventure",
  },
  {
    id: "16",
    image:
      "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",
    title: "Programming",
    count: "11",
    url: "/articles/programming",
  },
  {
    id: "17",
    image:
      "https://img.freepik.com/free-photo/straw-hat-kept-empty-beach-chair_1252-488.jpg",
    title: "News",
    count: "36",
    url: "/articles/news",
  },
  {
    id: "18",
    image:
      "https://img.freepik.com/free-photo/straw-hat-kept-empty-beach-chair_1252-488.jpg",
    title: "Handy",
    count: "25",
    url: "/articles/handy",
  },
  {
    id: "19",
    image:
      "https://img.freepik.com/free-photo/straw-hat-kept-empty-beach-chair_1252-488.jpg",
    title: "Learning",
    count: "201",
    url: "/articles/learning",
  },
  {
    id: "20",
    image:
      "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",
    title: "Nature Around No More",
    tag: "NATURE",
    summary: "asassasa at live together to form amazing environment.",
    url: "/a2",
  },
];

export default function AllArticles() {
  var classes = useStyles();
  const [articlesList, setTopicList] = useState(articles.slice(0, 2));

  const loadMoreEpisodes = async () => {
    try {
      if (articlesList.length < articles.length) {
        // setLoading(true);
        const end =
          articlesList.length + 2 > articles.length
            ? articles.length
            : articlesList.length + 2;
        setTopicList([
          ...articlesList,
          ...articles.slice(articlesList.length, end),
        ]);
        // setLoading(false);
      }
    } catch (error) {
      // setError(error);
      // setLoading(false);
    }
  };

  return (
    <Grid className={classes.mainGrid} container direction="column">
      <InfiniteScroll
        data-testid="episodes-infinite-scroll"
        pageStart={0}
        loadMore={loadMoreEpisodes}
        hasMore={articlesList.length < articles.length}
        loader={<CircularProgress />}
      >
        <Articles articlesList={articlesList} />
      </InfiniteScroll>
    </Grid>
  );
}

function Articles({ articlesList, itemsPerRow }) {
  var classes = useStyles();
  const navigate = useNavigate();

  const rows = articlesList.reduce(function (rows, article, index) {
    return (
      (index % 3 === 0
        ? rows.push([article])
        : rows[rows.length - 1].push(article)) && rows
    );
  }, []);
  return rows?.map((row, index) => (
    <div
      key={index}
      style={{ display: "flex", flexDirection: "row", height: 500 }}
    >
      {row.map((post) => (
        <Card
          key={post.id}
          className={classes.card}
          onClick={(e) => {
            navigate(post.url);
          }}
        >
          <CardMedia className={classes.cardMedia} image={post.image} />
          <CardContent className={classes.cardContent}>
            <Grid container className={classes.cardContentGrid}>
              <Grid container className={classes.cardAuthorGrid}>
                <Avatar
                  className={classes.cardAvatar}
                  key={post.avatar}
                  src={post.avatar}
                />
                <Typography className={classes.cardAuthor} variant="subtitle2">
                  Daniel Rachlin
                </Typography>
              </Grid>
              <Typography className={classes.cardTitle} variant="subtitle1">
                {post.title}
              </Typography>
            </Grid>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Grid container className={classes.cardDateTimeGrid}>
              <Typography className={classes.cardDate} variant="body2">
                Sep 2
              </Typography>
              <Typography className={classes.cardDotSpace} variant="body2">
                ·
              </Typography>
              <Typography className={classes.cardTimeRead} variant="body2">
                6 min. read
              </Typography>
            </Grid>
          </CardActions>
        </Card>
      ))}
      {/* {row.length === 2 && <div>{row[1].title}</div>} */}
    </div>
  ));
}
