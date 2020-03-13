import React from 'react';
import { Canvas } from 'react-three-fiber';
import Grid from '@material-ui/core/Grid';
import { Image } from 'image-js';

import { useStyles } from './ImageCanvas.css';
import { Mesh } from '../Mesh';

type ImageCanvasProps = {
  brightness: number;
  contrast: number;
  image: Image;
};

export const ImageCanvas = ({
  brightness,
  contrast,
  image
}: ImageCanvasProps) => {
  const styles = useStyles();

  return (
    <Grid container>
      <Canvas className={styles.canvas}>
        <Mesh brightness={brightness} contrast={contrast} image={image} />
      </Canvas>
    </Grid>
  );
};
