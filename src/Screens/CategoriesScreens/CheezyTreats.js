import { View, Text } from 'react-native'
import React from 'react'
import Dishes from '../../Components/Dishes'
import foodItems from '../../Components/data/foodItems'
const CheezyTreats = ({navigation}) => {
  return (
    <View style={{backgroundColor:'white'}}>
 <Dishes foodItems={foodItems} navigation={navigation}/></View>
  )
}

export default CheezyTreats