import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { NewChannelDialog } from '../../NewChannelDialog';

type NewChannelListItemProps = {};

export const NewChannelListItem = (_: NewChannelListItemProps) => {
  const [open, setOpen] = useState(false);

  const onClick = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <ListItem button dense onClick={onClick}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>

        <ListItemText primary={'New channel'} />
      </ListItem>

      <NewChannelDialog onClose={onClose} open={open} />
    </>
  );
};
