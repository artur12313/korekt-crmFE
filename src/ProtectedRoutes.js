import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Nav from './views/layouts/nav';
import Sidebar from './views/layouts/Sidebar';


    const ProtectedRoutes = (props) => {
       const auth =  localStorage.getItem('isLoggedIn');
        return auth ? 
        <div>
            <div className="div-navbar">
                <Nav />
            </div>
            <div className="d-flex">
                <Sidebar />
                <div className="col-auto bg page-content">
                    <Outlet />
                </div> 
            </div>
        </div>
        
        : <Navigate to="/login" />
    }

export default ProtectedRoutes;