import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/resturant2.png')} style={styles.logo} />
        <Text style={styles.title}>Resturant</Text>
      </View>
      <View style={styles.drawerItems}>
        <DrawerItem
          label="Home"
          onPress={() => props.navigation.navigate('Home')}
          labelStyle={styles.label}
        />
        <DrawerItem
          label="Profile"
          onPress={() => props.navigation.navigate('Profile')}
          labelStyle={styles.label}
        />
      
        {/* Add more DrawerItems here */}
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    padding: 20,

    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginVertical: 10,
    color:'black'
  },
  drawerItems: {
    marginTop: 20,
  },
  label: {
    color: 'black',
  },
});

export default CustomDrawerContent;
