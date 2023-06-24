import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [initialState, setInitialState] = useState({
      user: {},
      isLogged: false,
   });

   const register = async (userData) => {
      try {
         const response = await fetch('http://192.168.1.22:8000/api/register', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            nombre: userData.firstName,
            apellido: userData.lastName,
            correo: userData.email,
            clave: userData.password,            
         }),
         });
         const data = await response.json();
         if (response.ok) {
         setInitialState({ user: data.user, isLogged: true });
         } else {
         // Manejar el error en caso de fallo en el registro
         }
      } catch (error) {
         // Manejar el error en caso de fallo en la comunicación con el servidor
      }
   };

   const login = async (userData) => {
      try {
         const response = await fetch('http://192.168.1.22:8000/api/login', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
         });
         const data = await response.json();
         if (response.ok) {
            // Verificar si el usuario está registrado o no
            if (data.error) {
               console.log('El correo o usuario no está registrado');
            } else {
               // El inicio de sesión fue exitoso
               setInitialState({ user: data.user, isLogged: true });
            }
         } else {
            console.log('Error al hacer login');
         }
      } catch (error) {
         console.error(error);
      }
   };   

   const logout = () => {
      setInitialState({ user: {}, isLogged: false });
   };

   return (
      <AuthContext.Provider
         value={{
            initialState,
            register,
            login,
            logout,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};
