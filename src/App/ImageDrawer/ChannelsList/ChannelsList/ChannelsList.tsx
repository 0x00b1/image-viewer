import List from '@material-ui/core/List';
import React from 'react';
import { useSelector } from 'react-redux';

import { ChannelsListItem } from '../ChannelsListItem';
import { NewChannelListItem } from '../NewChannelListItem';
import { Channel, State } from '../../../../store/reducer';

type ChannelsListProps = {};

export const ChannelsList = (_: ChannelsListProps) => {
  const channels = useSelector((state: State) => {
    return state.channels;
  });

  return (
    <List component="nav">
      {channels.map((channel: Channel) => {
        return <ChannelsListItem channel={channel} key={channel.identifier} />;
      })}
      <NewChannelListItem />
    </List>
  );
};
