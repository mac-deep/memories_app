import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Grid } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { createPost, updatePost } from "../../redux/actions/posts";
import AuthWithGoogle from "../AuthWithGoogle/AuthWithGoogle";

function Form({ currentId, setCurrentId, closeDrawer }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
    } else {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  if (!user?.result?.name) {
    return <AuthWithGoogle />;
  }

  return (
    <div className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing` : `Creating`} a Memories
        </Typography>

        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          inputProps={{ maxLength: 50 }}
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          multiline
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          inputProps={{ maxLength: 200 }}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          inputProps={{ maxLength: 50 }}
          helperText="Separate tags by comma"
          placeholder="apple,banana,cherry"
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          onClick={closeDrawer}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          // size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </div>
  );
}

export default Form;
