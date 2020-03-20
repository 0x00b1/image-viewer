import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import React from 'react';

import { useStyles } from './ApplicationAppBar.css';

import { ApplicationToolbar } from '../ApplicationToolbar';
import { useSelector } from 'react-redux';
import { State } from '../../../store/reducer';

export const ApplicationAppBar = () => {
  const maximized = useSelector((state: State) => state.maximized);

  const styles = useStyles();

  const className = clsx(styles.appBar, {
    [styles.shift]: maximized
  });

  return (
    <AppBar className={className} position="fixed">
      <ApplicationToolbar />
    </AppBar>
  );
};
