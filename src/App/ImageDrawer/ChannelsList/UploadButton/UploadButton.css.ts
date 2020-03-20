import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

let style = ({ spacing }: Theme) => {
  return createStyles({
    input: {
      display: 'none'
    },
    root: {
      '& > *': {
        margin: spacing(1)
      }
    }
  });
};

export const useStyles = makeStyles(style);
