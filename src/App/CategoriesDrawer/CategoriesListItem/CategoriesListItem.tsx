import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LabelIcon from '@material-ui/icons/Label';
import clsx from 'clsx';
import { useStyles } from '../NewCategoryListItem/NewCategoryListItem.css';

type CategoriesListItemProps = {
  description: string;
  maximized: boolean;
};

export const CategoriesListItem = ({
  description,
  maximized
}: CategoriesListItemProps) => {
  const styles = useStyles();

  return (
    <ListItem button dense>
      <ListItemIcon>
        <LabelIcon />
      </ListItemIcon>
      <ListItemText primary={description} />
      <ListItemSecondaryAction className={clsx({ [styles.hide]: !maximized })}>
        <IconButton edge="end" aria-label="delete">
          <MoreHorizIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
