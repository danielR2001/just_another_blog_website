import React from "react";
import Post from "../post/Post";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, useTheme } from "@mui/material";
import { useEffect } from "react";
import { getPosts } from "../../../core/actions/posts";
import useStyles from "./styles";

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const dispatch = useDispatch();
  var classes = useStyles();
  var theme = useTheme();

  useEffect(() => {
    console.log("Posts init");
    dispatch(getPosts());
  }, []);

  useEffect(() => {
    return () => {
      console.log("Posts disposed");
    };
  }, []);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <div>
      {posts.map((post) => (
        <div className={classes.card} key={post._id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
}
