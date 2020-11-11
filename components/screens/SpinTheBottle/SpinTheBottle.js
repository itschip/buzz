import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BottleSpin } from '../../games/SpinTheBottle/BottleSpin';
import { BottleModal } from '../../games/SpinTheBottle/BottleModal';

export const SpinTheBottle = () => {
  return (
    <View style={styles.container}>
      <BottleSpin />
      <BottleModal />
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
