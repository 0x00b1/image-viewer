import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { DeleteChannelDialog } from '../../DeleteChannelDialog';
import { Channel } from '../../../../../store/reducer';

type DeleteChannelMenuItemProps = {
  channel: Channel;
  onMenuClose: () => void;
};

export const DeleteChannelMenuItem = ({
  channel,
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
        {'Delete channel'}
      </MenuItem>

      <DeleteChannelDialog channel={channel} onClose={onClose} open={open} />
    </>
  );
};
