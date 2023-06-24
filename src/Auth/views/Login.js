import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthProvider';

export const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Validar el formulario
    if (!email.trim()) {
        setError('Ingrese su correo electrónico');
        return;
    }
    if (!password.trim()) {
      setError('Ingrese su contraseña');
      return;
    }

    // Realizar inicio de sesión
    login({
      correo: email,
      clave: password
    });
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Iniciar sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#666"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#666"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        {error !== '' && <Text style={styles.error}>{error}</Text>}
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginLinkContainer}
          onPress={() => navigation.navigate('register')}
        >
          <Text style={styles.loginLinkText}>¿Crear cuenta?</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#333',
      padding: 20,
   },
   title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 20,
   },
   input: {
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderColor: '#666',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
      color: '#fff',
   },
   buttonContainer: {
      width: '100%',
      height: 50,
      backgroundColor: '#007bff',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
   },
   buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
   },
   loginLinkContainer: {
      marginTop: 10,
   },
   loginLinkText: {
      color: '#fff',
      fontSize: 16,
      textDecorationLine: 'underline',
   },
   error: {
      color: 'red',
      marginBottom: 10,
   },
});