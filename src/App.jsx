import Input from "./components/Input"
import './App.css'

import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp";
import { AuthProvider } from "./contexts/AuthContext";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/form" element={<Input/>} />
      </Routes>
    </AuthProvider>
  )
}

export default App;
