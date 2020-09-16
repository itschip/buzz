import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useFonts, Montserrat_500Medium, Montserrat_700Bold, } from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';

export const QuestionCard = (props, {  question }) => {
  let [fontLoaded] = useFonts({
    Montserrat_500Medium, 
    Montserrat_700Bold
  })

  if (!fontLoaded) {
    return <AppLoading /> 
  } else {
      return (
        <View style={styles.card}>
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              color: 'grey',
              fontFamily: 'Montserrat_700Bold',
            }}
          >
            {props.question}
          </Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  card: {
    width: 370,
    height: 300,
    maxWidth: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    }
});
