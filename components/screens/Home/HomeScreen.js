import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useFonts, Montserrat_500Medium, Montserrat_700Bold, } from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';
import ViewPager from '@react-native-community/viewpager';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  /*            
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  height: 202,
  backgroundColor: "#ffce00",
  color: "#000",
  alignItems: "center",
*/

  if (!fontsLoaded) {
    return <AppLoading />  
  } else {
      return (
        <ViewPager style={styles.viewPager} initialPage={0}>
          <View key="1" style={styles.container}>
          <LinearGradient 
              colors={[ '#7158e2', '#7d5fff' ]}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: '100%',
              }}
            />
              <Text style={styles.modeTitle}>Flasketuten</Text>
              <Text style={styles.description}>Klassiske Flasketuten peker på.</Text>
              <View style={styles.actions}>
                <TouchableOpacity 
                  style={styles.startMode}
                  onPress={() => navigation.navigate('Flasketuten')}
                >
                  <Text 
                    style={{
                      fontSize: 28,
                      fontFamily: 'Montserrat_700Bold',
                      color: '#7d5fff'
                    }}
                  >
                    Start</Text>
                </TouchableOpacity>
              </View>
          </View>

          <View key="2" style={styles.container}>
            <LinearGradient 
              colors={[ '#17c0eb', '#18dcff' ]}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: '100%',
              }}
            />
            <Text style={styles.modeTitle}>200 SPM</Text>
              <Text style={styles.description}>200 gale og hysteriske spørsmål!</Text>
              <View style={styles.actions}>
                <TouchableOpacity style={styles.startMode} onPress={() => navigation.navigate('200 Questions')}>
                  <Text 
                    style={{
                      fontSize: 28,
                      fontFamily: 'Montserrat_700Bold',
                      color: '#18dcff'
                    }}
                  >
                    Start</Text>
                </TouchableOpacity>
              </View>
          </View>

          <View key="3" style={styles.container}>
            <LinearGradient 
              colors={[ '#ff3838', '#ff4d4d' ]}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: '100%',
              }}
            />
            <Text style={styles.modeTitle}>Custom</Text>
              <Text style={styles.description}>Lag dine egne spørsmål.</Text>
              <View style={styles.actions}>
                <TouchableOpacity style={styles.startMode}>
                  <Text 
                    style={{
                      fontSize: 28,
                      fontFamily: 'Montserrat_700Bold',
                      color: '#ff4d4d'
                    }}
                  >
                    Start</Text>
                </TouchableOpacity>
              </View>
          </View>
        </ViewPager>
      )
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  },  
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  modeTitle: {
    color: '#fff', 
    fontFamily: 'Montserrat_700Bold', 
    textTransform: 'uppercase', 
    fontSize: 45,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  description: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
  },
  actions: {
    marginTop: 40
  },
  startMode: {
    backgroundColor: '#fff',
    paddingHorizontal: 100,
    paddingVertical: 20,
    borderRadius: 40,
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
