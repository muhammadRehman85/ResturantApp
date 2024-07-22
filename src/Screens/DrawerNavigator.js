import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (<>
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={BottomTabNavigator} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
    </Drawer.Navigator>
    <NavigationContainer independent={true}>

</NavigationContainer>
</>
  );
};

export default DrawerNavigator;
