import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Starter from './CategoriesScreens/Starter';
import SomewhatLocal from './CategoriesScreens/SomewhatLocal';
import Somewhatsooper from './CategoriesScreens/Somewhatsooper';
import CheezyTreats from './CategoriesScreens/CheezyTreats';

const Tab = createMaterialTopTabNavigator();
const TopTabNavigator = () => {
  return (
    <Tab.Navigator   
     screenOptions={{
        tabBarScrollEnabled: true,
        tabBarLabelStyle: { fontSize: 12, color:'black' },
        tabBarStyle: { backgroundColor: 'white' ,elevation:0},
        tabBarIndicatorStyle: { backgroundColor: 'red', height: 2 },
        // tabBarActiveTintColor: 'b',
        // tabBarInactiveTintColor: 'black',
      }}>
    <Tab.Screen name="Starter" component={Starter} />
    <Tab.Screen name="Somewhat Local" component={SomewhatLocal} />
    <Tab.Screen name="Somewhat Sooper" component={Somewhatsooper} />
    <Tab.Screen name="Cheezy Treats" component={CheezyTreats} />
  </Tab.Navigator>
  )
}

export default TopTabNavigator