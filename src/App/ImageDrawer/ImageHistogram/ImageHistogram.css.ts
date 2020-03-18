import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

let style = ({palette}: Theme) => {
  return createStyles({
    root: {
      height: 'auto !important'
    }
  });
};

export const useStyles = makeStyles(style);
