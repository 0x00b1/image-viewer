import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';

import { MaximizeButton } from '../MaximizeButton';

export const ApplicationToolbar = () => {
  return (
    <Toolbar>
      <MaximizeButton />
    </Toolbar>
  );
};
