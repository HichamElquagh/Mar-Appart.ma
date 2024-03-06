import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import Dash from './pages/dashboard/sidebar';
import Table from './components/tables/usertable';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/table" element={<Table />} />

        
              </Routes>
    </BrowserRouter>
  );
}

export default App;
