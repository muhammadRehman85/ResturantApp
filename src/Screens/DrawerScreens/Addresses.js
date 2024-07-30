import {View, Text, PermissionsAndroid,hasLocationPermission,Alert} from 'react-native';
import React from 'react';
import Permission from './Permission';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Geolocation from 'react-native-geolocation-service';
const Addresses = () => {

  const getGeolocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        const { latitude, longitude } = position.coords;
        Alert.alert("Geolocation", `Latitude: ${latitude}, Longitude: ${longitude}`);
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };
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
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            marginTop: 100,
            backgroundColor: 'teal',
            padding: 10,
            borderRadius: 10,
          }}
          onPress={requestLocationPermission}>
          <Text style={{color: 'white'}}>Permission</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 10,
            backgroundColor: 'teal',
            padding: 10,
            borderRadius: 10,
          }}
          onPress={getGeolocation}>
          <Text style={{color: 'white'}}>Geo location</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Addresses;
