import {Component} from 'react';
// import Nav from './layouts/nav';
// import {Link} from 'react-router-dom';
// import Sidebar from './layouts/Sidebar';

class Dashboard extends Component
{
      render() {
        const user = JSON.parse(localStorage.getItem("userData"));
        return (
            <div>
                {/* <div>
                    <Nav />
                </div> */}
            <div className="container-fluid">
            <div className="row">
              {/* <Sidebar /> */}
              <div className="col-xl-9 col-sm-12 col-md-9 text-dark text-center align-self-center">
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