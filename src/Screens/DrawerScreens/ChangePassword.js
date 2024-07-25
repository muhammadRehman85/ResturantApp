import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React, { useState } from 'react';

const ChangePassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.innerContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter your current password"
              secureTextEntry={!isPasswordVisible}
              style={styles.textInput}
            />
            <TouchableOpacity style={styles.iconContainer} onPress={togglePasswordVisibility}>
              <Image
                source={
                  isPasswordVisible
                    ? require('../../../assets/DrawerIcons/hidepassword.png')
                    : require('../../../assets/DrawerIcons/showpassword.png')
                }
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.inputContainer, styles.marginVertical]}>
            <TextInput
              placeholder="Enter Your New Password"
              secureTextEntry={!isPasswordVisible}
              style={styles.textInput}
            />
            <TouchableOpacity style={styles.iconContainer} onPress={togglePasswordVisibility}>
            <Image
                source={
                  isPasswordVisible
                    ? require('../../../assets/DrawerIcons/hidepassword.png')
                    : require('../../../assets/DrawerIcons/showpassword.png')
                }
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.passwordHint}>Password must be at least 8 characters</Text>
          <View style={[styles.inputContainer, styles.marginVertical]}>
            <TextInput
              placeholder="Re-enter your new password"
              secureTextEntry={!isPasswordVisible}
              style={styles.textInput}
            />
            <TouchableOpacity style={styles.iconContainer} onPress={togglePasswordVisibility}>
            <Image
                source={
                  isPasswordVisible
                    ? require('../../../assets/DrawerIcons/hidepassword.png')
                    : require('../../../assets/DrawerIcons/showpassword.png')
                }
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.updateButton}>
            <Text style={styles.updateButtonText}>Update Password</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  innerContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ecf0f1',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    paddingLeft: 10,
  },
  iconContainer: {
    marginTop: 15,
    marginRight: 15,
  },
  icon: {
    width: 18,
    height: 18,
  },
  marginVertical: {
    marginVertical: 10,
  },
  passwordHint: {
    textAlign: 'left',
    marginVertical: 10,
  },
  updateButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  updateButtonText: {
    color: 'white',
  },
});

export default ChangePassword;
