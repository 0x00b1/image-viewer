import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { DeleteCategoryDialog } from '../DeleteCategoryDialog';
import {Category} from "../../../store/reducer";

type DeleteCategoryMenuItemProps = {
  category: Category,
  onMenuClose: () => void;
};

export const DeleteCategoryMenuItem = ({
  category,
  onMenuClose
}: DeleteCategoryMenuItemProps) => {
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
        {'Delete category'}
      </MenuItem>

      <DeleteCategoryDialog category={category} onClose={onClose} open={open} />
    </>
  );
};
