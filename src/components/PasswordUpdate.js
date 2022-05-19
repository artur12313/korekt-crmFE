import { Component } from "react";
import axios from "axios";

class PasswordUpdate extends Component
{
    constructor(props){
        super(props);
        this.state = {
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
            isLoading: false,
            msg: '',
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
        
        await axios.post('http://127.0.0.1:8000/api/password-update', {
            currentPassword: this.state.currentPassword,
            newPassword: this.state.newPassword,
            confirmNewPassword: this.state.confirmNewPassword,
            userId: user.id
        }).then((response) => {
            this.setState({isLoading: true});
            if(response.data.status === 200)
            {
                this.setState({
                    msg: response.data.message,
                });
            }
            if(response.data.status === "failed" && response.data.success === undefined)
            {
                this.setState({
                    msg: response.data.message,
                });
                setTimeout(() => {
                    this.setState({msg: ''});
                }, 2000);
            }
            else if (response.data.status === 'failed' && response.data.success === false)
            {
                this.setState({msg: response.data.message,});
                setTimeout(() => {
                    this.setState({msg: ''});
                }, 2000);
            }
        }).catch((error) => {
            console.log(error);
        })
    }
    render(){
        const isLoading = this.state.isLoading;
        return(
            <div className="PasswordUpdate d-flex">
                <div className="col-md-7 p-2 info">
                    <h3>Aktualizacja Hasła</h3>
                    <p>Upewnij się, że Twoje konto używa długiego, losowego hasła, aby zachować bezpieczeństwo.</p>
                </div>
                <div className="col-md-9 box">
                    <form onSubmit={this.updatePassword}>
                        <div className="form-body p-4">
                            <div className="form-group col-md-6 mb-4">
                                <label>Aktualne hasło:</label>
                                <input type="password" className="form-control" name="currentPassword" onChange={this.handleInput} value={this.state.currentPassword} required></input>
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