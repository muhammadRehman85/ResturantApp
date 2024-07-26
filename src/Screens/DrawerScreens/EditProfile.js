import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const EditProfile = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [imageUri, setImageUri] = useState(null);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.error('ImagePicker Error: ', response.errorCode);
      } else {
        setImageUri(response.assets[0].uri);
      }
    }).catch(error => {
      console.error('ImagePicker Error: ', error);
    });
  };

  const takePhoto = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.error('ImagePicker Error: ', response.errorCode);
      } else {
        setImageUri(response.assets[0].uri);
      }
    }).catch(error => {
      console.error('ImagePicker Error: ', error);
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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

          {/* Image selection and preview */}
          <View style={styles.imageContainer}>
            {imageUri && <Image source={{ uri: imageUri }} style={styles.selectedImage} />}
            <TouchableOpacity style={styles.imageButton} onPress={selectImage}>
              <Image source={require('../../../assets/gallary.png')}/>
              <Text>Select Image from your gallary</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageButton} onPress={takePhoto}>
              <Text style={styles.imageButtonText}>Take Photo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.updateButton}>
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
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  innerContainer: {
    width: '100%',
    padding: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ecf0f1',
  },
  textInput: {
    width: '100%',
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#ecf0f1',
    height: 35,
    padding: 10,
    backgroundColor: 'white',
    fontSize: 10,
    borderRadius: 5,
  },
  textTitle: {
    marginBottom: 5,
  },
  marginVertical: {
    marginVertical: 10,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  selectedImage: {
    width: 120,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  imageButton: {
    // backgroundColor: '#f39c12',
    padding: 10,
    borderRadius: 5,
    borderWidth:1,
    borderColor:'#bdc3c7',
    marginVertical: 5,
  },
  imageButtonText: {
    color: 'grey',
    fontSize: 14,
  },
  updateButton: {
    width: '100%',
    height: 50,
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
