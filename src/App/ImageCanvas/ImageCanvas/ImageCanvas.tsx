import React, { useCallback, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import Grid from '@material-ui/core/Grid';
import { Image } from 'image-js';
import { useDropzone } from 'react-dropzone';

import { useStyles } from './ImageCanvas.css';
import { Mesh } from '../Mesh';

type ImageCanvasProps = {
  image: Image;
};

// const updated = range(opened.components).map((component: number): Channel => {
//   return {
//     brightness: 1.0,
//     contrast: 1.0,
//     description: '',
//     identifier: uuidv4(),
//     image: opened.getComponent(component)
//   };
// });

export const ImageCanvas = ({ image }: ImageCanvasProps) => {
  const [abort, setAbort] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [opened, setOpened] = useState<Image>();
  const [opening, setOpening] = useState<boolean>(false);

  const onDrop = useCallback(
    files => {
      const open = async (buffer: any) => {
        setOpened(await Image.load(buffer));
      };

      files.forEach((file: File) => {
        const reader = new FileReader();

        reader.onabort = () => {
          setAbort(true);

          setOpening(false);
        };

        reader.onerror = () => {
          setError(true);

          setOpening(false);
        };

        reader.onload = () => {
          const data = reader.result;

          open(data);

          console.log(opened);
        };

        reader.readAsArrayBuffer(file);
      });
    },
    [opened]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const styles = useStyles();

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Grid container>
        <Canvas className={styles.canvas}>
          <Mesh image={image} />
        </Canvas>
      </Grid>
    </div>
  );
};
