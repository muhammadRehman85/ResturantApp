import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawerContent from './Custom Drawer/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (<>
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}
         screenOptions={{
          headerStyle: {
            backgroundColor: 'black', // Background color
            elevation: 0, // Removes shadow on Android
            shadowOpacity: 0, // Removes shadow on iOS
          },
          headerTintColor: 'cyan', // Color of the header text
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
    
    >
      <Drawer.Screen name="HomeScreen" component={BottomTabNavigator} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} 
      
      
      />
    </Drawer.Navigator>
    <NavigationContainer independent={true}>

</NavigationContainer>
</>
  );
};

export default DrawerNavigator;
