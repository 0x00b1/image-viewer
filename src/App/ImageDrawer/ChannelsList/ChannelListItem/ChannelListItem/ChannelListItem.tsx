import IconButton from '@material-ui/core/IconButton';
import LabelIcon from '@material-ui/icons/Label';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import React from 'react';

type ChannelListItemProps = {
  description: string;
};

export const ChannelListItem = ({description}: ChannelListItemProps) => {
  return (
    <ListItem button dense>
      <ListItemIcon>
        <LabelIcon />
      </ListItemIcon>
      <ListItemText primary={description} />
      <ListItemSecondaryAction>
        <IconButton edge="end">
          <MoreHorizIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
