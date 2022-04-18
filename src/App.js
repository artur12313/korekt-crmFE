import React from 'react';
// import Routes from './Routes';
import './App.css';
import './themify-icons.css';
// import bootstrap from 'bootstrap';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Register from './views/auth/Register';
import Login from './views/auth/Login';
import PageNotFound from './views/PageNotFound';
import ProtectedRoutes from './ProtectedRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<PageNotFound />}/>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Dashboard />}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
