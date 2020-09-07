import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import LessonScreen from './screens/LessonScreen';

import Header from './components/Header'

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.screen}>
        <Header title={"Homepage"}/>
        <HomeScreen/>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
