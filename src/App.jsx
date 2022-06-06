import { useState } from 'react'
import Input from "./components/Input"
import './App.css'

import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp";
import { AuthProvider } from "./contexts/AuthContext";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Input/>
    </div>
  )
}

export default App;
