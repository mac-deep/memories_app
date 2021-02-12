import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, Grow } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from "./styles";

function Posts({ setCurrentId }) {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <div className={classes.loading}>
      <CircularProgress />
    </div>
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grow in key={post._id}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        </Grow>
      ))}
    </Grid>
  );
}

export default Posts;
