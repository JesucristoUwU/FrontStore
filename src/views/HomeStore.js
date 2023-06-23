import React  from 'react';
import { View, Text } from 'react-native';
import { getAllProducts } from '../services/getAllProducts';

export const HomeStore = () => {

   const {isLoading, data } = getAllProducts();

   if(isLoading) {
      return (
         <View>
            <Text>Cargando...</Text>
         </View>
      );
   }

   return (
      <View>

      </View>
   );
};
