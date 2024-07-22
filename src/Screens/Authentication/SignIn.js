import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

const SignIn = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // State variables for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <Text style={styles.header}>Sign In</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="cyan"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="cyan"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
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

      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={toggleCheckbox} style={styles.checkbox}>
          <Image
            source={
              isChecked
                ? require('../../../assets/checkcheckbox.png')
                : require('../../../assets/emptycheckbox.png')
            }
            style={styles.checkboxIcon}
          />
          <Text style={styles.checkboxText}>Remember me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DrawerNavigator')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.orSignInContainer}>
        <Text style={styles.orSignInText}>_________ Or Sign In with _______</Text>
      </View>

      <View style={styles.socialSignInContainer}>
        <View style={styles.socialButton}>
          <Image
            source={require('../../../assets/facebook.png')}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Facebook</Text>
        </View>
        <View style={styles.socialButton}>
          <Image
            source={require('../../../assets/google.png')}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Google</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.footerText}>Don't have an account? <Text style={styles.signInText}>Sign Up</Text></Text>
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
    paddingTop: 100,
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
    fontSize: 18,
  },
  input: {
    width: '100%',
    borderRadius: 15,
    color: 'white',
    padding: 12,
    borderWidth: 1,
    borderColor: '#263238',
    marginVertical: 10,
    height: 55,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    alignItems: 'center',
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

export default SignIn;
