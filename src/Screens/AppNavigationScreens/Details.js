import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import notifee from '@notifee/react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart, addtoFav, removeFav } from '../../../Redux/Slice'; 

const Details = ({ route }) => {
  const { item } = route.params;
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.cart.favorites); 
  const theme = useSelector(state => state.cart.theme);
  const [isFav, setIsFav] = useState(false);

  // --------------Check if the item is already in favorites----------
  useEffect(() => {
    const checkIfFav = favorites.some(favItem => favItem.id === item.id);
    setIsFav(checkIfFav);
  }, [favorites, item.id]);

  // Add item to cart
  const addItem = () => {
    dispatch(addtoCart(item));
    onDisplayNotification();
  };

  // --------------------------Add or remove item from favorites-------
  const toggleFavorite = () => {
    if (isFav) {
      dispatch(removeFav(item)); 
    } else {
      dispatch(addtoFav(item));
    }
    setIsFav(!isFav);
  };

  const onDisplayNotification = async () => {
    try {
      console.log('send');
   
      await notifee.requestPermission();

      // Create a channel (required for Android)
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });

      // Display a notification
      await notifee.displayNotification({
        title: item.title,
        body: item.title + ' is added to your cart',
        android: {
          channelId,
          pressAction: {
            id: 'default',
          },
        },
      });
    } catch (error) {
      console.error('Notification error:', error);
    }
  };

  return (
    <View style={styles.container(theme)}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.mainImage} />
      </View>
      <ScrollView>
        <View style={styles.detailsContainer(theme)}>
          <Text style={styles.title(theme)}>{item.title}</Text>
          <TouchableOpacity onPress={toggleFavorite}>
            <Image
              source={
                isFav
                  ? require('../../../assets/foodImages/favorite.png') 
                  : require('../../../assets/foodImages/heart.png') 
              }
              style={styles.heartIcon}
            />
          </TouchableOpacity>
          <Text style={styles.description(theme)}>{item.desc}</Text>
          <Text style={styles.price(theme)}>{item.price}</Text>
        </View>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={addItem}>
            <Text style={styles.addButtonText}>ADD</Text>
            <Image source={require('../../../assets/foodImages/cart.png')} style={styles.cartIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (theme) => ({
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
    backgroundColor: theme === 'dark' ? 'black' : 'white',
  }),
  imageContainer: {
    width: '100%',
    height: '50%',
    padding: 10,
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: (theme) => ({
    padding: 20,
    position: 'relative',
    backgroundColor: theme === 'dark' ? 'black' : 'white',
  }),
  title: (theme) => ({
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: theme === 'dark' ? 'white' : 'black',
  }),
  heartIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 20,
    right: 25,
  },
  description: (theme) => ({
    marginVertical: 10,
    color: theme === 'dark' ? 'white' : 'black',
  }),
  price: (theme) => ({
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: theme === 'dark' ? 'white' : 'black',
  }),
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
