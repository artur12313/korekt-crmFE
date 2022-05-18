import { Component } from "react";
import axios from "axios";

class PasswordUpdate extends Component
{
    constructor(props){
        super(props);
        this.state = {
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: '',
            isLoading: false,
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
        
        await axios.post('#', {
            oldPassword: this.state.oldPassword,
            newPassword: this.state.newPassword,
            confirmNewPassword: this.state.confirmNewPassword,
            userId: user.id
        }).then((response) => {
            this.setState({isLoading: true});
            if(response.data.status === 200)
            {

            }
        })
    }
    render(){
        const isLoading = this.state.isLoading;
        return(
            <div className="PasswordUpdate d-flex">
                <div className="col-md-4 p-2 info">
                    <h3>Aktualizacja Hasła</h3>
                    <p>Upewnij się, że Twoje konto używa długiego, losowego hasła, aby zachować bezpieczeństwo.</p>
                </div>
                <div className="col-md-7 box">
                    <form onSubmit={this.updatePassword}>
                        <div className="form-body p-4">
                            <div className="form-group col-md-6 mb-4">
                                <label>Aktualne hasło:</label>
                                <input type="password" className="form-control" name="oldPassword" onChange={this.handleInput} value={this.state.oldPassword} required></input>
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