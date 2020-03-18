import List from '@material-ui/core/List';
import React from 'react';

import { useStyles } from './ChannelsList.css';
import {ChannelListItem} from "../ChannelListItem";

type ChannelsListProps = {};

export const ChannelsList = (_: ChannelsListProps) => {
  const styles = useStyles();

  return (
    <List className={styles.root} component="nav">
      <ChannelListItem description={"Concanavalin A"}/>
      <ChannelListItem description={"Hoechst 33342"}/>
      <ChannelListItem description={"MitoTracker Deep Red FM"}/>
    </List>
  );
};
