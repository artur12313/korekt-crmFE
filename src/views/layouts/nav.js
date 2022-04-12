import { Component } from "react";
import logo from '../../images/logo192.png';
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
          return <Navigate to="/" push={true} />;
        }
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container row mx-auto d-flex">
                    <div className="col-auto p-0">
                        <Link to="/dashboard" className="link-light text-decoration-none">Korekt s.c.</Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <ul className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Towary i usługi</Link>
                                <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" data-popper-placement="bottom-start">
                                <li><Link className="dropdown-item" to="/kategorie">Kategorie</Link></li>
                                <li><Link className="dropdown-item" to="/products">Produkty</Link></li>
                                <li><Link className="dropdown-item" to="/customers">Klienci</Link></li>
                                <li><Link className="dropdown-item" to="/orders">Zamówienia</Link></li>                       
                                </ul>
                            </ul>
                            <ul className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Mój biznes</Link>
                                <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" data-popper-placement="bottom-start">
                                <li><Link className="dropdown-item" to="/customers">Lista klientów</Link></li>
                                <li><Link className="dropdown-item" to="/sales">Sprzedaż</Link></li>
                                <li><Link className="dropdown-item" to="/offer">Oferta</Link></li>
                                <li><Link className="dropdown-item" to="/employess">Pracownicy</Link></li>
                                </ul>
                            </ul>
                            <ul className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Archiwum</Link>
                                <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" data-popper-placement="bottom-start">
                                <li><Link className="dropdown-item" to="/archive">Klienci</Link></li>
                                <li><Link className="dropdown-item" to="/orders-archive">Zamówienia</Link></li>
                                <li><Link className="dropdown-item" to="/categories-archive">Kategorie</Link></li>
                                <li><Link className="dropdown-item" to="/products-archive">Produkty</Link></li>
                                </ul>
                            </ul>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                        <div className="dropdown text-end">
                        <Link to="#" className="d-block link-light text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={logo} alt="mdo" width="32" height="32" className="rounded-circle" />
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