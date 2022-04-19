import { Component } from "react";
import logo from '../images/logo192.png';

class ProfileInformation extends Component
{
    render(){
        return(
            <div className="profileInformation d-flex mt-3 justify-content-between">
                <div>
                    <h3>Informacje o profilu</h3>
                    <p>Aktualizuj swoje informacje profilowe oraz adres e-mail.</p>
                </div>
                <div>
                    <form>
                        <p>Zdjęcie</p>
                        <img src={logo} alt="Avatar" width="64px" height="64px" />
                        <button className="btn btn-light text-dark">Wybierz nowe zdjęcie</button>
                        <label>Nazwa:</label>
                        <input type="text" className="form-control"></input>
                        <label>Email:</label>
                        <input type="email" className="form-control"></input>
                        <button className="btn btn-primary" type="submit">Zapisz</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default ProfileInformation;