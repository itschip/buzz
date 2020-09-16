import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { QuestionModule } from '../../games/QA/QuestionModule';
import { LinearGradient } from 'expo-linear-gradient';

export const QuestionsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient 
        colors={[ '#1e819f', '#00dbff' ]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '100%',
        }}
      >
        <Image source={require('../../../assets/background.png')} />
      </LinearGradient>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.goBack}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={25} color="#000" />
        </TouchableOpacity>
      </View>
      <QuestionModule />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    top: 0,
    left: 0,
  },
  goBack: {
    left: -120,
    marginTop: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 40,
    width: 80,
    height: 40,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
