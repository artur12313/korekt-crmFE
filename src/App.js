import React from 'react';
// import Routes from './Routes';
import './App.css';
// import bootstrap from 'bootstrap';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Register from './views/auth/Register';
import Login from './views/auth/Login';
import PageNotFound from './views/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="*" element={<PageNotFound />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
