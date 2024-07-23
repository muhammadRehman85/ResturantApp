import { View, Text } from 'react-native'
import React from 'react'
import foodItems from '../../Components/data/foodItems'
import Dishes from '../../Components/Dishes'
const Somewhatsooper = () => {
  return (
    <View style={{backgroundColor:'white'}}>
<Dishes foodItems={foodItems}/></View>
  )
}

export default Somewhatsooper