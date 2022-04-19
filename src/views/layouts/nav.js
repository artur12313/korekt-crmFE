import { Component } from "react";
import logo from '../../images/logo192.png';
import logo180 from '../../images/logo180x180.png'
import {Link, Navigate} from 'react-router-dom';

class Nav extends Component
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
          return <Navigate to="/login" push={true} />;
        }
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark d-flex justify-content-between">
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                <div className="container-fluid">
                    <div className="col-auto p-0">
                        <Link to="/dashboard" className="link-light text-decoration-none">
                            <img src={logo180} alt="logo" className="nav-logo mx-2"/> Korekt s.c.
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse d-flex justify-content-end userMenu" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                        <div className="dropdown text-end">
                        <Link to="#" className="d-block link-light text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={logo} alt="mdo" width="32" height="32" className="rounded-circle mx-2" />
                            {user.name}
                        </Link>
                        <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" data-popper-placement="bottom-start">
                            <li><Link className="dropdown-item" to="#">New project...</Link></li>
                            <li><Link className="dropdown-item" to="#">Settings</Link></li>
                            <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" to="#" onClick={this.onLogoutHandler}>Wyloguj</Link></li>
                        </ul>
                        </div>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }

}
export default Nav;