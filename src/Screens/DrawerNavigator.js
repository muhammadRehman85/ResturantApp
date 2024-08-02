import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from './ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawerContent from './Custom Drawer/CustomDrawerContent';
import Orders from './DrawerScreens/Orders';
import Addresses from './DrawerScreens/Addresses';
import Favorites from './DrawerScreens/Favorites';
import PaymetsMethods from './DrawerScreens/PaymentsMethods';
import ChangePassword from './DrawerScreens/ChangePassword';
import Logout from './DrawerScreens/Logout';
import PaymentsMethods from './DrawerScreens/PaymentsMethods';
import AddData from './DrawerScreens/AddData';
import SettingsScreen from './Custom Drawer/SettingsScreen';
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  const theme = useSelector(state => state.cart.theme);

  const screenOptions = {
    headerStyle: {
      backgroundColor: theme === 'dark' ? 'black' : 'white',
    },
    headerTintColor: theme === 'dark' ? 'white' : 'black',
  };
  return (<>
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}
         screenOptions={{
          headerStyle: {
            backgroundColor: theme === 'dark' ? 'black' : 'white',
            elevation: 0, // Removes shadow on Android
            shadowOpacity: 0, // Removes shadow on iOS
          },headerTintColor: theme === 'dark' ? 'white' : 'black',
          headerShown:false,
         
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
      <Drawer.Screen name="Orders" component={Orders} options={{headerShown:true}} />
      <Drawer.Screen name="Addresses" component={Addresses} />
      <Drawer.Screen name="Favorites" component={Favorites} />
      <Drawer.Screen name="PaymentsMethods" component={PaymentsMethods} />
      <Drawer.Screen name="Logout" component={Logout} />
      <Drawer.Screen name="ChangePassword" component={ChangePassword} />
      <Drawer.Screen name="AddData" component={AddData} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
    <NavigationContainer independent={true}>

</NavigationContainer>
</>
  );
};

export default DrawerNavigator;
