import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const CategoryCard = ({ categories, onPressCategory, title}) => {
  return (
   <View>
      <Text style={{ fontSize: 23}}>{ title }</Text>

      <ScrollView  horizontal style={{flexGrow: 1}}>
         {categories.map((category) => (
         <TouchableOpacity
               key={category.id}
               style={styles.cardContainer}
         >
            <Image source={{ uri: category.image }} style={styles.cardImage} />
            <View style={styles.cardOverlay} />
            <Text style={styles.cardTitle}>{category.title}</Text>
         </TouchableOpacity>
         ))}
      </ScrollView>
   </View>
  );
};

const styles = StyleSheet.create({
   cardContainer: {
      width: 130,
      height: 160,
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom: 16,
      marginRight: 16,
   },
   cardImage: {
      width: '100%',
      height: '100%',
   },
   cardOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
   },
   cardTitle: {
      position: 'absolute',
      bottom: 16,
      left: 16,
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
   },
});

export default CategoryCard;