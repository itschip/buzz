import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { call } from 'react-native-reanimated';
import { useModal } from './hooks/useModal';

export const BottleModal = (props) => {

  const { beerModal, setBeerModal } = useModal();

  const closeModal = () => {
    setBeerModal(false)
  }

  return (
    <View style={beerModal ? styles.modalContainer : styles.hideModal}>
      <Text>{props.title}</Text>
      <Text>{props.desc}</Text>
      <TouchableOpacity onClick={closeModal}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 350,
    backgroundColor: 'yellow',
    display: 'flex'
  },
  hideModal: {
    display: 'none'
  }
})