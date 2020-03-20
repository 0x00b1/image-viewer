import List from '@material-ui/core/List';
import React from 'react';
import { useSelector } from 'react-redux';

import { ChannelListItem } from '../ChannelListItem/ChannelListItem';
import { NewChannelListItem } from '../ChannelListItem/NewChannelListItem';
import { Channel, State } from '../../../../store/reducer';

type ChannelsListProps = {};

export const ChannelsList = (_: ChannelsListProps) => {
  const channels = useSelector((state: State) => {
    return state.channels;
  });

  return (
    <List component="nav">
      {channels.map((channel: Channel) => {
        return <ChannelListItem channel={channel} key={channel.identifier} />;
      })}
      <NewChannelListItem />
    </List>
  );
};
