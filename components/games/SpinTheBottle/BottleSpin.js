import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native'
import { Font, AppLoading } from 'expo';
import { Montserrat_500Medium, Montserrat_700Bold, } from '@expo-google-fonts/montserrat';
import { Easing } from 'react-native-reanimated';
import { BottleModal } from './BottleModal';
import { useModal } from './hooks/useModal';
import WheelOfFortune from 'react-native-wheel-of-fortune';

export const BottleSpin = () => {
  const [, setDon ] = useState(null)
  const { setBeerModal } = useModal();

  const members = ["hanna", "markus", "martine", "andreas"]

  const handleWinner = (winner) => {
    setBeerModal(true)
    
    console.log(winner)
  }
  
  return (
    <View>
      <View>
        <WheelOfFortune 
          onRef={ref => setDon(ref)}
          rewards={members}
          knobSize={20}
          getWinner={(value) => handleWinner(value)}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.spinButton}>
          <Text style={{ fontSize: 24 }}>Spin</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  spinButton: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5
  }
})