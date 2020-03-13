import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useStyles } from './ImageDrawer.css';
import { ImageHistogram } from './ImageHistogram';
import { Image } from 'image-js';

type ImageDrawerProps = {
  image: Image;
};

export const ImageDrawer = ({ image }: ImageDrawerProps) => {
  const classes = useStyles();

  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.paper }}
      className={classes.drawer}
      variant="permanent"
    >
      <div className={classes.toolbar} />

      <ImageHistogram bins={16} image={image} />
    </Drawer>
  );
};
