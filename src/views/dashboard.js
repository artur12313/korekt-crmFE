import {Component} from 'react';
import {Navigate} from 'react-router-dom';

class Dashboard extends Component
{
    state = {
        navigate: false,
      };
    
      onLogoutHandler = () => {
        localStorage.clear();
        this.setState({
          navigate: true,
        });
      };
      render() {
        const user = JSON.parse(localStorage.getItem("userData"));
        const { navigate } = this.state;
        if (navigate) {
          return <Navigate to="/" push={true} />;
        }
        return (
          <div className="container  border">
            <h3> HomePage</h3>
            <div className="row">
              <div className="col-xl-9 col-sm-12 col-md-9 text-dark">
                <h5> Welcome, {user.first_name} </h5> You have Logged in
                successfully.
              </div>
              <div className="col-xl-3 col-sm-12 col-md-3">
                <button
                  className="btn btn-primary text-right"
                  onClick={this.onLogoutHandler}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        );
      }
}

export default Dashboard;