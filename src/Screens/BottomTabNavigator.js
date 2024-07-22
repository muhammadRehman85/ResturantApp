import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'; // Adjust paths accordingly
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Use an appropriate icon library
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <>
    <Tab.Navigator
    screenOptions={{ headerShown: false,}}
    tabBarOptions={{
      activeTintColor: 'cyan',
      inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigator;
