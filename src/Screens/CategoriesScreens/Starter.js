import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Dishes from '../../Components/Dishes';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Starter = ({ navigation }) => {
  const [foodItemsData, setFoodItemsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const connection = await NetInfo.fetch();
        setIsConnected(connection.isConnected);

        if (connection.isConnected) {
          console.log("Fetching food items from Firestore...");
          const snapshot = await firestore().collection('FoodItems').get();
          if (!snapshot.empty) {
            console.log(`Number of documents: ${snapshot.size}`);
            const items = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
            }));
            setFoodItemsData(items);
            console.log("Food items data:", items);
            // Save data to AsyncStorage
            await AsyncStorage.setItem('foodItemsData', JSON.stringify(items));
          } else {
            console.log("No food items found in Firestore.");
          }
        } else {
          // Fetch data from AsyncStorage when offline
          const storedData = await AsyncStorage.getItem('foodItemsData');
          if (storedData) {
            setFoodItemsData(JSON.parse(storedData));
            console.log("Fetched data from AsyncStorage:", JSON.parse(storedData));
          } else {
            console.log("No data found in AsyncStorage.");
          }
        }
      } catch (error) {
        console.error("Error fetching food items: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Listen for network connectivity changes
    const unsubscribeNetInfo = NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      setIsConnected(state.isConnected);
    });

    // Cleanup functions
    return () => {
      unsubscribeNetInfo();
    };
  }, []);

  const SkeletonLoader = () => (
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
        <Image source={require('../../../assets/foodImages/grayheart.png')} style={styles.heartIcon} />
      </View>
    </SkeletonPlaceholder>
  );

  if (loading) {
    return (
     
        <SkeletonLoader />
  
    );
  }

  if (!isConnected) {
    return (
      <View style={styles.loadingContainer}>
        <Text>No internet connection. Displaying cached data.</Text>
        <Dishes foodItems={foodItemsData} navigation={navigation} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Dishes foodItems={foodItemsData} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  // loadingContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  skeletonContainer: {
    width: '100%',
    height: 180,
    flexDirection: 'row',
    elevation: 2,
    // borderWidth: 0.5,
    borderRadius: 5,
    marginVertical: 10,
    position: 'relative',
  },  infoContainer: {
    width: '60%',
    height: '100%',
    padding: 10,
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
  heartIcon: {
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 5,
    right: 10,
  },
});

export default Starter;
