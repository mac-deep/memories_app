import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import Form from "../Form/Form";
import AuthWithGoogle from "../AuthWithGoogle/AuthWithGoogle";

const useStyles = makeStyles({
  list: {
    width: 400,
  },
  fullList: {
    width: "auto",
  },
});

export default function DrawerButton() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };
  return (
    // <div>
    //   {["right"].map((anchor) => (
    //     <React.Fragment key={anchor}>
    //       <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
    //       <Drawer
    //         anchor={anchor}
    //         open={state[anchor]}
    //         onClose={toggleDrawer(anchor, false)}
    //       >
    //         {list(anchor)}
    //       </Drawer>
    //     </React.Fragment>
    //   ))}
    // </div>

    <React.Fragment>
      <IconButton>
        <MenuIcon onClick={toggleDrawer} />
      </IconButton>

      <Drawer
        anchor="right"
        open={isOpen}
        // onClose={toggleDrawer}
        // open={state[true]} onClose={toggleDrawer(false)}
      >
        <div className={classes.list}>
          <IconButton>
            <CloseIcon onClick={closeDrawer} />
          </IconButton>
          <Form />
        </div>
      </Drawer>
    </React.Fragment>
  );
}
