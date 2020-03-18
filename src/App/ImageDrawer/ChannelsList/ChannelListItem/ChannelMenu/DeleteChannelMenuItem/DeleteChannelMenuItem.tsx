import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';

type DeleteChannelMenuItemProps = {
  onMenuClose: () => void;
};

export const DeleteChannelMenuItem = ({
                                         onMenuClose
                                       }: DeleteChannelMenuItemProps) => {
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
    </>
  );
};
