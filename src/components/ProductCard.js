import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export const ProductCard = ({ nombre,precio, image }) => {
   return (
     <TouchableOpacity style={styles.cardContainer}>
       <Image source={{ uri: image }} style={styles.cardImage} />
       <Text style={styles.cardTitle}> { nombre } </Text>
       <Text style={styles.cardPrice}>$ { precio } </Text>
       <TouchableOpacity style={styles.addToCartButton}>
         <Text style={styles.addToCartButtonText}>Agregar al carrito</Text>
       </TouchableOpacity>
     </TouchableOpacity>
   );
};


const styles = StyleSheet.create({
listContainer: {
   padding: 16,
},
cardContainer: {
   backgroundColor: '#fff',
   borderRadius: 8,
   marginBottom: 16,
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.1,
   shadowRadius: 4,
   elevation: 2,
},
cardImage: {
   width: '100%',
   height: 200,
   borderTopLeftRadius: 8,
   borderTopRightRadius: 8,
},
cardTitle: {
   fontSize: 16,
   fontWeight: 'bold',
   marginTop: 8,
   paddingHorizontal: 8,
},
cardPrice: {
   fontSize: 16,
   fontWeight: 'bold',
   color: '#007bff',
   marginTop: 8,
   paddingHorizontal: 8,
},
addToCartButton: {
   backgroundColor: '#007bff',
   borderRadius: 4,
   paddingVertical: 8,
   paddingHorizontal: 12,
   margin: 8,
   alignSelf: 'center',
},
addToCartButtonText: {
   color: '#fff',
   fontWeight: 'bold',
   fontSize: 14,
   textAlign: 'center',
},
});