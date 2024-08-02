import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import DrawerNavigator from '../DrawerNavigator';
import Header from '../../Components/Header';
import Search from '../../Screens/AppNavigationScreens/Search';
import Details from '../AppNavigationScreens/Details';
import Dishes from '../../Components/Dishes';
import Starter from '../CategoriesScreens/Starter';
import TopTabNavigator from '../TopTabNavigator';
import EditProfile from '../DrawerScreens/EditProfile';
import SelectLocation from '../AppNavigationScreens/SelectLocation';
import Cart from '../AppNavigationScreens/Cart';
import StepOne from '../Form/StepOne';
import StepTwo from '../Form/StepTwo';
import StepThree from '../Form/StepThree';

const Stack = createNativeStackNavigator();

const NaviagationStack = () => {
  const theme = useSelector(state => state.cart.theme);

  const screenOptions = {
    headerStyle: {
      backgroundColor: theme === 'dark' ? 'black' : 'white',
    },
    headerTintColor: theme === 'dark' ? 'white' : 'black',
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tabs"
        component={TopTabNavigator}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
      />
      <Stack.Screen
        name="SelectLocation"
        component={SelectLocation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepOne"
        component={StepOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepTwo"
        component={StepTwo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepThree"
        component={StepThree}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default NaviagationStack;
