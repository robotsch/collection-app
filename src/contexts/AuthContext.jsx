import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import { auth, signOut } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [error, setError] = useState()

  const signUp = (email, pw) => {
    createUserWithEmailAndPAssword(auth, email, pw)
      .then((userCredential) => {
        setUser(userCredential.user)
      })
      .catch((err) => {
        setError(err.message)
      })
  }

  const signIn = (email, pw) => {
    signInWithEmailAndPassword(auth, email, pw)
      .then((userCredential) => {
        setUser(userCredential.user)
      })
      .catch((err) => {
        setError(err.message)
      })
  }

  const signOut = () => {
    signOut(auth)
      .then(() => {
        setUser('')
      })
      .catch((err) => {
        setError(err.message)
      })
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