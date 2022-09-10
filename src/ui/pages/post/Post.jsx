import React from "react";
import { Card, CardMedia } from "@mui/material";

export default function Post({ post }) {
  return (
    <div>
      <img src={post.selectedFile} alt="asas" />
      <div>
        {post.title}
      </div>
      <div>
        {post.creator}
      </div>
      <div>
        {post.message}
      </div>
      <div>
        {post.tags}
      </div>
    </div>
  );
}
