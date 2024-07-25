import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Details = ({ route }) => {
  const { item } = route.params;
  
  console.log(item);
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.mainImage} />
      </View>
      <ScrollView>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Image source={require('../../../assets/foodImages/heart.png')} style={styles.heartIcon} />
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>ADD</Text>
            <Image source={require('../../../assets/foodImages/cart.png')} style={styles.cartIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
  },
  imageContainer: {
    width: '100%',
    height: '50%',
    padding: 10,
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    padding: 20,
    position: 'relative',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  heartIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 20,
    right: 25,
  },
  description: {
    marginVertical: 10,
  },
  price: {
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  addButtonContainer: {
    width: '100%',
  },
  addButton: {
    width: '90%',
    height: 50,
    backgroundColor: 'crimson',
    alignSelf: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  cartIcon: {
    width: 30,
    height: 30,
    marginTop: 8,
  },
});

export default Details;
