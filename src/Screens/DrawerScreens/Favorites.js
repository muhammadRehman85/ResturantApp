import { View, Text, Image ,} from 'react-native'
import React, { useState,useEffect, } from 'react'
import Details from '../AppNavigationScreens/Details'
import BackgroundServices from '../../Components/BackgroundService'
import NetInfo from '@react-native-community/netinfo';
import { useNetInfo } from '@react-native-community/netinfo';
const Favorites = () => {
 const [isConnected,setIsConnected]=useState(false);
//  const netInfo = useNetInfo();
  useEffect(() => {
    const unsubscribe =NetInfo .addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      setIsConnected( state.isConnected)
    });
    
    // Unsubscribe
    return()=>{
      unsubscribe();

    }
  }, []);
  return (<>
{isConnected?(<View  style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center'
}} ><Text>internet available</Text></View>):(<View style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center'
}}><Image source={require('../../../assets/nointernet.png')} style={{width:200,height:200}}/></View>)}
</> )
}

export default Favorites