import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SmallCard = ({ url, nombre, precio }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.name}>{nombre}</Text>
      <Text style={styles.price}>{precio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    margin: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 8,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 12,
    color: '#888',
  },
});

export default SmallCard;
