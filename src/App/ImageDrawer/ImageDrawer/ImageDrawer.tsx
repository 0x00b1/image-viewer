import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useStyles } from './ImageDrawer.css';
import { ChannelsList } from '../ChannelsList';

type ImageDrawerProps = {};

export const ImageDrawer = (_: ImageDrawerProps) => {
  const classes = useStyles();

  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.paper }}
      className={classes.drawer}
      variant="permanent"
    >
      <div className={classes.toolbar} />

      <ChannelsList />
    </Drawer>
  );
};
