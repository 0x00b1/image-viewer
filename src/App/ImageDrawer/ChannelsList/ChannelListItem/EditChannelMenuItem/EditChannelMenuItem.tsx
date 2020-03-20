import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { EditChannelDialog } from '../../EditChannelDialog';
import { Channel } from '../../../../../store/reducer';

type EditChannelMenuItemProps = {
  channel: Channel;
  onMenuClose: () => void;
};

export const EditChannelMenuItem = ({
  channel,
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

      <EditChannelDialog channel={channel} onClose={onClose} open={open} />
    </>
  );
};
