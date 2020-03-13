import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { useStyles } from './NewCategoryListItem.css';
import clsx from 'clsx';

type NewCategoryListItemProps = {
  maximized: boolean;
};

export const NewCategoryListItem = ({
  maximized
}: NewCategoryListItemProps) => {
  const styles = useStyles();

  const className = clsx({
    [styles.hide]: !maximized
  });

  return (
    <ListItem button className={className} dense>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary={'New category'} />
    </ListItem>
  );
};
