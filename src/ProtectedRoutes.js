import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


    const ProtectedRoutes = (props) => {
       const auth =  localStorage.getItem('isLoggedIn');
        return auth ? <Outlet /> : <Navigate to="/login" />
    }

export default ProtectedRoutes;