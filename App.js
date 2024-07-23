import {View, Text, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import NaviagationStack from './src/Screens/Authentication/NavigationStack';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      {/* -------------------------Stack Navigator---------------------- */}
      <NavigationContainer>
        <NaviagationStack />
      </NavigationContainer>
      {/* --------------------------------------------------------------- */}
    </>
  );
};

export default App;
