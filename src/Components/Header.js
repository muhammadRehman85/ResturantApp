import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = ({ navigation }) => {
  const help = () => {
    navigation.navigate('Help');
  };

  const search = () => {
    navigation.navigate('Search');
  };

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.deliveryRow}>
          <Text>deliver to</Text>
          <Image
            source={require('../../assets/dropdown.png')}
            style={styles.dropdownIcon}
          />
        </View>
        <Text style={styles.locationText}>Tahkal Payan</Text>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity onPress={search}>
          <Image
            source={require('../../assets/search.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={help}>
          <Image
            source={require('../../assets/help.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={openDrawer}>
          <Image
            source={require('../../assets/customer.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '8%',
    backgroundColor: 'white',
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:5
  },
  leftSection: {
    width: '50%',
    paddingTop: 5,
  },
  deliveryRow: {
    flexDirection: 'row',
  },
  dropdownIcon: {
    width: 15,
    height: 15,
  },
  locationText: {
    fontWeight: 'bold',
    color: 'black',
  },
  rightSection: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    margin: 10,
  },
});

export default Header;
