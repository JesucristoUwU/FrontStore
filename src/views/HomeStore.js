import React  from 'react';
import { View, Text } from 'react-native';
import { getByCategorie } from '../services/getByCategorie';

export const HomeStore = () => {

   // cargar productos por categoria
   const { categorie, isLoading } = getByCategorie("ropa")
   const { categorie: categorie2, isLoading: isLoading2} = getByCategorie("accesorio")
   const { categorie: categorie3, isLoading: isLoading3 } = getByCategorie("electronica")
   
   console.log(categorie, categorie2, categorie3);

   return (
      <View style={{flex: 1}}>
         <Text>Todos los productos</Text>
      </View>
   );
};