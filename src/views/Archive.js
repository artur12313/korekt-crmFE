import { Component } from "react";

class Archive extends Component
{
    render(){
        return(
            <ul className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Archiwum</Link>
                                <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" data-popper-placement="bottom-start">
                                <li><Link className="dropdown-item" to="/archive">Klienci</Link></li>
                                <li><Link className="dropdown-item" to="/orders-archive">Zamówienia</Link></li>
                                <li><Link className="dropdown-item" to="/categories-archive">Kategorie</Link></li>
                                <li><Link className="dropdown-item" to="/products-archive">Produkty</Link></li>
                                </ul>
                            </ul>
        );
    }
}
export default Archive;