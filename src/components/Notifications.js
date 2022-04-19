import { Component } from "react";
import {Link} from 'react-router-dom';
import logo from '../images/logo192.png';

class Notifications extends Component
{
    render(){
        const user = JSON.parse(localStorage.getItem("userData"));
        return(
            <div className="notifications d-flex gap-4 text-light">
                <div className="icoWithCounter dropdown">
                    <Link to="#" className="d-block link-light text-decoration-none dropdown-toggle no-after" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="ti-bell"></i>
                        <div class="counter bell text-light">3</div>
                    </Link>
                    <ul className="dropdown-menu text-small notificationsMenu" aria-labelledby="dropdownUser1" data-popper-placement="bottom-start">
                        <li className="p-2"><i className="ti-bell text-dark mx-2"></i><span className="font-semibold black">Powiadomienia</span></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li className="d-flex notification p-2">
                            <img src={logo} alt="avatar" width="48px" height="48px" className="mx-2"/>
                            <div className="content">
                                <span className="text-small"><span className="font-semibold">{user.name}</span> Wysłał ci wiadomość!</span>
                                <span>2 minuty temu</span>
                            </div>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li className="d-flex justify-content-center"><Link to="#" className="text-decoration-none text-color">Pokaż wszystkie powiadomienia! <i className="ti-angle-right"></i></Link></li>
                    </ul>
                </div>
                <div className="icoWithCounter dropdown">
                    <Link to="#" className="d-block link-light text-decoration-none dropdown-toggle no-after" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="ti-email"></i>
                        <div className="counter mail text-light">67</div>
                    </Link>
                    <ul className="dropdown-menu text-small emailsMenu" aria-labelledby="dropdownUser1" data-popper-placement="bottom-start">
                        <li className="p-2"><i className="ti-email px-2"></i><span className="black font-semibold">Najnowsze wiadomości</span></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li className="d-flex notification p-2 align-items-center">
                            <div className="mx-2">
                                <img src={logo} alt="avatar" width="48px" height="48px" />
                            </div>
                            <div className="content">
                                <span className="text-small d-flex justify-content-between"><span className="font-semibold text-small">{user.name}</span> 2 minuty temu</span>
                                <p className="mb-0 text-sm">Tutaj treść wiadomości z ograniczoną liczbą znaków</p>
                            </div>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li className="d-flex justify-content-center"><Link to="#" className="text-decoration-none text-color">Pokaż wszystkie wiadomości! <i className="ti-angle-right"></i></Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Notifications;