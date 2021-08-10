import React, {useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import FastImage from 'react-native-fast-image';

interface CustomImageProps {
  url: string;
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  image: {
    width: '100%',
    height: '100%',
  },
  preloader: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#e0dede',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CustomImage = ({url}: CustomImageProps) => {
  const [loading, setLoading] = useState(false);
  const onLoadStart = () => {
    setLoading(true);
  };
  const onLoadEnd = () => {
    setLoading(false)
  };
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        source={{
          uri: url,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      {loading && (
        <View style={styles.preloader}>
          <ActivityIndicator/>
        </View>
      )}
    </View>
  );
};

export default CustomImage;
