import React, { useEffect, useState } from "react";
import { Container, Grid, Grow } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Posts from "../Posts/Posts";
import { getPosts } from "../../redux/actions/posts";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  //   const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Navbar currentId={currentId} setCurrentId={setCurrentId} />
        <Grid
          container
          //   className={classes.mainContainer}
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
