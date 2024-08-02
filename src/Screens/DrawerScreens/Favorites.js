import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Dishes from '../../Components/Dishes';
import { useSelector } from 'react-redux';

const Cart = () => {
  const favItems = useSelector(state => state.cart.favorites);
  const theme = useSelector(state => state.cart.theme);

  return (
    <View style={styles.container(theme)}>
      <Dishes foodItems={favItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: (theme) => ({
    flex: 1,
    backgroundColor: theme === 'dark' ? 'black' : 'white',
  }),
  text: (theme) => ({
    color: theme === 'dark' ? 'white' : 'black',
  }),
});

export default Cart;
