import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';

type DeleteChannelDialogProps = {
  onClose: () => void;
  open: boolean;
};

export const DeleteChannelDialog = ({
  onClose,
  open
}: DeleteChannelDialogProps) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{'Delete channel?'}</DialogTitle>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          {'Cancel'}
        </Button>

        <Button onClick={onClose} color="primary" autoFocus>
          {'Delete'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
