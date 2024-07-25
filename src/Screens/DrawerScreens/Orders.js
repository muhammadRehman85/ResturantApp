import {View, Text, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import {Animated} from 'react-native';

const Orders = () => {
  const animation = useRef(new Animated.Value(0)).current;
const [click,setClick]=useState(false)
  const startAnimation = () => {
    Animated.spring(animation, {
      toValue:click?0: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Animated.View
        style={[
          {width: 100, height:100, backgroundColor: 'yellow'},
          {
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -100],
                }),
              },  {
                rotate: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg','360deg'],
                }),
              },
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                }),
              }, 
              {
                scale: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1,0.5],
                }),
              }, 
            ],
          },
        ]}>
        <Text>hello</Text>
      </Animated.View>
      <TouchableOpacity style={{width:100,height:40,backgroundColor:'cyan',borderRadius:10,margin:150}} onPress={()=>{
        setClick(!click)
        startAnimation()}}>
        <Text style={{textAlign:'center'}}>start animation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Orders;
