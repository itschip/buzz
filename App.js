import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from "./components/screens/Home/HomeScreen";
import QuestionsScreen from "./components/screens/QA/QuestionsScreen";
import SpinTheBottle from "./components/screens/SpinTheBottle/SpinTheBottle";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="200 Questions" component={QuestionsScreen} />
        <Stack.Screen name="Flasketuten" component={SpinTheBottle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
