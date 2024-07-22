import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';


// Create the Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Set the icon based on the route name
          if (route.name === 'Home') {
            iconName = focused
              ? require('../../assets/home.png') // Active icon
              : require('../../assets/home.png'); // Inactive icon
          } else if (route.name === 'Profile') {
            iconName = focused
              ? require('../../assets/profile.png') // Active icon
              : require('../../assets/profile.png'); // Inactive icon
          } 

          // Return the Image component with the selected icon
          return (
            <Image
              source={iconName}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          );
        },
        tabBarActiveTintColor: 'cyan', 
        tabBarInactiveTintColor: 'gray', 
        headerShown:false
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
