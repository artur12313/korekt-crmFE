import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// function Register() {
//     return (
//         <h1>Register Page!</h1>
//     );
// }
class Register extends Component
{

    state = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    register = async (e) => {
        e.preventDefault();

         await axios.post('http://127.0.0.1:8000/api/register', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        })
        .then(res => {
            console.log(res);
        });
        // console.log(res);
        // if(res.data.status === 200)
        // {
        //     console.log(res.data.message);
        //     this.setState({
        //         name: this.state.name,
        //         email: this.state.email,
        //         passowrd: this.state.password,
        //         password_confirmation: this.state.password_confirmation
        //     });
        // }
    }

    render() {
        return(
            <div className="container mt-2">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Zarejestruj się!</h4>
                            <hr />
                        </div>
                        <div className="card-body">
                            <form method="POST" onSubmit={this.register}>
                            <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                            <div className="form-group mb-3">
                                    <label>Imię i Nazwisko:</label>
                                    <input type="name" name="name" onChange={this.handleInput} value={this.state.name} className="form-control" required/>
                                </div>
                                <div className="form-group mb-3">
                                    <label>E-mail:</label>
                                    <input type="email" name="email" onChange={this.handleInput} value={this.state.email} className="form-control" required/>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Hasło:</label>
                                    <input type="password" name="password" onChange={this.handleInput} value={this.state.password} className="form-control" required/>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Powtórz hasło:</label>
                                    <input type="password" name="password_confirmation" onChange={this.handleInput} value={this.state.password_confirmation} className="form-control" required/>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm">
                                        <Link to="/" className="link-primary">Masz już konto? Zaloguj się</Link>
                                    </div>
                                    <div className="col-sm d-flex justify-content-end">
                                        <button type="submit" className="btn btn-primary">Zarejestruj się</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Register;