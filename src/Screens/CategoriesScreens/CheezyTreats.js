import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Dishes from '../../Components/Dishes';

const CheezyTreats = ({ navigation }) => {
  const [foodItemsData, setFoodItemsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        console.log("Fetching food items from Firestore...");
        const foodItemsSnapshot = await firestore().collection('FoodItems').get();
        console.log("Snapshot received:", foodItemsSnapshot);

        if (!foodItemsSnapshot.empty) {
          console.log(`Number of documents: ${foodItemsSnapshot.size}`);
          const items = foodItemsSnapshot.docs.map(doc => {
            console.log("Document data:", doc.data());
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setFoodItemsData(items);
          console.log("Food items data:", items);
        } else {
          console.log("No food items found in Firestore.");
        }
      } catch (error) {
        console.error("Error fetching food items: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodItems();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#d9346d" />
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CheezyTreats;
