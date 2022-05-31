import { Component } from "react";
import axios from "axios";

class PasswordUpdate extends Component
{
    constructor(props){
        super(props);
        this.state = {
            password: '',
            newPassword: '',
            confirmNewPassword: '',
            isLoading: false,
            msg: '',
            msgErr: '',
            userId: ''
        };
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    updatePassword = async (e) => {
        e.preventDefault();
        this.setState({isLoading: true});
        const user = JSON.parse(localStorage.getItem("userData"));
        if(this.state.newPassword === this.state.confirmNewPassword)
        {
            await axios.post('http://127.0.0.1:8000/api/passwordUpdate', {
                password: this.state.password,
                newPassword: this.state.newPassword,
                confirmNewPassword: this.state.confirmNewPassword,
                userId: user.id
            }).then((response) => {
                this.setState({isLoading: true});
                if(response.data.status === 200)
                {
                    this.setState({
                        msg: response.data.message,
                        isLoading: false
                    });
                    setTimeout(() => {
                        this.setState({msg: ''});
                    }, 3000);
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
                if(response.data.status === 500)
                {
                    this.setState({
                        msgErr: 'Kod błędu: 500. Proszę skontaktować się z administratorem. Twoje hasło nie zostało zaktualizowane.',
                    });
                }
                else if (response.data.status === 'failed' && response.data.success === false)
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
                this.setState({msgErr: error.response.status});
                setTimeout(() => {
                    this.setState({isLoading: false});
                }, 1000);
                setTimeout(() => {
                    this.setState({msgErr: ''});
                }, 6000);
            })
        } else 
        {
            this.setState({
                msgErr: 'Nowe hasła nie są takie same!'
            });
            setTimeout(() => {
                this.setState({isLoading: false});
            }, 500);
            setTimeout(() => {
                this.setState({msgErr: ''});
            }, 2000);
        }
        
    }
    render(){
        const isLoading = this.state.isLoading;
        return(
            <div className="PasswordUpdate d-flex">
                <div className="col-md-7 p-2 info">
                    <h3>Aktualizacja Hasła</h3>
                    <p>Upewnij się, że Twoje konto używa długiego, losowego hasła, aby zachować bezpieczeństwo.</p>
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
                    <form onSubmit={this.updatePassword}>
                        <div className="form-body p-4">
                            <div className="form-group col-md-6 mb-4">
                                <label>Aktualne hasło:</label>
                                <input type="password" className="form-control" name="password" onChange={this.handleInput} value={this.state.password} required></input>
                            </div>
                            <div className="form-group col-md-6 mb-4">
                                <label>Nowe hasło:</label>
                                <input type="password" className="form-control" name="newPassword" onChange={this.handleInput} value={this.state.newPassword} required></input>
                            </div>
                            <div className="form-group col-md-6 mb-4">
                                <label>Potwierdź hasło:</label>
                                <input type="password" className="form-control" name="confirmNewPassword" onChange={this.handleInput} value={this.state.confirmNewPassword} required></input>
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
export default PasswordUpdate;