import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const StepThree = ({ navigation, route }) => {
  const { firstName, lastName, email, phoneNumber } = route.params;
  const [imageUri, setImageUri] = useState(null);

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

  const handleSubmit = () => {
    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      imageUri,
    };
    console.log(formData);
    // Handle form submission, e.g., send data to the server
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            {imageUri && <Image source={{ uri: imageUri }} style={styles.selectedImage} />}
            <TouchableOpacity style={styles.imageButton} onPress={selectImage}>
              <Text>Select Image from Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageButton} onPress={takePhoto}>
              <Text>Take Photo</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleSubmit} style={styles.btn}><Text>Update</Text></TouchableOpacity>
          {/* <Button title="Submit" onPress={handleSubmit} /> */}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',

    // alignItems:'center'
  },
  scrollView: {
    // flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  innerContainer: {
    width: '100%',
    padding: 20,
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
    width:200,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    marginVertical: 10
  }, 
   btn: {
    backgroundColor: '#f39c12',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',marginTop:10
  },
  btnText:{
    color:'white',fontWeight:'bold'
  }
});

export default StepThree;
