import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { EditCategoryDialog } from '../EditCategoryDialog';
import {Category} from "../../../store/reducer";

type CategoryMenuProps = {
  category: Category;
  onMenuClose: () => void;
};

export const EditCategoryMenuItem = ({ category, onMenuClose }: CategoryMenuProps) => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const onClick = () => {
    onMenuClose();

    setOpen(true);
  };

  return (
    <>
      <MenuItem dense onClick={onClick}>
        {'Edit category'}
      </MenuItem>

      <EditCategoryDialog category={category} onClose={onClose} open={open} />
    </>
  );
};
