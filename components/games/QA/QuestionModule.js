import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Feather } from "@expo/vector-icons";
import { QuestionCard } from './QuestionCard';

export const QuestionModule = () => {
  const [question, setQuestion] = useState('Klikk på pilen for å begynne!')

  const questionData = {
    "1": "👶 Du får vakrest barn sammen med?",
    "2": "🍆 Har størst penis?",
    "3": "👐 Er mest glad i pupper?",
    "4": "🛀 Er lengst i dusjen?",
    "5": "🍼 Er klar for å få barn?",
    "6": "🆙 Liker å bruke butplug?",
    "7": "🃏 Jukser mest?",
    "8": "🍒 Har de mest spennende brystene?",
    "9": "🧥 Kler seg best?",
    "10": "🐭 Snuser mest?",
    "11": "🐷 Er en skikkelig sofagris?",
    "12": "🛌 Tar mest initiativ i sengen?",
    "13": "🐴 Rir best?",
    "14": "🤑 Er mest gjerrig?",
    "15": "🚌 Hvem hadde flest anmerkninger på ungdomsskolen?",
    "16": "😹 Har den sjukeste latteren?",
    "17": "📚 Er minst skoleflink?",
    "18": "📝 Har en liggeliste på notater?",
    "19": "🍣 Kunne ha spist mest sushi?",
    "20": "❗️Blir oftest tatt på fersken av foreldrene?",
    "21": "🛍 Er mest bortskjemt?",
    "22": "😼 Har lyst å komme i buksen på noen i kveld?"
  }

  const newQuestion = () => {
    const values = Object.values(questionData);
    const randomValue = values[parseInt(Math.random() * values.length)];

    setQuestion(randomValue);
  }

  return (
    <View style={styles.container}>
      <Text 
        style={{
          color: '#fff',
          fontSize: 38,
          marginTop: -20
        }}
      >
        Hvem i rommet..
      </Text>
      <View>
        <QuestionCard question={question}/>
      </View>
      <View>
        <TouchableOpacity style={styles.arrow} onPress={newQuestion}>
          <Feather name="arrow-right" size={34} color="#1e819f" />
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
  arrow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#fff',
    paddingHorizontal: 60,
    paddingVertical: 5,
    borderRadius: 5
  }
})