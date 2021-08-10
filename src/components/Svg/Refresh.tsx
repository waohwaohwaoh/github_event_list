import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

interface RefreshProps {
  width?: number;
  height?: number;
}

const styles = StyleSheet.create({});

const Refresh = ({width = 15, height = 15}: RefreshProps) => {
  return (
    <Svg
      width={width}
      height={height}
      fill={'black'}
      viewBox={`0 0 ${width} ${height+5}`}>
      <Path d="M8 4V0L3 5l5 5V6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H0c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
    </Svg>
  );
};

export default Refresh;
