import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = ({ navigation }) => {
  const [visible,setVisible]=useState(false);
  const help = () => {
    navigation.navigate('Help');
  };
  const LongPressPopup=()=>{
    setVisible(true)
   
  }
  const search = () => {
    navigation.navigate('Search');
  };

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.container}>
      {visible&&<View style={{width:150,height:40,backgroundColor:'white',elevation:2,zIndex:2,position:'absolute',top:50,right:20,borderWidth:0.2,flexDirection:'row',}}><Text>help</Text><TouchableOpacity onPress={()=>setVisible(false)}><Text style={{marginLeft:20}}>X</Text></TouchableOpacity></View>}
      <View style={styles.leftSection}>
        <View style={styles.deliveryRow}>
          <Text style={{fontFamily:'PlaywriteBEWAL-Regular',fontSize:10}}>deliver to</Text>
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
        <TouchableOpacity onPress={help} onLongPress={LongPressPopup}>
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
