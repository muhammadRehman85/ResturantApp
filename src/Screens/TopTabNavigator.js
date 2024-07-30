import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Starter from './CategoriesScreens/Starter';
import SomewhatLocal from './CategoriesScreens/SomewhatLocal';
import Somewhatsooper from './CategoriesScreens/Somewhatsooper';
import CheezyTreats from './CategoriesScreens/CheezyTreats';
import { useTranslation } from 'react-i18next';
const Tab = createMaterialTopTabNavigator();
const TopTabNavigator = () => {
  const {t}=useTranslation();
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
    <Tab.Screen name={t('STARTER')} component={Starter} />
    <Tab.Screen name={t('SOMEWHAT LOCAL')} component={SomewhatLocal} />
    <Tab.Screen name= {t('SOMEWHAT SOOPER')} component={Somewhatsooper} />
    <Tab.Screen name={t('CHEEZY TREATS')}  component={CheezyTreats} />
  </Tab.Navigator>
  )
}

export default TopTabNavigator