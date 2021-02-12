import React from "react";
import { AppBar, IconButton, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import useStyles from "./styles";
import memories from "../../images/memories.png";
import Drawer from "@material-ui/core/Drawer";
import { open } from "../../redux/actions/drawer";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const drawer = useSelector((state) => state.drawer);
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant={matches ? "h4" : "h2"}
          align="center"
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height={matches ? "50px" : "70px"}
        />
      </div>
      <IconButton size="medium" onClick={() => dispatch(open())}>
        <MenuIcon style={{ color: "white" }} />
      </IconButton>

      <Drawer anchor="right" open={drawer} className={classes.drawer}>
        <Sidebar currentId={currentId} setCurrentId={setCurrentId} />
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
