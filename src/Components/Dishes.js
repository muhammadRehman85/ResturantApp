import React, { useState, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Popup from '../Screens/popups/Popup';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart, removeCart, addtoFav, removeFav } from '../../Redux/Slice';

const Dishes = ({ foodItems, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const favorites = useSelector((state) => state.cart.favorites) || [];
  const theme = useSelector(state => state.cart.theme); // Should be 'light' or 'dark'
  console.log('Current theme:', theme); // Debugging log
  const dispatch = useDispatch();

  const gotoDetails = (item) => {
    navigation.navigate('Details', { item });
  };

  const addItem = (item) => {
    dispatch(addtoCart(item));
  };

  const removeItem = (item) => {
    dispatch(removeCart(item));
  };

  const LongPressPopup = useCallback(() => {
    setVisible(true);
  }, []);

  const isItemInCart = (item) => {
    return cartItems.some((cartItem) => cartItem.id === item.id);
  };

  const isItemInFavorites = (item) => {
    return favorites.some((favItem) => favItem.id === item.id);
  };

  const toggleFavorite = (item) => {
    if (isItemInFavorites(item)) {
      dispatch(removeFav(item));
    } else {
      dispatch(addtoFav(item));
    }
  };

  const renderFoodItems = ({ item }) => (
    <View>
      <TouchableOpacity onLongPress={LongPressPopup} onPress={() => gotoDetails(item)}>
        <View style={[styles.foodItemContainer, { backgroundColor: theme === 'dark' ? '#333' : '#fff' ,borderWidth:theme=='dark'?2:0}]}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.foodImage} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={[styles.foodTitle, { color: theme === 'dark' ? 'white' : 'black' }]}>{item.title}</Text>
            <Text style={[styles.foodDescription, { color: theme === 'dark' ? 'lightgray' : 'grey' }]} numberOfLines={3} ellipsizeMode="tail">
              {item.desc}
            </Text>
            <View style={[styles.priceContainer, { backgroundColor: theme === 'dark' ? '#f39c12' : '#f1c40f' }]}>
              <Text>{item.price}</Text>
            </View>
            {isItemInCart(item) ? (
              <TouchableOpacity style={[styles.addButton, { backgroundColor: theme === 'dark' ? '#e74c3c' : '#e74c3c' }]} onPress={() => removeItem(item)}>
                <Text style={{ color: theme === 'dark' ? 'white' : 'black' }}>Remove</Text>
                <Image source={require('../../assets/foodImages/cart.png')} style={styles.cartIcon} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={[styles.addButton, { backgroundColor: theme === 'dark' ? '#2ecc71' : '#2ecc71' }]} onPress={() => addItem(item)}>
                <Text style={{ color: theme === 'dark' ? 'white' : 'black' }}>Add</Text>
                <Image source={require('../../assets/foodImages/cart.png')} style={styles.cartIcon} />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity onPress={() => toggleFavorite(item)}>
            <Image
              source={
                isItemInFavorites(item)
                  ? require('../../assets/foodImages/favorite.png') // Image for favorite
                  : require('../../assets/foodImages/heart.png') // Image for not favorite
              }
              style={styles.heartIcon}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {visible && <Popup />}
    </View>
  );

  const skeleton = () => (
    <SkeletonPlaceholder backgroundColor={theme === 'dark' ? '#2c3e50' : '#e1e9ee'} highlightColor={theme === 'dark' ? '#34495e' : '#f2f8fc'}>
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
      keyExtractor={(item) => item.id}
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
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  infoContainer: {
    width: '60%',
    height: '100%',
    padding: 10,
  },
  foodTitle: {
    fontWeight: 'bold',
    margin: 5,
  },
  foodDescription: {
    fontSize: 12,
    margin: 8,
  },
  priceContainer: {
    width: 80,
    minHeight: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
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
    width: '100%',
    height: '100%',
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
