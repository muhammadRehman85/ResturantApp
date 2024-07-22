import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import useNavigation from '@react-navigation/native';

const SignUp = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const gotoForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>

      <View style={styles.inputContainer}>
      <Text style={styles.label}>Name</Text>
      <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="cyan"
          keyboardType="email-address"
        />
        <Text style={styles.label}>Email</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="cyan"
          keyboardType="email-address"
        />
          <Text style={styles.label}>Phone</Text>
      <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="cyan"
          keyboardType="number"
        />
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="cyan"
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={
                isPasswordVisible
                  ? require('../../../assets/hidepassword.png')
                  : require('../../../assets/showpassword.png')
              }
              style={styles.passwordIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

  

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>



      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.footerText}>Already have an account? <Text style={styles.signInText}>Sign In</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    paddingHorizontal: 30,
    paddingTop: '20%',
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  inputContainer: {},
  label: {
    color: 'white',
    fontSize: 16,
  },
  input: {
    width: '100%',
    borderRadius: 15,
    color: 'white',
    padding: 12,
    borderWidth: 1,
    borderColor: '#263238',
    marginVertical: 10,
    height: 45,
  },
  passwordContainer: {
    flexDirection: 'row',
  },
  passwordIcon: {
    width: 20,
    height: 20,
    marginLeft: -40,
    marginTop: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  checkbox: {
    flexDirection: 'row',
  },
  checkboxIcon: {
    width: 25,
    height: 25,
  },
  checkboxText: {
    color: 'cyan',
    marginLeft: 10,
  },
  forgotPasswordText: {
    color: 'cyan',
  },
  button: {
    backgroundColor: '#00FFFF',
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  orSignInContainer: {
    justifyContent: 'center',
    padding: 30,
  },
  orSignInText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  socialSignInContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
  socialButton: {
    backgroundColor: '#2c3e50',
    flexDirection: 'row',
    width: '45%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    height: 50,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  socialText: {
    color: 'white',
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    left: '30%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    color: '#fff',
  },
  signInText: {
    color: 'cyan',
  },
});

export default SignUp;
