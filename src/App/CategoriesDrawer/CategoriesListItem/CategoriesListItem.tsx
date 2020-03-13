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

type CategoriesListItemProps = {
  description: string;
  maximized: boolean;
};

export const CategoriesListItem = ({
  description,
  maximized
}: CategoriesListItemProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [deleteCategoryDialogOpen, setDeleteCategoryDialogOpen] = useState(
    false
  );
  const [editCategoryDialogOpen, setEditCategoryDialogOpen] = useState(false);

  const onDeleteCategoryDialogClose = () => {
    setDeleteCategoryDialogOpen(false);
  };

  const onEditCategoryDialogClose = () => {
    setEditCategoryDialogOpen(false);
  };

  const onClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const onDeleteCategoryMenuItemClick = () => {
    onClose();

    setDeleteCategoryDialogOpen(true);
  };

  const onEditCategoryMenuItemClick = () => {
    onClose();

    setEditCategoryDialogOpen(true);
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

      <Menu
        anchorEl={anchorEl}
        keepMounted
        onClose={onClose}
        open={Boolean(anchorEl)}
      >
        <MenuItem dense onClick={onEditCategoryMenuItemClick}>
          {'Edit category'}
        </MenuItem>
        <MenuItem dense onClick={onDeleteCategoryMenuItemClick}>
          {'Delete category'}
        </MenuItem>
      </Menu>

      <DeleteCategoryDialog
        onClose={onDeleteCategoryDialogClose}
        open={deleteCategoryDialogOpen}
      />

      <EditCategoryDialog
        onClose={onEditCategoryDialogClose}
        open={editCategoryDialogOpen}
      />
    </>
  );
};
