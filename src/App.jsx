import { useState } from 'react'
import './App.css'

import { AuthProvider } from './contexts/AuthContext'

function App() {

  return (
    <AuthProvider>
      <div>forever</div>
    </AuthProvider>
  )
}

export default App
