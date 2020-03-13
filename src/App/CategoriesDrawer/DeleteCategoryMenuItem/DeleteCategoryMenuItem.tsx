import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { DeleteCategoryDialog } from '../../DeleteCategoryDialog';

type DeleteCategoryMenuItemProps = {
  onMenuClose: () => void;
};

export const DeleteCategoryMenuItem = ({
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

      <DeleteCategoryDialog onClose={onClose} open={open} />
    </>
  );
};
