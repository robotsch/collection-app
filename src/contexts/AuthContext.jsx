import React, { useContext, useState } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState()

  const signUp = (email, pw) => {
    return auth.createUserWithEmailAndPAssword(email, pw)
  }

  auth.onAuthStateChanged(user => {
    setUser(user)
  })

  const value = {
    user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}