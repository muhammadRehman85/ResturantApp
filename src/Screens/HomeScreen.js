import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Header from '../Components/Header';
import TopTabNavigator from './TopTabNavigator';

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.jpg')} style={styles.logo} />
      </View>
      <TopTabNavigator />
    </>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    width: '100%',
    height: '25%',
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
