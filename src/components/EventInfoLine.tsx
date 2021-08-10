import React, { ReactNode } from 'react'
import {View, Text, StyleSheet} from 'react-native'

interface EventInfoLineProps{
    title: string;
    children: ReactNode
}

const styles=StyleSheet.create({
    titleText: {
        fontSize: 24,
      },
      titleContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#e0dede',
        marginVertical: 12,
      },
})

const EventInfoLine = ({title, children}: EventInfoLineProps) => {
  return (
    <View>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
        {children}
    </View>
)}

export default EventInfoLine;