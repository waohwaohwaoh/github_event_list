import React, { memo } from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface CommitItemProps {
  item: any;
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#e0dede',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    backgroundColor: '#EDF7ED',
  },
});

const CommitItem = ({item}: CommitItemProps) => {
  return (
    <View style={styles.container}>
      <Text>sha: {item.sha}</Text>
      <Text>User: {item.author.name}</Text>
      <Text>Message: "{item.message}"</Text>
    </View>
  );
};

export default memo(CommitItem);
