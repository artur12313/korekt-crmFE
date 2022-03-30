import React from 'react';
import { Router, Route } from 'react-router-dom';
import Login from './views/Login';

function Routes() {
    return(
        <Router>
            <Route path={"/login"}>
                <Login />
            </Route>
        </Router>
    );
}

export default Routes;