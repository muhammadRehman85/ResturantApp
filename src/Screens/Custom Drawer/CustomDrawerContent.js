import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal, Alert } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import CustomDrawerItem from './CustomDrawerItem';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const theme = useSelector(state => state.cart.theme);

  const showLogoutAlert = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Logout",
          onPress: () => navigation.navigate('Logout'),
          style: "destructive"
        }
      ],
      { cancelable: true }
    );
  };

  const Popup = () => (
    <View style={styles.container(theme)}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView(theme)}>
            <Text style={styles.modalText(theme)}>Are you sure to Delete Account</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );

  return (
    <View style={styles.container(theme)}>
      {modalVisible ? (
        <Popup />
      ) : (
        <DrawerContentScrollView {...props} style={styles.container(theme)}>
          <View style={styles.header(theme)}>
            <View style={styles.logoContainer}>
              <Image source={require('../../../assets/DrawerIcons/user.png')} style={styles.logo} />
            </View>
            <View>
              <Text style={styles.userName(theme)}>Muhammad Rehman</Text>
              <View style={styles.contactContainer}>
                <Text style={styles.contactText(theme)}>+923121912814</Text>
                <TouchableOpacity style={styles.logoContainer} onPress={() => navigation.navigate('StepOne')}>
                  <Image source={require('../../../assets/edit.png')} style={styles.editIcon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.sectionTitle(theme)}>Personal</Text>
          </View>
          <View style={styles.drawerItems}>
            <CustomDrawerItem
              label="Orders"
              onPress={() => props.navigation.navigate('Orders')}
              icon={require('../../../assets/DrawerIcons/orders.png')}
              theme={theme}
            />
            <CustomDrawerItem
              label="My Address"
              onPress={() => props.navigation.navigate('Addresses')}
              icon={require('../../../assets/DrawerIcons/address.png')}
              theme={theme}
            />
            <CustomDrawerItem
              label="My Favorites"
              onPress={() => props.navigation.navigate('Favorites')}
              icon={require('../../../assets/DrawerIcons/fav.png')}
              theme={theme}
            />
            <CustomDrawerItem
              label="My Payment Methods"
              onPress={() => props.navigation.navigate('PaymentsMethods')}
              icon={require('../../../assets/DrawerIcons/payments.png')}
              theme={theme}
            />
            <View>
              <Text style={styles.sectionTitle(theme)}>General</Text>
            </View>
            <CustomDrawerItem
              label="Change Password"
              onPress={() => props.navigation.navigate('ChangePassword')}
              icon={require('../../../assets/DrawerIcons/changepassword.png')}
              theme={theme}
            />
            <CustomDrawerItem
              label="Logout"
              onPress={showLogoutAlert}
              icon={require('../../../assets/DrawerIcons/logout.png')}
              theme={theme}
            />
            <CustomDrawerItem
              label="Request Account Deletion"
              onPress={() => setModalVisible(true)}
              icon={require('../../../assets/DrawerIcons/acountdelete.png')}
              theme={theme}
            />
            <CustomDrawerItem
              label="Add Data"
              onPress={() => props.navigation.navigate('AddData')}
              icon={require('../../../assets/DrawerIcons/payments.png')}
              theme={theme}
            />
            <CustomDrawerItem
              label="Settings"
              onPress={() => props.navigation.navigate('SettingsScreen')}
              icon={require('../../../assets/DrawerIcons/payments.png')}
              theme={theme}
            />
          </View>
        </DrawerContentScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: (theme) => ({
    backgroundColor: theme === 'dark' ? 'black' : 'white',
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
  }),
  header: (theme) => ({
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme === 'dark' ? 'black' : 'white',
  }),
  logoContainer: {
    width: '25%',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  userName: (theme) => ({
    color: theme === 'dark' ? 'white' : 'black',
    fontWeight: 'bold',
  }),
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contactText: (theme) => ({
    fontSize: 13,
    color: theme === 'dark' ? 'white' : 'black',
  }),
  editIcon: {
    width: 18,
    height: 18,
  },
  sectionTitle: (theme) => ({
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
    color: theme === 'dark' ? 'white' : 'black',
  }),
  drawerItems: {
    marginTop: 20,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: (theme) => ({
    margin: 20,
    backgroundColor: theme === 'dark' ? 'black' : 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }),
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: (theme) => ({
    marginBottom: 15,
    textAlign: 'center',
    color: theme === 'dark' ? 'white' : 'black',
  }),
});

export default CustomDrawerContent;
