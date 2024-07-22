import {View, Text, StatusBar} from 'react-native';
import React, { useState } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from './src/Screens/Authentication/SignIn';
import ForgotPassword from './src/Screens/Authentication/ForgotPassword';
import VerificationScreen from './src/Screens/Authentication/VerificationScreen';
import SignUp from './src/Screens/Authentication/SignUp';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import HomeScreen from './src/Screens/HomeScreen';
// import ProfileScreen from './src/Screens/ProfileScreen';
import DrawerNavigator from './src/Screens/DrawerNavigator';
import HomeScreen from './src/Screens/HomeScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      {/* <NavigationContainer>
         <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
    </Drawer.Navigator> 
    </NavigationContainer> */}
{/* -------------------------Stack Navigator---------------------- */}
     <NavigationContainer>
        <Stack.Navigator options={{headerShown: false}}>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
            <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        </Stack.Navigator> 

       </NavigationContainer>
{/* --------------------------------------------------------------- */}
    </>
  );
};

export default App;
