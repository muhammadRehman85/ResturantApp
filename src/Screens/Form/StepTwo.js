import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const StepTwo = ({navigation, route}) => {
  const {firstName, lastName} = route.params;
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.textInput}
      />
      <Text style={styles.textTitle}>Phone Number</Text>
      <TextInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={styles.textInput}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('StepThree', {
            firstName,
            lastName,
            email,
            phoneNumber,
          })
        }
        style={styles.btn}><Text style={styles.btnText}>Next</Text></TouchableOpacity>
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
    alignItems: 'center',
    marginTop: 10,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default StepTwo;
