import React, { createContext } from 'react'
export const AuthContext = createContext()

const initialState = {
   isLogged: true
}

export const AuthProvider = ({ children }) => {
   return (
      <AuthContext.Provider value={initialState}>
         {children}
      </AuthContext.Provider>
   )
}