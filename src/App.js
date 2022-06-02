import React from 'react';
import './App.css';
import './themify-icons.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Register from './views/auth/Register';
import Login from './views/auth/Login';
import PageNotFound from './views/PageNotFound';
import ProtectedRoutes from './ProtectedRoutes';
import Profile from './views/Profile';
import Categories from './views/warehouse/Categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<PageNotFound />}/>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path='/categories' element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
