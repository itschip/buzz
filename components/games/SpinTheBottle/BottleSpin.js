import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export const BottleSpin = () => {
  const [text, setText] = useState('Bottle Spin')


  const onBottleSpin = () => {
    console.log('Skkrrt')
  }

  return (
    <View>
      <View style={styles.imgContainer}>
        <Image style={styles.bottle} source={require('../../../assets/beerbottle.png')} />
      </View>
      <TouchableOpacity onPress={onBottleSpin}>
        <Text>Spin the bottle</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottle: {
    height: 300,
    width: 200
  }
})