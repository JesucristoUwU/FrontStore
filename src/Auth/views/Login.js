import React from 'react'
import { Layout, styles } from './Layout'
import { TouchableOpacity, Text } from 'react-native'

export const Login = ({ navigation }) => {
   return (
      <Layout>
         <TouchableOpacity
            style={ styles.button } 
            onPress={() => navigation.navigate("register")}
         > 
            <Text style={ styles.textButton }> Crear cuenta </Text>  
         </TouchableOpacity>
      </Layout>
   )
}