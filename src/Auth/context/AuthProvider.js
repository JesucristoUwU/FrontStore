import React, { createContext } from 'react'

export const AuthContext = createContext()

const initialState = {
   user: {},
   isLogged: false
}

export const AuthProvider = ({ children }) => {
   return (
      <AuthContext.Provider value={ initialState }>
         {children}
      </AuthContext.Provider>
   )
}