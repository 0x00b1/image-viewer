import React from 'react';
import {Canvas} from "react-three-fiber";
import Grid from "@material-ui/core/Grid";

import {useStyles} from "./ImageCanvas.css";
import barbara from "./barbara.jpg";
import {ImageMesh} from "./ImageMesh";

export const ImageCanvas = () => {
  const classes = useStyles();

  return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container>
          <Canvas>
            <ImageMesh image={barbara}/>
          </Canvas>
        </Grid>
      </main>
  )
};
