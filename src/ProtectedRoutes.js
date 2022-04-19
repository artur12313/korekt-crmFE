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
            <div className="row d-flex mx-0">
                <Sidebar />
                <div className="col-auto d-flex bg">
                    <Outlet />
                </div> 
            </div>
        </div>
        
        : <Navigate to="/login" />
    }

export default ProtectedRoutes;