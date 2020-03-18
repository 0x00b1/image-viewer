import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';

type EditChannelMenuItemProps = {
  onMenuClose: () => void;
};

export const EditChannelMenuItem = ({
                                        onMenuClose
                                      }: EditChannelMenuItemProps) => {
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
        {'Edit channel'}
      </MenuItem>
    </>
  );
};
