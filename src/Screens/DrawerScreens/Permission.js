import React from 'react';
import {
  Button,
  PermissionsAndroid,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Cool Photo Geolocation Permission',
        message:
          'Cool Photo App needs access to your location ' +
          'so you will be tracked.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
    } else {
      console.log('location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const Permission = () => (
  <View style={styles.container}>
    <Text style={styles.item}>Try permissions</Text>
    <Button title="request permissions" onPress={requestLocationPermission} />
  </View>
);
export default Permission
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});