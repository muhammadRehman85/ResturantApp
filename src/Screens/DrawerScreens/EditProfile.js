import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React, { useState } from 'react';

const EditProfile = () => {
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
            <Text style={styles.textTitle}>Email</Text>
            <TextInput
             value='mr821931@gmail.com'
              style={styles.textInput}
              type='email'
            />
          
          </View>
          <View style={[styles.inputContainer, styles.marginVertical]}>
           <Text style={styles.textTitle}>Phone</Text>
            <TextInput
              placeholder=""
              value='+92 312 1912814'
             type='number'
              style={styles.textInput}
            />
           
          </View>
          <View style={[styles.inputContainer, styles.marginVertical]}>
            <Text style={styles.textTitle}>New Email</Text>
            <TextInput
              placeholder="Enter your new Email"
              secureTextEntry={!isPasswordVisible}
              style={styles.textInput}
            />
          </View>
          <View style={[styles.inputContainer, styles.marginVertical]}>
            <Text style={styles.textTitle}>New Phone</Text>
            <TextInput
              placeholder="Enter your phone number"
        
              style={styles.textInput}
            />
          </View>
          
        </View>
      </ScrollView><TouchableOpacity style={styles.updateButton}>
            <Text style={styles.updateButtonText}>Update Profile</Text>
          </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    // justifyContent: 'center',
    paddingTop:10,
    paddingHorizontal: 10,
  },
  innerContainer: {
    width: '100%',
    // backgroundColor: 'white',
    borderRadius: 10,
    // elevation: 5,
    padding: 20,
  },
  inputContainer: {
    // flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ecf0f1',
    // alignItems: 'center',
    
  },
  textInput: {
    width: '100%',
    paddingLeft: 10,
    borderWidth:1,
    borderColor:'#ecf0f1',
    height:35,padding:10,
    backgroundColor:'white',
    fontSize:10,
    borderRadius:5,
    elevatio:2,
  },
  textTitle:{ marginBottom:5},
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
    position:'absolute',
    bottom:0,
    left:0,
    backgroundColor: '#f39c12',
    
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  updateButtonText: {
    color: 'white',
  },
});

export default EditProfile;
