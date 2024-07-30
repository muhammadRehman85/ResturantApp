import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import DrawerNavigator from '../DrawerNavigator';
import Header from '../../Components/Header';
import Search from '../../Screens/AppNavigationScreens/Search'
import Details from '../AppNavigationScreens/Details';
import Dishes from '../../Components/Dishes';
import Starter from '../CategoriesScreens/Starter';
import TopTabNavigator from '../TopTabNavigator';
import EditProfile from '../DrawerScreens/EditProfile';
import SelectLocation from '../AppNavigationScreens/SelectLocation';
import Cart from '../AppNavigationScreens/Cart';
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
            name="Cart"
            component={Cart}
            
          />
           <Stack.Screen
            name="Search"
            component={Search}
            
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{headerShown:false}}
          />
            
             <Stack.Screen
            name="Tabs"
            component={TopTabNavigator}          />
             <Stack.Screen
            name="EditProfile"
            component={EditProfile}          />
             <Stack.Screen
            name="SelectLocation"
            component={SelectLocation}   
            options={{headerShown:false}}       />
        </Stack.Navigator></>
        
  )
}

export default NaviagationStack