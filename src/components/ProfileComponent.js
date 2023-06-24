import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const ProfileComponent = () => {
   const user = {
      nombre: 'John Doe',
      correo: 'johndoe@example.com',
   };

   return (
      <View style={styles.container}>
         <View style={styles.profileContainer}>
         <View style={styles.profileIcon}>
            <Ionicons name="person-circle-outline" size={80} color="#fff" />
         </View>
         <Text style={styles.username}>{user.nombre}</Text>
         <Text style={styles.email}>{user.correo}</Text>
         </View>
         <TouchableOpacity style={styles.logoutButton}>
         <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
         </TouchableOpacity>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#00297f',
   },
   profileContainer: {
      alignItems: 'center',
      marginBottom: 40,
   },
   profileIcon: {
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: '#888',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
   },
   username: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 10,
   },
   email: {
      fontSize: 16,
      color: '#fff',
      marginBottom: 20,
   },
   logoutButton: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
  },
   logoutButtonText: {
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold',
   },
});