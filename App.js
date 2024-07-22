import {View, Text, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AuthStack from './src/Screens/Authentication/AuthStack';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      {/* -------------------------Stack Navigator---------------------- */}
      <NavigationContainer>
        <AuthStack/>
      </NavigationContainer>
      {/* --------------------------------------------------------------- */}
    </>
  );
};

export default App;
