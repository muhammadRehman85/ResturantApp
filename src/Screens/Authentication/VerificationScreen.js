import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { Button } from 'react-native-paper';

const VerificationScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verification</Text>
      
      <Text style={styles.subtitle}>Enter the 4 digits code that you received on your email.</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
          />
        ))}
      </View>
      <TouchableOpacity>
        <Text style={styles.resendText}>Didn’t receive the OTP? <Text style={styles.resendLink}>Resend OTP</Text></Text>
      </TouchableOpacity>
      <TouchableOpacity
      
        style={styles.continueButton}
      >
        <Text style={{textAlign:'center',color:'white',fontSize:20,}}>Continue</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: '#0D0D0D',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop:'25%'
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#B0B0B0',
    textAlign: 'center',
    marginVertical: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop:'20%',
  },
  otpInput: {
    width: 80,
    height: 65,
    borderWidth: 1,
    borderColor: '#263238',
    borderRadius: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: 'black',
  },
  resendText: {
    color: '#B0B0B0',
    marginVertical: 20,
    textAlign:'center',
    fontSize:20
  },
  resendLink: {
    color: '#00A3FF',
  },
  continueButton: {
    width: '100%',
    height:60,
    position:'absolute',
    bottom:20,left:0,
    borderRadius: 25,
    backgroundColor: 'cyan',
    paddingTop:10
  },
});

export default VerificationScreen;
