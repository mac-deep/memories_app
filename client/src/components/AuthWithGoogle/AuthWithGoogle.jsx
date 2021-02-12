import React from "react";
import { Button, Typography, Paper } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";
import Icon from "../Auth/icon";

const AuthWithGoogle = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = () => {
    console.log("Google Sign In was unsuccessful");
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" align="center">
        Please Sign In to create your own memories
      </Typography>
      <GoogleLogin
        clientId="167666090338-t88fdkq4mo99fhf85ujr0gpghm5l1ut3.apps.googleusercontent.com"
        render={(renderProps) => (
          <Button
            className={classes.googleButton}
            color="primary"
            // fullWidth
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            startIcon={<Icon />}
            variant="contained"
          >
            Google Sign In
          </Button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy="single_host_origin"
      />
    </Paper>
  );
};
//     )
// }

export default AuthWithGoogle;
