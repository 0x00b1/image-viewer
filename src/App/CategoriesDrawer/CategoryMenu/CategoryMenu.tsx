import React from 'react';
import Menu from '@material-ui/core/Menu';
import { EditCategoryMenuItem } from '../EditCategoryMenuItem';
import { DeleteCategoryMenuItem } from '../DeleteCategoryMenuItem';

type CategoryMenuProps = {
  anchorEl: null | HTMLElement;
  onClose: () => void;
  open: boolean;
};

export const CategoryMenu = ({
  anchorEl,
  onClose,
  open
}: CategoryMenuProps) => {
  return (
    <Menu anchorEl={anchorEl} keepMounted onClose={onClose} open={open}>
      <EditCategoryMenuItem onMenuClose={onClose} />
      <DeleteCategoryMenuItem onMenuClose={onClose} />
    </Menu>
  );
};
