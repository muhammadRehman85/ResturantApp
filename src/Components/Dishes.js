import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Popup from '../Screens/popups/Popup';
const Dishes = ({ foodItems, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
const [visible,setVisible]=useState(false)
  const gotoDetails = (item) => {
    navigation.navigate('Details', { item });
  };
const LongPressPopup=()=>{
  setVisible(true)
  return(<>
    {visible &&<Popup/>}
  </>)
}
  const renderFoodItems = ({ item }) => (<View>
    
    <TouchableOpacity onLongPress={LongPressPopup}onPress={() => gotoDetails(item)}>
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
    </TouchableOpacity></View>
  );

  const skeleton = () => (
    <SkeletonPlaceholder backgroundColor="#e1e9ee" highlightColor="#f2f8fc">
      <View style={styles.skeletonContainer}>
        <View style={styles.imageContainer}>
          <View style={styles.skeletonImage} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.skeletonTitle} />
          <View style={styles.skeletonText} />
          <View style={styles.skeletonText} />
          <View style={styles.skeletonPrice} />
          <TouchableOpacity style={styles.skeletonAddButton} />
        </View>
        <Image source={require('../../assets/foodImages/grayheart.png')} style={styles.heartIcon} />
      </View>
    </SkeletonPlaceholder>
  );

  return (
    <FlatList
      data={foodItems}
      renderItem={isLoading ? skeleton : renderFoodItems}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContentContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContentContainer: {
    padding: 10,
  },
  foodItemContainer: {
    width: '100%',
    height: 180,
    flexDirection: 'row',
    elevation: 1,
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
    margin: 8,
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
  skeletonContainer: {
    width: '100%',
    height: 180,
    flexDirection: 'row',
    elevation: 2,
    borderWidth: 0.5,
    borderRadius: 5,
    marginVertical: 10,
    position: 'relative',
  },
  skeletonImage: {
    width: '90%',
    height: '60%',
    backgroundColor: '#ecf0f1',
  },
  skeletonTitle: {
    width: '60%',
    height: 30,
    backgroundColor: '#ecf0f1',
  },
  skeletonText: {
    width: '60%',
    height: 10,
    backgroundColor: '#ecf0f1',
    marginVertical: 5,
  },
  skeletonPrice: {
    backgroundColor: '#ecf0f1',
    width: 80,
    minHeight: 30,
    borderRadius: 5,
  },
  skeletonAddButton: {
    backgroundColor: '#ecf0f1',
    width: 80,
    minHeight: 30,
    borderRadius: 5,
    marginTop: 5,
  },
});

export default Dishes;
