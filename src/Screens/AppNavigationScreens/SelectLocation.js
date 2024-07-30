import { View, Text, StyleSheet, Image, TouchableOpacity,Alert } from 'react-native';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';

const cities = [
  { label: 'Karachi', value: 'karachi' },
  { label: 'Lahore', value: 'lahore' },
  { label: 'Islamabad', value: 'islamabad' },
  { label: 'peshawar', value: 'peshawar' },
  // Add more cities as needed
];

const areas = {
  karachi: [
    { label: 'Clifton', value: 'clifton' },
    { label: 'Gulshan-e-Iqbal', value: 'gulshan' },
    { label: 'DHA', value: 'dha' },
    // Add more areas for Karachi
  ],
  lahore: [
    { label: 'Gulberg', value: 'gulberg' },
    { label: 'Model Town', value: 'model_town' },
    { label: 'DHA', value: 'dha' },
    // Add more areas for Lahore
  ],
  islamabad: [
    { label: 'F-6', value: 'f6' },
    { label: 'G-10', value: 'g10' },
    { label: 'I-8', value: 'i8' },
    // Add more areas for Islamabad
  ],
  peshawar: [
    { label: 'phase 3', value: 'phase3' },
    { label: 'tehkal payan', value: 'tehkal' },
    { label: 'phase 6', value: 'phase6' },
    // Add more areas for Islamabad
  ],
};

const SelectLocation = () => {
  const [city, setCity] = useState(null);
  const [area, setArea] = useState(null);
  const [availableAreas, setAvailableAreas] = useState([]);
  const navigation = useNavigation();

  const handleCityChange = (selectedCity) => {
    setCity(selectedCity.value);
    setAvailableAreas(areas[selectedCity.value] || []);
    setArea(null); // Reset area when city changes
  };

  const handleConfirm = () => {
    if (city && area) {
      navigation.navigate('Home', { selectedCity: city, selectedArea: area });
    } else {
      Alert.alert("Selection Error", "Please select both city and area.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../assets/logo.jpg')} style={styles.logo} />
      </View>

      <View style={styles.dropdownContainer}>
        <Text style={{ color: 'red' }}>Please Select your city and area</Text>
        <View style={{ width: '70%', paddingTop: 20 }}>
          <Text style={{ color: 'red' }}>Select your city</Text>
        </View>

        <Dropdown
          style={styles.dropdown}
          data={cities}
          labelField="label"
          valueField="value"
          placeholder="Select your city"
          search
          searchPlaceholder="Search..."
          value={city}
          onChange={handleCityChange}
        />

        <View style={{ width: '70%' }}>
          <Text style={{ color: 'red' }}>Select your area</Text>
        </View>

        <Dropdown
          style={styles.dropdown}
          data={availableAreas}
          labelField="label"
          valueField="value"
          placeholder="Select your area"
          search
          searchPlaceholder="Search..."
          value={area}
          onChange={item => setArea(item.value)}
        />

        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={{ color: 'white' }}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.locateButton}>
          <Image source={require('../../../assets/location.png')} style={styles.locationIcon} />
          <Text style={{ color: 'red', marginLeft: 5 }}>Locate on Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1c40f',
  },
  logoContainer: {
    width: '100%',
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  dropdownContainer: {
    width: '100%',
    height: '55%',
    alignItems: 'center',
    paddingTop: 50,
  },
  dropdown: {
    margin: 10,
    width: '70%',
    borderBottomWidth: 0.3,
    padding: 5,
  },
  confirmButton: {
    width: "70%",
    backgroundColor: 'red',
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  locateButton: {
    width: "70%",
    borderWidth: 2,
    borderColor: 'red',
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  locationIcon: {
    width: 15,
    height: 15,
  },
});

export default SelectLocation;
