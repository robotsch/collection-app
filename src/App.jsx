import { useState } from "react";
import { Container } from "@mui/material";
import "./App.css";

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
      </Routes>
    </AuthProvider>
  );
}

export default App;
