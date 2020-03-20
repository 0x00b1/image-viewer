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
import { Category, slice, State } from '../../../store/reducer';
import { useDispatch, useSelector } from 'react-redux';

type CategoriesListItemProps = {
  category: Category;
  maximized: boolean;
};

export const CategoriesListItem = ({
  category,
  maximized
}: CategoriesListItemProps) => {
  const dispatch = useDispatch();

  const selected = useSelector((state: State) => {
    return state.selected === category.identifier;
  });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onClick = () => {
    if (selected) {
      dispatch(slice.actions.deselect());
    } else {
      dispatch(slice.actions.select(category));
    }
  };

  const styles = useStyles();

  return (
    <>
      <ListItem button dense onClick={onClick} selected={selected}>
        <ListItemIcon>
          <LabelIcon />
        </ListItemIcon>
        <ListItemText primary={category.description} />
        <ListItemSecondaryAction
          className={clsx({ [styles.hide]: !maximized })}
        >
          <IconButton edge="end" onClick={e => setAnchorEl(e.currentTarget)}>
            <MoreHorizIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      <CategoryMenu
        anchorEl={anchorEl}
        category={category}
        onClose={() => setAnchorEl(null)}
        open={Boolean(anchorEl)}
      />
    </>
  );
};
