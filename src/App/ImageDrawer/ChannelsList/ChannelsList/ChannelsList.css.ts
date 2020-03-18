import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

let style = ({palette}: Theme) => {
  return createStyles({
    root: {
      backgroundColor: palette.background.paper,
      maxWidth: 360,
      width: '100%'
    }
  });
};

export const useStyles = makeStyles(style);
