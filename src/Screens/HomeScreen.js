import {React, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Header from '../Components/Header';
import TopTabNavigator from './TopTabNavigator';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import '../../i18n';

const Tab = createBottomTabNavigator();

const HomeScreen = ({navigation, route}) => {
  const {t, i18n} = useTranslation();
  const addedItems = useSelector(state => state.cart);

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
  // const {selectedarea}=route.params;
  const {selectedCity = '', selectedArea = ''} = route.params || {};
  console.log(selectedArea, selectedCity);
  return (
    <>
      <View style={styles.container}>
        {visible && (
          <View
            style={{
              width: 150,
              height: 40,
              backgroundColor: 'white',
              elevation: 2,
              zIndex: 2,
              position: 'absolute',
              top: 50,
              right: 20,
              borderWidth: 0.2,
              flexDirection: 'row',
            }}>
            <Text>help</Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text style={{marginLeft: 20}}>X</Text>
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
          <Text style={styles.locationText}>
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
      <View style={styles.logoContainer}>
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
    backgroundColor: 'white',
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
    color: 'black',
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
    position: 'fixed',

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: '40%',
    height: '70%',
  },
});

export default HomeScreen;
