import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CarStore, CategoriesStore, HomeStore } from '../views'
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()


export const StackTop = () => {
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <StatusBar />
         <Tab.Navigator screenOptions={{
            tabBarStyle:{
               margin: 10,
               height: 50,
               borderRadius: 50,
               padding: 10,
               backgroundColor: "#",
            },
         }}>
            
            <Tab.Screen name='Productos' component={ HomeStore }/>
            <Tab.Screen name='Categorias' component={ CategoriesStore }/>
            <Tab.Screen name='Carrito' component={ CarStore }/>
         </Tab.Navigator>
      </SafeAreaView>
   )
}
