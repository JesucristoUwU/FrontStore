import React from 'react'
import { Layout, styles  } from './Layout' 
import { TouchableOpacity, Text } from 'react-native'
import { View } from 'react-native'

export const Register = ({ navigation }) => {
   return (
      <Layout>
         <View>
            <Text style={styles.stylesText}>Registrarse</Text>
         </View>
         <TouchableOpacity
            style={ styles.button }
            onPress={() => navigation.navigate("login")}
         > 
            <Text style={ styles.textButton }> Ya tiene una cuenta? </Text>  
         </TouchableOpacity>
      </Layout>
   )
}