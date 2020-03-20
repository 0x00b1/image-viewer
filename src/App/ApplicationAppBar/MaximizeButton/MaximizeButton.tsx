import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React from 'react';

import { useStyles } from './MaximizeButton.css';
import { useDispatch, useSelector } from 'react-redux';
import { slice, State } from '../../../store/reducer';

export const MaximizeButton = () => {
  const dispatch = useDispatch();

  const maximized = useSelector((state: State) => state.maximized);

  const classes = useStyles();

  const className = clsx(classes.iconButton, {
    [classes.hide]: maximized
  });

  const onMaximize = () => {
    dispatch(slice.actions.maximize());
  };

  return (
    <IconButton
      className={className}
      color="inherit"
      edge="start"
      onClick={onMaximize}
    >
      <MenuIcon />
    </IconButton>
  );
};
