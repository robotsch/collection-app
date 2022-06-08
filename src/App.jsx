import Input from "./components/Input"
import './App.css'

import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp";
import HomeLayout from "./components/HomeLayout";
import ProtectedLayout from "./components/ProtectedLayout"

import { AuthProvider } from "./contexts/AuthContext";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<ProtectedLayout />}>
          <Route path="/form" element={<Input/>} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App;
