import CssBaseline from '@material-ui/core/CssBaseline';
import { Image } from 'image-js';
import React, { useEffect, useState } from 'react';

import { useStyles } from './App.css';
import { ApplicationAppBar } from './ApplicationAppBar';
import { CategoriesDrawer } from './CategoriesDrawer';
import { ImageCanvas } from './ImageCanvas';
import { ImageDrawer } from './ImageDrawer';

type AppProps = {
  src: string;
};

export const App = ({ src }: AppProps) => {
  const [image, setImage] = useState<Image>(new Image());
  const [maximized, setMaximized] = useState(true);

  const styles = useStyles();

  const maximize = () => setMaximized(true);
  const minimize = () => setMaximized(false);

  const openImage = async () => {
    const opened = await Image.load(src);

    setImage(opened);
  };

  useEffect(() => {
    openImage();
  }, [src]);

  return (
    <div className={styles.root}>
      <CssBaseline />

      <ApplicationAppBar maximize={maximize} maximized={maximized} />

      <CategoriesDrawer minimize={minimize} maximized={maximized} />

      <ImageDrawer image={image} />

      <main className={styles.content}>
        <div className={styles.toolbar} />

        <ImageCanvas />
      </main>
    </div>
  );
};
