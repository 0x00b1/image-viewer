import CssBaseline from '@material-ui/core/CssBaseline';
import { Image } from 'image-js';
import React, { useEffect, useState } from 'react';

import { useStyles } from './App.css';
import { ApplicationAppBar } from '../ApplicationAppBar';
import { CategoriesDrawer } from '../CategoriesDrawer';
import { ImageCanvas } from '../ImageCanvas';
import { ImageDrawer } from '../ImageDrawer';

type AppProps = {
  src: string;
};

export const App = ({ src }: AppProps) => {
  const [image, setImage] = useState<Image>(new Image());

  const styles = useStyles();

  useEffect(() => {
    const openImage = async () => {
      const opened = await Image.load(src);

      setImage(opened);
    };

    openImage().catch(() => {});
  }, [src]);

  return (
    <div className={styles.root}>
      <CssBaseline />

      <ApplicationAppBar />

      <CategoriesDrawer />

      <ImageDrawer />

      <main className={styles.content}>
        <div className={styles.toolbar} />

        <ImageCanvas image={image} />
      </main>
    </div>
  );
};
