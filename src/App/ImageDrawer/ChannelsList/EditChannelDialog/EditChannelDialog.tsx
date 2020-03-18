import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

type EditChannelDialogProps = {
  onClose: () => void;
  open: boolean;
};

export const EditChannelDialog = ({
                                     onClose,
                                     open
                                   }: EditChannelDialogProps) => {
  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle>{'Edit channel'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          label={'Channel description'}
          margin="dense"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {'Cancel'}
        </Button>
        <Button onClick={onClose} color="primary">
          {'Update channel'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
