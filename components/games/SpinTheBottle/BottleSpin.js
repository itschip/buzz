import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { onChange } from 'react-native-reanimated'

export default function BottleSpin() {
  const [text, setText] = useState('Bottle Spin')

  const onChange = () => {
    setText('Hello')
  }

  return (
    <View>
      <TouchableOpacity onPress={onChange}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})