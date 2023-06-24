import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthProvider';


export const Register = ({ navigation }) => {
  const { register } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = () => {
    if (!formData.firstName.trim()) {
      setError('Ingrese su nombre');
      return;
    }
    if (!formData.lastName.trim()) {
      setError('Ingrese su apellido');
      return;
    }
    if (!formData.email.trim()) {
      setError('Ingrese su correo electrónico');
      return;
    }
    if (!formData.password.trim()) {
      setError('Ingrese una contraseña');
      return;
    }

   register(formData); // Llamada a la función de registro del proveedor de autenticación

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
    setError('');
    setSuccessMessage('¡Registro exitoso!');

    // Redireccionar a la pantalla de inicio de sesión después del registro
    navigation.navigate('login');
  };

  const handleChangeText = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#666"
        value={formData.firstName}
        onChangeText={(text) => handleChangeText('firstName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        placeholderTextColor="#666"
        value={formData.lastName}
        onChangeText={(text) => handleChangeText('lastName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#666"
        value={formData.email}
        onChangeText={(text) => handleChangeText('email', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#666"
        secureTextEntry
        value={formData.password}
        onChangeText={(text) => handleChangeText('password', text)}
      />

      {error !== '' && <Text style={styles.error}>{error}</Text>}
      {successMessage !== '' && <Text style={styles.successMessage}>{successMessage}</Text>}

      <TouchableOpacity style={styles.buttonContainer} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginLinkContainer} onPress={() => navigation.navigate('login')}>
        <Text style={styles.loginLinkText}>¿Ya tienes una cuenta? Iniciar sesión</Text>
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
  successMessage: {
    color: 'green',
    marginBottom: 10,
  },
});