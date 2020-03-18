import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {Category, slice} from "../../../store/reducer";

type DeleteCategoryDialogProps = {
  category: Category;
  onClose: () => void;
  open: boolean;
};

export const DeleteCategoryDialog = ({
  category,
  onClose,
  open
}: DeleteCategoryDialogProps) => {
  const dispatch = useDispatch();

  const onDeleteCategory = () => {
    dispatch(slice.actions.deleteCategory(category));

    onClose();
  };

  return (
    <Dialog fullWidth onClose={onClose} open={open}>
      <DialogTitle>{'Delete category?'}</DialogTitle>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          {'Cancel'}
        </Button>

        <Button onClick={onDeleteCategory} color="primary" autoFocus>
          {'Delete'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
