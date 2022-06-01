import axios from "axios";
import { Component } from "react";
import logo from '../images/logo192.png';

class ProfileInformation extends Component
{
    constructor(props){
        super(props);
        this.state = {
            imageURL: '',
            name: '',
            email: '',
            phone: '',
            msg: '',
            msgErr: '',
            userId: '',
            isLoading: false,
        };
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    updateProfile = async (e) => {
        e.preventDefault();
        this.setState({isLoading: true});
        var user = JSON.parse(localStorage.getItem("userData"));
        console.log(user);

        await axios.post('http://127.0.0.1:8000/api/profileUpdate', {
            name: this.state.name,
            email: this.state.email,
            userId: user.id,
            phone: this.state.phone,
        }).then((response) => {
            if(response.data.status === 200)
            {
                this.setState({
                    isLoading: false,
                    msg: response.data.message,
                });
                localStorage.setItem("userData", JSON.stringify(response.data.user));
                console.log(response.data.user);
            }
            if(response.data.status === 500)
                {
                    this.setState({
                        msgErr: 'Kod błędu: 500. Proszę skontaktować się z administratorem. Twoje hasło nie zostało zaktualizowane.',
                    });
                }
            if(response.data.status === "failed" && response.data.success === undefined)
            {
                this.setState({
                    msgErr: response.data.message,
                });
                setTimeout(() => {
                    this.setState({msgErr: ''});
                }, 6000);
            }
            else if(response.data.status === 'failed' && response.data.success === false)
            {
                this.setState({
                    msgErr: response.data.message,
                    isLoading: false
                });
                setTimeout(() => {
                    this.setState({msgErr: ''});
                }, 6000);
            }
        }).catch((error) => {
            console.log(error);
            this.setState({msgErr: error.response.ststus});
            setTimeout(() => {
                this.setState({isLoading: false});
            }, 1000);
            setTimeout(() => {
                this.setState({msgErr: ''});
            }, 6000);
        })
    }

    render(){
        var user = JSON.parse(localStorage.getItem("userData"));
        const isLoading = this.state.isLoading;
        return(
            <div className="profileInformation d-flex mt-3">
                <div className="col-md-7 p-2 info">
                    <h3>Informacje o profilu</h3>
                    <p>Aktualizuj swoje informacje profilowe oraz adres e-mail.</p>
                    {this.state.msgErr ? 
                    (<div className="alert alert-danger">{this.state.msgErr}</div>
                    ) : (
                    <div></div>)}
                    {this.state.msg ?
                    (<div className="alert alert-success">{this.state.msg}</div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="col-md-9 box">
                    <form onSubmit={this.updateProfile}>
                        <div className="form-body p-4">
                            <div className="d-flex flex-column col-5 mb-4">
                                <p>Zdjęcie</p>
                                <img src={logo} alt="Avatar" name="imagePreview" onChange={this.handleInput} width="64px" height="64px" className="icoMini" />
                                <input type="file" name="image" onChange={this.handleInput} accept="image/*" className="mt-3"/>
                            </div>
                            <div className="form-group col-md-6 mb-4">
                            <label>Nazwa:</label>
                            <input type="text" name="name" onChange={this.handleInput} className="form-control" placeholder={user.name}></input>
                            </div>
                            <div className="fomr-group col-md-6 mb-4">
                            <label>Email:</label>
                            <input type="email" name="email" onChange={this.handleInput} className="form-control" placeholder={user.email}></input>
                            </div>
                            <div className="fomr-group col-md-6 mb-4">
                            <label>Telefon:</label>
                            <input type="text" name="phone" onChange={this.handleInput} className="form-control" placeholder={user.phone}></input>
                            </div>
                        </div>
                        <div className="form-footer p-2 d-flex justify-content-end">
                            <button className="btn btn-dark" type="submit">Zapisz {isLoading ? (
                                                <span className="spinner-border spinner-border-sm ml-5"
                                                role="status"
                                                aria-hidden="true"></span>
                                            ) : (
                                                <span></span>
                                            )}</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default ProfileInformation;