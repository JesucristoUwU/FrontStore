import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="#888" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Buscar..."
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      position: "relative",
      borderRadius: 20,
      backgroundColor: '#f2f2f2',
      paddingHorizontal: 12,
      paddingVertical: 8,
      marginBottom: 10,
      marginRight: 10,
      marginLeft: 10
   },
   icon: {
      marginRight: 8,
   },
   input: {
      fontSize: 16,
      color: '#333',
   },
});

export default SearchBar;