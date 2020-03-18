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
import { CategoryMenu } from '../CategoryMenu';
import {Category} from "../../../store/reducer";

type CategoriesListItemProps = {
  category: Category;
  maximized: boolean;
};

export const CategoriesListItem = ({
  category,
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
        <ListItemText primary={category.description} />
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
        category={category}
        onClose={onClose}
        open={Boolean(anchorEl)}
      />
    </>
  );
};
