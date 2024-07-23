import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import CustomDrawerItem from './CustomDrawerItem';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/DrawerIcons/user.png')} style={styles.logo} />
        </View>
        <View>
          <Text style={styles.userName}>Muhammad Rehman</Text>
          <View style={styles.contactContainer}>
            <Text style={styles.contactText}>+923121912814</Text>
            <Image source={require('../../../assets/edit.png')} style={styles.editIcon} />
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.sectionTitle}>Personal</Text>
      </View>
      <View style={styles.drawerItems}>
        <CustomDrawerItem
          label="Orders"
          onPress={() => props.navigation.navigate('Orders')}
          icon={require('../../../assets/DrawerIcons/orders.png')}
        />
        <CustomDrawerItem
          label="My Address"
          onPress={() => props.navigation.navigate('Address')}
          icon={require('../../../assets/DrawerIcons/address.png')}
        />
        <CustomDrawerItem
          label="My Favorites"
          onPress={() => props.navigation.navigate('Favorites')}
          icon={require('../../../assets/DrawerIcons/fav.png')}
        />
        <CustomDrawerItem
          label="My Payment Methods"
          onPress={() => props.navigation.navigate('PaymentsMethods')}
          icon={require('../../../assets/DrawerIcons/payments.png')}
        />
        <View>
          <Text style={styles.sectionTitle}>General</Text>
        </View>
        <CustomDrawerItem
          label="Change Password"
          onPress={() => props.navigation.navigate('PaymentsMethods')}
          icon={require('../../../assets/DrawerIcons/changepassword.png')}
        />
        <CustomDrawerItem
          label="Logout"
          onPress={() => props.navigation.navigate('Logout')}
          icon={require('../../../assets/DrawerIcons/logout.png')}
        />
        <CustomDrawerItem
          label="Request Account Deletion"
          onPress={() => props.navigation.navigate('AccountDeletion')}
          icon={require('../../../assets/DrawerIcons/acountdelete.png')}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    width: '25%',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  userName: {
    color: 'black',
    fontWeight: 'bold',
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contactText: {
    fontSize: 13,
  },
  editIcon: {
    width: 18,
    height: 18,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  drawerItems: {
    marginTop: 20,
  },
  label: {
    color: 'black',
  },
});

export default CustomDrawerContent;
