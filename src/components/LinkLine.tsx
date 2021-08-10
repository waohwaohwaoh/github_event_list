import React, {Children, ReactNode} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {LinkSvg} from '.';
import DefaultButton from './Buttons/DefaultButton';

interface LinkLineProps {
  children: ReactNode;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  },
  childrenContainer:{
    width: "90%"
  }
});

const LinkLine = ({onPress, children}: LinkLineProps) => {
  return (
    <DefaultButton onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.childrenContainer}>
          {children}
        </View>
        <LinkSvg width={20} height={20} />
      </View>
    </DefaultButton>
  );
};

export default LinkLine;
