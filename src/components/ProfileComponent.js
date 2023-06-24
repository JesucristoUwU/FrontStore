import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileComponent = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={imageSource} style={styles.image} /> */}
      <Text style={styles.name}></Text>
      <Text style={styles.username}>@</Text>
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
   },
   image: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
   },
   name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
   },
   username: {
      fontSize: 16,
      color: '#888',
   },
});

export default ProfileComponent;