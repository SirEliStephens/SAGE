import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProviderSignup from './pages/ProviderSignup';
import UserSignin from './pages/UserSignin';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/become-provider" element={<ProviderSignup />} />
        <Route path="/signin" element={<UserSignin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;