import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Channel, slice } from '../../../store/reducer';
import { v4 as uuidv4 } from 'uuid';

type NewChannelDialogProps = {
  onClose: () => void;
  open: boolean;
};

export const NewChannelDialog = ({ onClose, open }: NewChannelDialogProps) => {
  const dispatch = useDispatch();

  const [description, setDescription] = useState<string>('');

  const onCreateChannel = () => {
    const channel: Channel = {
      brightness: 0.0,
      contrast: 0.0,
      description: description,
      identifier: uuidv4()
    };

    dispatch(slice.actions.createChannel(channel));

    onClose();
  };

  const onDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle>{'New channel'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          label={'Channel description'}
          margin="dense"
          onChange={onDescriptionChange}
          value={description}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {'Cancel'}
        </Button>
        <Button onClick={onCreateChannel} color="primary">
          {'Create'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
