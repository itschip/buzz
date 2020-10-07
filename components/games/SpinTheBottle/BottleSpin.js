import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native'
import { Easing } from 'react-native-reanimated';

export class BottleSpin extends React.Component {
  //const [rotation, setRotation] = useState('');


  onBottleSpin = () => {
    this.animatedValue = new Animated.Value(0);
  }

  render() {

    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    const animatedStyle = {
      transform: [
        { rotate: interpolateRotation }
      ]
    }

    return (
      <View>
        <View>
          <TouchableOpacity>
            <Animated.Image 
              style={{
                height: 300,
                width: 200,
                animatedStyle
              }} 
              source={require('../../../assets/beerbottle.png')} />
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
})