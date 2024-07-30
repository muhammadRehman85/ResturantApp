import { View, Text ,Image} from 'react-native'
import React from 'react'
import Dishes from '../../Components/Dishes'
import { useSelector } from 'react-redux'


const Cart = () => {
  const foodItems=useSelector(state=>state.cart)
  return (<>
  <Dishes  foodItems={foodItems}/>
    </> )
}

export default Cart