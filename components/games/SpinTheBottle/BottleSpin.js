import React, { useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native'
import { Font, AppLoading } from 'expo';
import { Montserrat_500Medium, Montserrat_700Bold, } from '@expo-google-fonts/montserrat';
import { Easing } from 'react-native-reanimated';
import { BottleModal } from './BottleModal';
import { useModal } from './hooks/useModal';

export class BottleSpin extends React.Component {

  constructor(props) {
    super(props);
    this.state = { spinAnim: new Animated.Value(0) }
  }

  rotateBottleHandle = () => {
    Animated.decay(
      this.state.spinAnim,
    {
      velocity: 1000,
      toValue: 1,
      duration: 1000,
      easing: Easing.quad,
      useNativeDriver: true
    }
  ).start();
    // npm install -g expo-cli
  }
  render() {

    const randomDegree = Math.floor(Math.random() * 720) + 1;

    const spin = this.state.spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', randomDegree + 'deg']
    });

    return (
      <View>
        <View>
            <Animated.Image 
              style={{
                height: 300,
                width: 200,
                transform: [{ rotate: spin }]
              }} 
              source={require('../../../assets/beerbottle.png')} />
        </View>
        <View>
          <TouchableOpacity style={styles.spinButton} onPress={this.rotateBottleHandle}>
            <Text style={{ fontSize: 24 }}>Spin</Text>
          </TouchableOpacity>
         
        </View>
      </View>
    )
  }
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