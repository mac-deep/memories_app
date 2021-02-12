import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  list: {
    height: "100vh",
    backgroundImage: "linear-gradient( #2af598 0%, #fff 100%)",
    width: 400,
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "10px",
    height: "auto",
  },
  profile: {
    marginTop: "10px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "600",
  },
  avatarLarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginBottom: "10px",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  [theme.breakpoints.down("xs")]: {
    list: {
      width: "100%",
    },
  },
}));
