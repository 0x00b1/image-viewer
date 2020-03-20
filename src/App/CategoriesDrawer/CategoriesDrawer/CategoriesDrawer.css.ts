import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const width = 240;

let style = ({ breakpoints, mixins, spacing, transitions }: Theme) => {
  return createStyles({
    drawer: {
      flexShrink: 0,
      whiteSpace: 'nowrap',
      width: width,
      position: 'absolute'
    },
    maximized: {
      transition: transitions.create('width', {
        duration: transitions.duration.enteringScreen,
        easing: transitions.easing.sharp
      }),
      width: width
    },
    minimized: {
      overflowX: 'hidden',
      transition: transitions.create('width', {
        duration: transitions.duration.leavingScreen,
        easing: transitions.easing.sharp
      }),
      width: spacing(7) + 1,
      [breakpoints.up('sm')]: {
        width: spacing(9) + 1
      }
    },
    toolbar: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-end',
      padding: spacing(0, 1),
      ...mixins.toolbar
    }
  });
};

export const useStyles = makeStyles(style);
