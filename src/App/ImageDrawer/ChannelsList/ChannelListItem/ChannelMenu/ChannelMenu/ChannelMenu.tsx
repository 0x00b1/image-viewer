import React from 'react';
import Menu from '@material-ui/core/Menu';
import { EditChannelMenuItem } from '../EditChannelMenuItem';
import { DeleteChannelMenuItem } from '../DeleteChannelMenuItem';

type ChannelMenuProps = {
  anchorEl: null | HTMLElement;
  onClose: () => void;
  open: boolean;
};

export const ChannelMenu = ({
                               anchorEl,
                               onClose,
                               open
                             }: ChannelMenuProps) => {
  return (
    <Menu anchorEl={anchorEl} keepMounted onClose={onClose} open={open}>
      <EditChannelMenuItem onMenuClose={onClose} />
      <DeleteChannelMenuItem onMenuClose={onClose} />
    </Menu>
  );
};
