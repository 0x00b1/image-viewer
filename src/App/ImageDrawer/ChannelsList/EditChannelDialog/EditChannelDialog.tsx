import React, { ChangeEvent, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { Channel, slice } from '../../../../store/reducer';
import { useDispatch } from 'react-redux';
import { BrightnessSlider } from '../BrightnessSlider';
import { ContrastSlider } from '../ContrastSlider';
import { UploadButton } from '../UploadButton';

type EditChannelDialogProps = {
  channel: Channel;
  onClose: () => void;
  open: boolean;
};

export const EditChannelDialog = ({
  channel,
  onClose,
  open
}: EditChannelDialogProps) => {
  const dispatch = useDispatch();

  const [description, setDescription] = useState<string>(channel.description);

  const onDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const onEditChannel = () => {
    const edited: Channel = {
      ...channel,
      description: description
    };

    dispatch(slice.actions.editCategory(edited));

    onClose();
  };

  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle>{'Edit channel'}</DialogTitle>
      <DialogContent>
        <UploadButton />

        <TextField
          autoFocus
          fullWidth
          label={'Channel description'}
          margin="dense"
          onChange={onDescriptionChange}
          value={description}
        />

        <br />
        <br />
        <BrightnessSlider channel={channel} />

        <ContrastSlider channel={channel} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {'Cancel'}
        </Button>
        <Button onClick={onEditChannel} color="primary">
          {'Edit'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
