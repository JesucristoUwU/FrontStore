import React  from 'react';
import { Text, ScrollView } from 'react-native';
import { getByCategorie } from '../services/getByCategorie';

export const HomeStore = () => {

   // cargar productos por categoria
   const { categorie, isLoading } = getByCategorie("ropa")
   const { categorie: categorie2, isLoading: isLoading2} = getByCategorie("accesorio")
   const { categorie: categorie3, isLoading: isLoading3 } = getByCategorie("electronica")

   return (
      <ScrollView style={{flex: 1}}>
         <Text>Todos los productos</Text>
      </ScrollView>
   );
};