import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';

import { MaximizeButton } from '../MaximizeButton/MaximizeButton';

type ApplicationToolbarProps = {
  maximize: () => void;
  maximized: boolean;
};

export const ApplicationToolbar = ({
  maximize,
  maximized
}: ApplicationToolbarProps) => {
  return (
    <Toolbar>
      <MaximizeButton maximize={maximize} maximized={maximized} />
    </Toolbar>
  );
};
