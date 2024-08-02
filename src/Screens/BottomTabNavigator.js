import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  // Get the current theme from Redux store
  const theme = useSelector(state => state.cart.theme); // Assuming 'light' or 'dark'

  console.log('Current theme:', theme); // Debugging log

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Set the icon based on the route name
          if (route.name === 'Home') {
            iconName = require('../../assets/home.png'); // Assuming same icon for both active and inactive
          } else if (route.name === 'Profile') {
            iconName = require('../../assets/profile.png'); // Assuming same icon for both active and inactive
          }

          // Return the Image component with the selected icon
          return (
            <Image
              source={iconName}
              style={{
                width: 24,
                height: 24,
                tintColor: theme === 'dark' ? 'white' : 'black', // Apply theme color
              }}
            />
          );
        },
        tabBarActiveTintColor: theme === 'dark' ? 'cyan' : 'cyan', // Active icon color
        tabBarInactiveTintColor: theme === 'dark' ? 'gray' : 'gray', // Inactive icon color
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? 'black' : 'white', // Tab bar background color
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
