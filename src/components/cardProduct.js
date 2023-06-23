import React from 'react'
import { View, Text } from 'react-native'

export const cardProduct = ({ nombre }) => {
   return (
      <View>
         <Text>{nombre}</Text>
      </View>
   )
}