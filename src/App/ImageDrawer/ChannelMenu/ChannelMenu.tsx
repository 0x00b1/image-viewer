import React from 'react';
import Menu from '@material-ui/core/Menu';
import { EditChannelMenuItem } from '../EditChannelMenuItem';
import { DeleteChannelMenuItem } from '../DeleteChannelMenuItem';
import { Channel } from '../../../store/reducer';

type ChannelMenuProps = {
  anchorEl: null | HTMLElement;
  channel: Channel;
  onClose: () => void;
  open: boolean;
};

export const ChannelMenu = ({
  anchorEl,
  channel,
  onClose,
  open
}: ChannelMenuProps) => {
  return (
    <Menu anchorEl={anchorEl} keepMounted onClose={onClose} open={open}>
      <EditChannelMenuItem channel={channel} onMenuClose={onClose} />
      <DeleteChannelMenuItem channel={channel} onMenuClose={onClose} />
    </Menu>
  );
};
