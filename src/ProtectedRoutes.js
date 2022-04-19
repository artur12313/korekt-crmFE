import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Nav from './views/layouts/nav';
import Sidebar from './views/layouts/Sidebar';


    const ProtectedRoutes = (props) => {
       const auth =  localStorage.getItem('isLoggedIn');
        return auth ? 
        <div>
            <div>
                <Nav />
            </div>
            <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-xl-9 col-sm-12 col-md-9 text-dark text-center align-self-center">
                    <Outlet />
                </div> 
            </div>
            </div>
        </div>
        
        : <Navigate to="/login" />
    }

export default ProtectedRoutes;