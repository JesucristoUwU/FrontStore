import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { CategoriesStore, HomeStore } from '../views'

const Tab = createMaterialTopTabNavigator()

export const StackTop = () => {
   return (
      <Tab.Navigator >
         <Tab.Screen name='store' component={ HomeStore }/>
         <Tab.Screen name='categories' component={ CategoriesStore }/>
      </Tab.Navigator>
   )
}