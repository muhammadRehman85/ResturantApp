import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Starter from './CategoriesScreens/Starter';
import SomewhatLocal from './CategoriesScreens/SomewhatLocal';
import Somewhatsooper from './CategoriesScreens/Somewhatsooper';
import CheezyTreats from './CategoriesScreens/CheezyTreats';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  const { t } = useTranslation();
  const theme = useSelector(state => state.cart.theme); // Assuming 'light' or 'dark'
  console.log('Current theme:', theme); // Debugging log

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarLabelStyle: { fontSize: 12, color: theme === 'dark' ? 'white' : 'black' },
        tabBarStyle: { backgroundColor: theme === 'dark' ? '#333' : 'white', elevation: 0 },
        tabBarIndicatorStyle: { backgroundColor: 'red', height: 2 },
      }}>
      <Tab.Screen name={t('STARTER')} component={Starter} />
      <Tab.Screen name={t('SOMEWHAT LOCAL')} component={SomewhatLocal} />
      <Tab.Screen name={t('SOMEWHAT SOOPER')} component={Somewhatsooper} />
      <Tab.Screen name={t('CHEEZY TREATS')} component={CheezyTreats} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
