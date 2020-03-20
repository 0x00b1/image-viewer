import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LabelIcon from '@material-ui/icons/Label';
import { ChannelMenu } from '../ChannelMenu';
import { Channel } from '../../../../../store/reducer';
import Typography from '@material-ui/core/Typography';
import { Tooltip } from '@material-ui/core';

type ChannelListItemProps = {
  channel: Channel;
};

export const ChannelListItem = ({ channel }: ChannelListItemProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Tooltip title={channel.description}>
        <ListItem button dense>
          <ListItemIcon>
            <LabelIcon />
          </ListItemIcon>
          <ListItemText disableTypography>
            <Typography noWrap variant="body2">
              {channel.description}
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={onClick}>
              <MoreHorizIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Tooltip>

      <ChannelMenu
        anchorEl={anchorEl}
        channel={channel}
        onClose={() => setAnchorEl(null)}
        open={Boolean(anchorEl)}
      />
    </>
  );
};
