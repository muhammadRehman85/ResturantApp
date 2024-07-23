import { View, Text ,Image} from 'react-native'
import React from 'react'


const Help = () => {
  return (<>
    <View style={{backgroundColor:'white'}}>
   <View style={{width:'100%',height:'40%',marginTop:'10%', justifyContent:'center',alignItems:'center'}}><Image source={require('../../../assets/logo.jpg')} style={{width:'30%',height:'60%'}}/></View>
   <Text style={{fontWeight:'bold',color:'black',fontSize:18,textAlign:'center',marginTop:60}}>Support Center</Text>
   <Text style={{textAlign:'center',marginTop:20}}>For Queries, Please Contact Us at:</Text>
   <Text style={{textAlign:'center',marginTop:20,fontSize:16,fontWeight:'bold',color:'green',paddingTop:20}}>+9291111446699</Text>
   
    </View><View style={{width:'100%',height:'30%', position:'absolute',left:0,bottom:10 ,alignItems:'center', backgroundColor:'white'}}>
    <Image source={require('../../../assets/OIS.jpg')} style={{width:'40%',height:'80%'}}/></View>
    </> )
}

export default Help