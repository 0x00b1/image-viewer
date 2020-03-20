import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, mixins }: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: spacing(0, 1),
      ...mixins.toolbar
    },
    main: {
      flexGrow: 1,
      padding: spacing(3),
      position: 'absolute'
      // width: '100%'
    },
    maximized: {
      left: '240px'
    },
    minimized: {}
  })
);
