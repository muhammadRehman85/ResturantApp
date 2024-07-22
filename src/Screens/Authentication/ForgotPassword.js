import {View, Text, TextInput, TouchableOpacity,Image} from 'react-native';
import React from 'react';
import Navigation from '../../Components/Navigation';
// import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';


const ForgotPassword = ({navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        paddingTop: '25%',
        paddingLeft: 10,
      }}>
        <TouchableOpacity style={{width:30,height:30,position:'absolute',top:20,left:10}} onPress={()=>navigation.goBack()}><Image source={require('../../../assets/backArrow.png')} style={{width:30,height:30,}}/></TouchableOpacity>
      <Text style={{color: 'white', fontSize: 35, fontWeight: 'bold'}}>
        Forgot Password
      </Text>
      <View style={{width: '96%', paddingVertical: 25}}>
        <Text style={{color: 'white', fontSize: 18, fontFamily: 'Arial'}}>
          Enter the email associated with acount and we will send instruction to
          reset your password
        </Text>
      </View>
      <View>
        <Text style={{color:'white',fontSize:18}}>Email</Text>
        <TextInput
          style={{
            width: '100%',
            borderRadius: 20,
            color: '#fff',
            padding: 12,
            borderWidth: 1,
            borderColor: '#263238',
            marginVertical: 10,
            height: 55,
            fontSize:18
          }}
          placeholder="email"
          placeholderTextColor="#263238"
          keyboardType="email-address"

        />
      </View>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 55,
          backgroundColor: 'cyan',
          position: 'absolute',
          bottom: 15,
          left: 0,
          paddingTop:10,
         borderRadius: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            textAlignVertical:'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
