import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import {useStyles} from "./ImageDrawer.css";

export const ImageDrawer = () => {
  const classes = useStyles();

  return (
    <Drawer anchor="right" classes={{paper: classes.paper}} className={classes.drawer} variant="permanent" >
      <div className={classes.toolbar} />
    </Drawer>
  )
};
