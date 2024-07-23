import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

const Dishes = ({ foodItems }) => {
  const renderFoodItems = ({ item }) => (
    <View style={styles.foodItemContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.foodImage} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.foodTitle}>{item.title}</Text>
        <Text style={styles.foodDescription} numberOfLines={3} ellipsizeMode="tail">
          {item.description}
        </Text>
        <View style={styles.priceContainer}>
          <Text>{item.price}</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text>Add</Text>
          <Image source={require('../../assets/foodImages/cart.png')} style={styles.cartIcon} />
        </TouchableOpacity>
      </View>
      <Image source={require('../../assets/foodImages/heart.png')} style={styles.heartIcon} />
    </View>
  );

  return (
    <ScrollView style={styles.scrollView}>
      <FlatList data={foodItems} renderItem={renderFoodItems} keyExtractor={item => item.id} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 10,
  },
  foodItemContainer: {
    width: '100%',
    height: 180,
    flexDirection: 'row',
    elevation: 2,
    borderRadius: 5,
    marginVertical: 10,
    position: 'relative',
  },
  imageContainer: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foodImage: {
    width: '90%',
    height: '60%',
  },
  infoContainer: {
    width: '60%',
    height: '100%',
    padding: 10,
  },
  foodTitle: {
    fontWeight: 'bold',
    color: 'black',
    margin: 5,
  },
  foodDescription: {
    color: 'grey',
    fontSize: 12,
    margin: 10,
  },
  priceContainer: {
    backgroundColor: '#f1c40f',
    width: 80,
    minHeight: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#e74c3c',
    width: 80,
    minHeight: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    flexDirection: 'row',
  },
  cartIcon: {
    width: 20,
    height: 20,
  },
  heartIcon: {
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 5,
    right: 10,
  },
});

export default Dishes;
