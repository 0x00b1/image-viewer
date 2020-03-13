import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const width = 240;

const style = ({ transitions, zIndex }: Theme) => {
  const styles = {
    appBar: {
      transition: transitions.create(['width', 'margin'], {
        duration: transitions.duration.leavingScreen,
        easing: transitions.easing.sharp
      }),
      zIndex: zIndex.drawer + 1
    },
    shift: {
      marginLeft: width,
      transition: transitions.create(['width', 'margin'], {
        duration: transitions.duration.enteringScreen,
        easing: transitions.easing.sharp
      }),
      width: `calc(100% - ${width}px)`
    }
  };

  return createStyles(styles);
};

export const useStyles = makeStyles(style);
