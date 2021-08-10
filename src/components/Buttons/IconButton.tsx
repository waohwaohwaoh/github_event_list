import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RefreshSvg} from '..';
import Refresh from '../Svg/Refresh';
import DefaultButton from './DefaultButton';

interface IconButtonProps {
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    backgroundColor: '#e0dede',
    alignItems:'center',
    justifyContent:'center'
  },
});

const IconButton = ({onPress}: IconButtonProps) => {
  return (
    <DefaultButton onPress={onPress}>
      <View style={styles.container}>
        <RefreshSvg />
      </View>
    </DefaultButton>
  );
};

export default IconButton;
