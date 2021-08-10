import React, { ReactNode } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

interface DefaultButtonProps{
    onPress: () => void;
    children: ReactNode
}

const styles=StyleSheet.create({

})

const DefaultButton = ({onPress, children}: DefaultButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {children}
    </TouchableOpacity>
)}

export default DefaultButton;