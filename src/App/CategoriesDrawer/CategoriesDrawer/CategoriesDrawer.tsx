import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useStyles } from './CategoriesDrawer.css';
import { CategoriesList } from '../CategoriesList';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import clsx from 'clsx';

type CategoriesDrawerProps = {
  maximized: boolean;
  minimize: () => void;
};

export const CategoriesDrawer = ({
  minimize,
  maximized
}: CategoriesDrawerProps) => {
  const styles = useStyles();

  const theme = useTheme();

  const classes = {
    paper: clsx({
      [styles.maximized]: maximized,
      [styles.minimized]: !maximized
    })
  };

  const className = clsx(styles.drawer, {
    [styles.maximized]: maximized,
    [styles.minimized]: !maximized
  });

  return (
    <Drawer classes={classes} className={className} variant="permanent">
      <div className={styles.toolbar}>
        <IconButton onClick={minimize}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>

      <CategoriesList maximized={maximized} />
    </Drawer>
  );
};