import { Component } from "react";

class Settlements extends Component
{
    render(){
        return(
            <ul className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Mój biznes</Link>
            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" data-popper-placement="bottom-start">
            <li><Link className="dropdown-item" to="/customers">Lista klientów</Link></li>
            <li><Link className="dropdown-item" to="/sales">Sprzedaż</Link></li>
            <li><Link className="dropdown-item" to="/offer">Oferta</Link></li>
            <li><Link className="dropdown-item" to="/employess">Pracownicy</Link></li>
            </ul>
        </ul>
        );
    }
}
export default Settlements;