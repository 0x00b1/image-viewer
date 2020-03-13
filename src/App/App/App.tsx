import CssBaseline from '@material-ui/core/CssBaseline';
import { Image } from 'image-js';
import React, { useEffect, useState } from 'react';

import { useStyles } from './App.css';
import { ApplicationAppBar } from '../ApplicationAppBar/ApplicationAppBar';
import { CategoriesDrawer } from '../CategoriesDrawer/CategoriesDrawer';
import { ImageCanvas } from '../ImageCanvas/ImageCanvas';
import { ImageDrawer } from '../ImageDrawer/ImageDrawer';

type AppProps = {
  src: string;
};

export const App = ({ src }: AppProps) => {
  const [image, setImage] = useState<Image>(new Image());
  const [maximized, setMaximized] = useState(true);

  const styles = useStyles();

  const maximize = () => setMaximized(true);
  const minimize = () => setMaximized(false);

  useEffect(() => {
    const openImage = async () => {
      const opened = await Image.load(src);

      setImage(opened);
    };

    openImage().then(response => {});
  }, [src]);

  return (
    <div className={styles.root}>
      <CssBaseline />

      <ApplicationAppBar maximize={maximize} maximized={maximized} />

      <CategoriesDrawer minimize={minimize} maximized={maximized} />

      <ImageDrawer image={image} />

      <main className={styles.content}>
        <div className={styles.toolbar} />

        <ImageCanvas image={image} />
      </main>
    </div>
  );
};
