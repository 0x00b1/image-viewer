import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LabelIcon from '@material-ui/icons/Label';
import { ChannelMenu } from '../ChannelMenu';
import { Channel } from '../../../../store/reducer';

type ChannelsListItemProps = {
  channel: Channel;
};

export const ChannelsListItem = ({ channel }: ChannelsListItemProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => setAnchorEl(null);

  return (
    <>
      <ListItem button dense>
        <ListItemIcon>
          <LabelIcon />
        </ListItemIcon>
        <ListItemText primary={channel.description} />
        <ListItemSecondaryAction>
          <IconButton edge="end" onClick={onClick}>
            <MoreHorizIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      <ChannelMenu
        anchorEl={anchorEl}
        channel={channel}
        onClose={onClose}
        open={Boolean(anchorEl)}
      />
    </>
  );
};
