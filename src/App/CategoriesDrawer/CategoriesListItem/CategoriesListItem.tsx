import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LabelIcon from '@material-ui/icons/Label';
import clsx from 'clsx';
import { useStyles } from '../NewCategoryListItem/NewCategoryListItem.css';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { EditCategoryDialog } from '../../EditCategoryDialog';
import { DeleteCategoryDialog } from '../../DeleteCategoryDialog';
import { CategoryMenu } from '../CategoryMenu';

type CategoriesListItemProps = {
  description: string;
  maximized: boolean;
};

export const CategoriesListItem = ({
  description,
  maximized
}: CategoriesListItemProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => setAnchorEl(null);

  const styles = useStyles();

  return (
    <>
      <ListItem button dense>
        <ListItemIcon>
          <LabelIcon />
        </ListItemIcon>
        <ListItemText primary={description} />
        <ListItemSecondaryAction
          className={clsx({ [styles.hide]: !maximized })}
        >
          <IconButton edge="end" onClick={onClick}>
            <MoreHorizIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      <CategoryMenu
        anchorEl={anchorEl}
        onClose={onClose}
        open={Boolean(anchorEl)}
      />
    </>
  );
};
