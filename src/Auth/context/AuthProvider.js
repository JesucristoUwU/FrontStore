import React, { createContext } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

   const [initialState, setInitialState] = ({
      user: {},
      isLogged: false
   })
   
   const onLogin = (crendenciales) => {

   }
   const onLogout = () => {
      
   }
   
   const onRegister = (credenciales) => {

   }

   return (
      <AuthContext.Provider value={ initialState }>
         {children}
      </AuthContext.Provider>
   )
}