import React from 'react'
import { Hogar, Medicamentos, Muebles, Entretenimiento } from '../services/categories'
import CategoryCard from '../components/CategoryCard'
import { ScrollView } from 'react-native-gesture-handler'

export const CategoriesStore = () => {
   return (
      <ScrollView style={{flex: 1, padding: 15, flexDirection: "column", position: "relative"}}>
         <CategoryCard categories={ Hogar } title="Hogar"/>
         <CategoryCard categories={ Medicamentos } title="Medicamentos"/>
         <CategoryCard categories={ Muebles } title="Muebles"/>
         <CategoryCard categories={ Entretenimiento } title="Entretenimiento"/>
      </ScrollView>
   )
}
