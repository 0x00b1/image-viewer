import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from 'clsx';
import React from "react";

import {useStyles} from "./MaximizeButton.css";

type MaximizeButtonProps = {
  maximize: () => void;
  maximized: boolean;
}

export const MaximizeButton = ({maximize, maximized}: MaximizeButtonProps) => {
  const classes = useStyles();

  const className = clsx(classes.iconButton, {
    [classes.hide]: maximized
  });

  return (
    <IconButton className={className} color="inherit" edge="start" onClick={maximize}>
      <MenuIcon />
    </IconButton>
  );
};
