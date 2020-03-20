import React from 'react';
import { useStyles } from './Main.css';
import { ImageCanvas } from '../ImageCanvas';
import { Image } from 'image-js';
import { useSelector } from 'react-redux';
import { State } from '../../../store/reducer';
import clsx from 'clsx';

type MainProps = {
  image: Image;
};

export const Main = ({ image }: MainProps) => {
  const maximized = useSelector((state: State) => state.maximized);

  const styles = useStyles();

  const className = clsx(styles.main, {
    [styles.maximized]: maximized,
    [styles.minimized]: !maximized
  });

  return (
    <main className={className}>
      <div className={styles.toolbar} />

      <ImageCanvas image={image} />
    </main>
  );
};
