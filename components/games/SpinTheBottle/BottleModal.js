import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export const BottleModal = ({ handleClick, open, ...props }) => {

  return (
    <View style={styles.modalContainer}>
      <Text>{props.title}</Text>
      <Text>{props.desc}</Text>
      <Button>Close</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    
  },
  hideModal: {
    display: 'none'
  },
  showModal: {
    display: 'block'
  }
})