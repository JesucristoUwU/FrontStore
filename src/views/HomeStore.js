import React  from 'react';
import { View, FlatList } from 'react-native';
import { getAllProducts } from '../services/getAllProducts';
import { ProductCard } from '../components/ProductCard';

export const HomeStore = () => {
   const {isLoading, data} = getAllProducts()

   return (
      <View>
         <FlatList
            data={ data }
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
            <ProductCard
               nombre={item.nombre}
               precio={item.precio}
               image={item.url}
            />
            )}
         />
      </View>
   );
};