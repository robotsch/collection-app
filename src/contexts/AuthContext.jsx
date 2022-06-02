import { signInWithEmailAndPassword, signOut  } from 'firebase/auth'
import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState()

  const signup = (email, pw) => {
    return auth.createUserWithEmailAndPAssword(email, pw)
  }

  const signin = (email, pw) => {
    return auth.signInWithEmailAndPassword(email, pw)
  }

  const logout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(user => {
      setUser(user)
    })
  
    return unsub
  },[])

  const value = {
    user,
    signup,
    signin,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}