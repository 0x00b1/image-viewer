import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import React from 'react';

import { useStyles } from './ApplicationAppBar.css';

import { ApplicationToolbar } from '../ApplicationToolbar/ApplicationToolbar';

type ApplicationAppBarProps = {
  maximize: () => void;
  maximized: boolean;
};

export const ApplicationAppBar = ({
  maximize,
  maximized
}: ApplicationAppBarProps) => {
  const styles = useStyles();

  const className = clsx(styles.appBar, {
    [styles.shift]: maximized
  });

  return (
    <AppBar className={className} position="fixed">
      <ApplicationToolbar maximize={maximize} maximized={maximized} />
    </AppBar>
  );
};
