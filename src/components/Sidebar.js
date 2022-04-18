import { Component } from "react";
import {Link} from 'react-router-dom';

class Sidebar extends Component
{
    render(){
        return(
            <nav className="col-md-2 d-none d-md-block bg-dark text-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link active" to="#">
                    <i className="ti-home c-blue-500"></i>Strona Główna
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/mail">
                    <i className="ti-email"></i>
                    Email
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/calendar">
                    <i className="ti-calendar"></i>
                    Kalendarz
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/chat">
                    <i className="ti-comment-alt"></i>
                    Czat
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categories">
                    <i className="ti-folder"></i>
                    Kategorie
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    <i className="ti-file"></i>
                    Produkty
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/customers">
                    <i className="ti-user"></i>
                    Klienci
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/orders">
                    <i className="ti-bag"></i>
                    Zamówienia
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/settlements">
                    <i className="ti-share-alt"></i>
                    Rozliczenia
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/archive">
                    <i className="ti-archive"></i>
                    Archiwum
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        );
    }
}
export default Sidebar;