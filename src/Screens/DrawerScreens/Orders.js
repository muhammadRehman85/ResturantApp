import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Dishes from '../../Components/Dishes';
import { useSelector } from 'react-redux';

const Orders = () => {
  const foodItems = useSelector(state => state.cart.cartItems);
  const theme = useSelector(state => state.cart.theme);

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.header, theme === 'dark' ? styles.darkText : styles.lightText]}>Your Orders</Text>
      <Dishes foodItems={foodItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  darkContainer: {
    backgroundColor: 'black',
  },
  lightContainer: {
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  darkText: {
    color: 'white',
  },
  lightText: {
    color: 'black',
  },
});

export default Orders;
