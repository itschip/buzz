import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BottleSpin } from '../../games/SpinTheBottle/BottleSpin';

export const SpinTheBottle = () => {
  return (
    <View style={styles.container}>
      <BottleSpin />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7d5fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
