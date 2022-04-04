import {Component} from 'react';
import Nav from './layouts/nav';

class Dashboard extends Component
{
      render() {
        const user = JSON.parse(localStorage.getItem("userData"));
        return (
            <div>
                <div>
                    <Nav />
                </div>
            <div className="container  border">
            <h3> HomePage</h3>
            <div className="row">
              <div className="col-xl-9 col-sm-12 col-md-9 text-dark">
                <h5> Welcome, {user.name} </h5> You have Logged in
                successfully.
              </div>
            </div>
            </div>
          </div>
        );
      }
}

export default Dashboard;