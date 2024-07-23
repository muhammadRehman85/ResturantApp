import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawerContent from './Custom Drawer/CustomDrawerContent';
import Orders from './DrawerScreens/Orders';
import Addresses from './DrawerScreens/Addresses';
import Favorites from './DrawerScreens/Favorites';
import PaymetsMethods from './DrawerScreens/PaymentsMethods';
import ChangePassword from './DrawerScreens/ChangePassword';
import Logout from './DrawerScreens/logout';
import AcountDeletion from './DrawerScreens/AcountDeletion';

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
          headerShown:false,
          headerTintColor: 'cyan', // Color of the header text
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerType:"front",
          drawerStyle:{
            width: '100%', 
          }
        }}
     
    >
      <Drawer.Screen name="HomeScreen" component={BottomTabNavigator} />
      <Drawer.Screen name="Orders" component={Orders} />
      <Drawer.Screen name="Addresses" component={Addresses} />
      <Drawer.Screen name="Favorites" component={Favorites} />
      <Drawer.Screen name="PaymentsMethodes" component={PaymetsMethods} />
      <Drawer.Screen name="ChangePassword" component={ChangePassword} />
      <Drawer.Screen name="Logout" component={Logout} />
      <Drawer.Screen name="AcountDeletion" component={AcountDeletion} />

    </Drawer.Navigator>
    <NavigationContainer independent={true}>

</NavigationContainer>
</>
  );
};

export default DrawerNavigator;
