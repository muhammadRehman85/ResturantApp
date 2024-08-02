import React from 'react';
import { View, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import NaviagationStack from './src/Screens/Authentication/NavigationStack';
import store from './Redux/Store';
import './i18n';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <StatusBarWrapper />
      <NavigationContainer>
        <NaviagationStack />
      </NavigationContainer>
    </Provider>
  );
};

// StatusBarWrapper component to dynamically adjust StatusBar based on theme
const StatusBarWrapper = () => {
  const theme = useSelector(state => state.cart.theme); // Get theme from Redux

  return (
    <StatusBar
      backgroundColor={theme === 'dark' ? 'black' : 'white'}
      barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
    />
  );
};

export default App;
