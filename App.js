import {View, Text, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import NaviagationStack from './src/Screens/Authentication/NavigationStack';
import store from './Redux/Store';
import { Provider } from 'react-redux'
const Stack = createNativeStackNavigator();
import './i18n'
const App = () => {
  return (
    <><Provider store={store}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      {/* -------------------------Stack Navigator---------------------- */}
      <NavigationContainer>
        <NaviagationStack />
      </NavigationContainer>
      {/* --------------------------------------------------------------- */}
      </Provider></>
  );
};

export default App;
