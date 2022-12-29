import { View, Text } from 'react-native'
import React, { memo, useState } from 'react'
import DatePicker from 'react-native-date-picker'


const Timer = (props) => {
  
    
  return (
    
      
    <DatePicker
    date={props.date}
    textColor="white"
    fadeToColor='#1C6758'
    onDateChange={props.setDate}
    mode="time" />

   
  )
}
//deneme yap 
export default memo(Timer)

//button color change