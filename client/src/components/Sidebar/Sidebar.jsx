import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Avatar, IconButton, Tooltip, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import decode from "jwt-decode";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import Img from "../../images/memories.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import Form from "../Form/Form";
import { open } from "../../redux/actions/drawer";
import useStyles from "./styles";
import { getPosts } from "../../redux/actions/posts";
const Sidebar = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const token = user?.token;

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  useEffect(() => {
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
  }, [history, token]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    return user;
  }, [user]);

  return (
    <div className={classes.list}>
      <div className={classes.buttons}>
        <IconButton color="primary" onClick={() => dispatch(open())}>
          <ArrowForwardIosIcon />
        </IconButton>
        <div className={classes.profile}>
          <Avatar
            className={classes.avatarLarge}
            src={user ? user.result.imageUrl : Img}
          />
          <Typography variant="h5">{user?.result.name}</Typography>
        </div>
        <IconButton
          disabled={!user}
          variant="contained"
          className={classes.logout}
          color="secondary"
          onClick={logout}
        >
          <Tooltip title="LogOut">
            <ExitToAppIcon />
          </Tooltip>
        </IconButton>
      </div>
      <Form
        closeDrawer={() => dispatch(open())}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
    </div>
  );
};

export default Sidebar;
