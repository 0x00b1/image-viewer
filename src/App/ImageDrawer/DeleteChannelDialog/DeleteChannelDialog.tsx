import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Channel, slice } from '../../../store/reducer';

type DeleteChannelDialogProps = {
  channel: Channel;
  onClose: () => void;
  open: boolean;
};

export const DeleteChannelDialog = ({
  channel,
  onClose,
  open
}: DeleteChannelDialogProps) => {
  const dispatch = useDispatch();

  const onDeleteChannel = () => {
    dispatch(slice.actions.deleteChannel(channel));

    onClose();
  };

  return (
    <Dialog fullWidth onClose={onClose} open={open}>
      <DialogTitle>{'Delete channel?'}</DialogTitle>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          {'Cancel'}
        </Button>

        <Button onClick={onDeleteChannel} color="primary" autoFocus>
          {'Delete'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
