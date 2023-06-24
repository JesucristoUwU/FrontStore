import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CategoriesStore, HomeStore } from '../views'
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import ProfileComponent from '../components/ProfileComponent'
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export const StackTop = () => {
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <StatusBar />
         <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
               let iconName;

               if (route.name === 'Productos') {
               iconName = focused ? 'home' : 'home-outline';
               } else if (route.name === 'Categorias') {
               iconName = focused ? 'grid' : 'grid-outline';
               } else if (route.name === 'Perfil') {
               iconName = focused ? 'person' : 'person-outline';
               }

               return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarStyle: {
               margin: 10,
               height: 50,
               borderRadius: 50,
               padding: 10,
            },
         })}>
            
            <Tab.Screen options={{ headerShown: false }} name='Productos' component={ HomeStore }/>
            <Tab.Screen options={{ headerShown: false }} name='Categorias' component={ CategoriesStore }/>
            <Tab.Screen options={{ headerShown: false }} name='Perfil' component={ ProfileComponent }/>
         </Tab.Navigator>
      </SafeAreaView>
   )
}
