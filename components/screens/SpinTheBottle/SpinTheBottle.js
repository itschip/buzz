import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function SpinTheBottle() {
  return (
    <View style={styles.container}>
      <Text>Flasketuten</Text>
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
