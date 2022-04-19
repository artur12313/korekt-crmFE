import {Component} from 'react';
// import {Link} from 'react-router-dom';


class Dashboard extends Component
{
      render() {
        const user = JSON.parse(localStorage.getItem("userData"));
        return (
              <div className="text-dark text-center align-self-center">
                <h5> Welcome, {user.name} </h5> You have Logged in
                successfully.
              </div>
        );
      }
}

export default Dashboard;