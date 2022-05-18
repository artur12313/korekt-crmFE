import { Component } from "react";
import logo from '../images/logo192.png';

class ProfileInformation extends Component
{
    render(){
        const user = JSON.parse(localStorage.getItem("userData"));
        return(
            <div className="profileInformation d-flex mt-3">
                <div className="col-md-7 p-2 info">
                    <h3>Informacje o profilu</h3>
                    <p>Aktualizuj swoje informacje profilowe oraz adres e-mail.</p>
                </div>
                <div className="col-md-9 box">
                    <form>
                        <div className="form-body p-4">
                            <div className="d-flex flex-column col-4 mb-4">
                                <p>Zdjęcie</p>
                                <img src={logo} alt="Avatar" width="64px" height="64px" className="icoMini" />
                                <button className="btn btn-light text-dark mt-2" id="selectImgAvatar">Wybierz zdjęcie</button>
                            </div>
                            <div className="form-group col-md-6 mb-4">
                            <label>Nazwa:</label>
                            <input type="text" className="form-control" placeholder={user.name}></input>
                            </div>
                            <div className="fomr-group col-md-6 mb-4">
                            <label>Email:</label>
                            <input type="email" className="form-control" placeholder={user.email}></input>
                            </div>
                        </div>
                        <div className="form-footer p-2 d-flex justify-content-end">
                            <button className="btn btn-dark" type="submit">Zapisz</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default ProfileInformation;