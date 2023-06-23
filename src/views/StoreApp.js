import React, { useContext } from 'react'
import { View } from "react-native"
import { StackAuth } from '../Stacks/StackAuth'
import { AuthContext } from '../Auth/context/AuthProvider'
import { StackTop } from '../Stacks/StackTop'

export const StoreApp = () => {
   const { isLogged } = useContext(AuthContext)
   
   return (
      <View style={{ flex: 1 }}>
         {
           isLogged ? (
            <StackTop />
           ) : (
            <StackAuth />
           )
         }
      </View>
   )
}