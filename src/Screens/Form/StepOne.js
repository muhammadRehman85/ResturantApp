import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import backgroundServer from 'react-native-background-actions';

const StepOne = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>First Name</Text>
      <TextInput
        value={firstName}
        onChangeText={setFirstName}
        style={styles.textInput}
        placeholder='Enter first name'
      />
      <Text style={styles.textTitle}>Last Name</Text>
      <TextInput
        value={lastName}
        onChangeText={setLastName}
        style={styles.textInput}
        placeholder='Enter last name'
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('StepTwo', {firstName, lastName})}>
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  textTitle: {
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ecf0f1',
    backgroundColor: 'white',
    height: 40,
    marginBottom: 15,
    paddingLeft: 10,
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

export default StepOne;
