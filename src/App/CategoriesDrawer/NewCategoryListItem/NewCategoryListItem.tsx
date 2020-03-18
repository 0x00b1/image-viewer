import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { useStyles } from './NewCategoryListItem.css';
import clsx from 'clsx';
import { NewCategoryDialog } from '../NewCategoryDialog';

type NewCategoryListItemProps = {
  maximized: boolean;
};

export const NewCategoryListItem = ({
  maximized
}: NewCategoryListItemProps) => {
  const [open, setOpen] = useState(false);

  const onClick = () => setOpen(true);
  const onClose = () => setOpen(false);

  const styles = useStyles();

  const className = clsx({
    [styles.hide]: !maximized
  });

  return (
    <>
      <ListItem button className={className} dense onClick={onClick}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>

        <ListItemText primary={'New category'} />
      </ListItem>

      <NewCategoryDialog onClose={onClose} open={open} />
    </>
  );
};
