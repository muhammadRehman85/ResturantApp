import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import TopTabNavigator from './TopTabNavigator';
import '../../i18n';

const HomeScreen = ({ navigation, route }) => {
  const { t } = useTranslation();
  const theme = useSelector(state => state.cart.theme); // 'light' or 'dark'
  const addedItems = useSelector(state => state.cart.cartItems) || [];

  const [visible, setVisible] = useState(false);

  const Cart = () => {
    navigation.navigate('Cart');
  };

  const LongPressPopup = () => {
    setVisible(true);
  };

  const search = () => {
    navigation.navigate('Search');
  };

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  const { selectedCity = '', selectedArea = '' } = route.params || {};

  // Debugging: Log theme to verify its value
  console.log('Current theme:', theme);

  return (
    <>
      <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#000' : '#fff' }]}>
        {visible && (
          <View
            style={{
              width: 150,
              height: 40,
              backgroundColor: theme === 'dark' ? '#333' : '#f5f5f5',
              elevation: 2,
              zIndex: 2,
              position: 'absolute',
              top: 50,
              right: 20,
              borderWidth: 0.2,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Help</Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>X</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.leftSection}>
          <View style={styles.deliveryRow}>
            <Text
              style={{
                fontFamily: 'PlaywriteBEWAL-Regular',
                fontSize: 10,
                color: 'red',
              }}
              onPress={() => navigation.navigate('SelectLocation')}>
              {t('deliver')}
            </Text>
            <Image
              source={require('../../assets/dropdown.png')}
              style={styles.dropdownIcon}
            />
          </View>
          <Text style={{ ...styles.locationText, color: theme === 'dark' ? '#fff' : '#000' }}>
            {selectedCity + ' ' + selectedArea}
          </Text>
        </View>
        <View style={styles.rightSection}>
          <TouchableOpacity onPress={search}>
            <Image
              source={require('../../assets/seachred.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={Cart} onLongPress={LongPressPopup}>
            <Text
              style={{
                position: 'absolute',
                top: 10,
                right: 0,
                color: 'red',
                fontWeight: 'bold',
              }}>
              {addedItems.length}
            </Text>
            <Image
              source={require('../../assets/cart2.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={openDrawer}>
            <Image
              source={require('../../assets/userred.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.logoContainer, { backgroundColor: theme === 'dark' ? '#000' : '#fff' }]}>
        <Image source={require('../../assets/logo.jpg')} style={styles.logo} />
      </View>
      <TopTabNavigator />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '8%',
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  leftSection: {
    width: '50%',
    paddingTop: 5,
  },
  deliveryRow: {
    flexDirection: 'row',
  },
  dropdownIcon: {
    width: 15,
    height: 15,
  },
  locationText: {
    fontWeight: 'bold',
  },
  rightSection: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    margin: 10,
  },
  logoContainer: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '40%',
    height: '70%',
  },
});

export default HomeScreen;
