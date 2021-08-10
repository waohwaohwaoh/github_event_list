import moment from 'moment';
import React, { memo } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Event} from '../models';

interface EventItemProps {
  item: Event;
  onPress: (id: string) => void;
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 20,
    borderRadius: 15,
    backgroundColor: '#e0dede',
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const EventItem = ({item, onPress}: EventItemProps) => {
  const _onPress = () => {
    onPress(item.id);
  };
  return (
    <TouchableOpacity style={styles.container} key={item.id} onPress={_onPress}>
      <View style={styles.headContainer}>
        <Text>ID {item.id}</Text>
        <Text>{item.type}</Text>
      </View>
      <Text>{item.actor.display_login}</Text>
      <Text>{moment(item.created_at).format('DD.MM.YYYY HH:mm:ss')}</Text>
    </TouchableOpacity>
  );
};

export default memo(EventItem);
