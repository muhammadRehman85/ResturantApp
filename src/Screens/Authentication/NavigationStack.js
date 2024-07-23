import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import DrawerNavigator from '../DrawerNavigator';
import Help from '../AppNavigationScreens/Help';
import Header from '../../Components/Header';
import Search from '../../Screens/AppNavigationScreens/Search'
const Stack = createNativeStackNavigator();

const NaviagationStack = () => {
  return (
    <>
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
          <Stack.Screen
            name="Help"
            component={Help}
            
          />
           <Stack.Screen
            name="Search"
            component={Search}
            
          />
        </Stack.Navigator></>
  )
}

export default NaviagationStack