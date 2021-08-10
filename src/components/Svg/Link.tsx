import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Circle, Path, Rect} from 'react-native-svg';

interface LinkProps {
  width?: number;
  height?: number;
}

const styles = StyleSheet.create({});

const Link = ({width = 20, height = 20}: LinkProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M12.072 3h2.779L8.666 9.182a1.5 1.5 0 102.122 2.121L17 5.093v2.806a1.5 1.5 0 003 0V1.48A1.5 1.5 0 0018.5 0L12.07 0a1.5 1.5 0 100 3z"
        fill="#9B9B9B"
      />
      <Path
        d="M3 4.5A1.5 1.5 0 014.5 3h2a1.5 1.5 0 100-3h-2A4.5 4.5 0 000 4.5v11A4.5 4.5 0 004.5 20h11a4.5 4.5 0 004.5-4.5v-2a1.5 1.5 0 10-3 0v2a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 15.5v-11z"
        fill="#9B9B9B"
      />
    </Svg>
  );
};
export default Link;
