import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { EditCategoryDialog } from '../../EditCategoryDialog';

type CategoryMenuProps = {
  onMenuClose: () => void;
};

export const EditCategoryMenuItem = ({ onMenuClose }: CategoryMenuProps) => {
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

      <EditCategoryDialog onClose={onClose} open={open} />
    </>
  );
};
