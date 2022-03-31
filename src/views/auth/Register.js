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
        password: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    register = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://127.0.0.1:8000/api/register', this.state);
        console.log(res);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
            this.setState({
                name: '',
                email: '',
                passowrd: ''
            });
        }
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
                            <form onSubmit={this.register}>
                            <div className="form-group mb-3">
                                    <label>Imię i Nazwisko:</label>
                                    <input type="name" name="name" onChange={this.handleInput} value={this.state.name} className="form-control" />
                                </div>
                                <div className="form-group mb-3">
                                    <label>E-mail:</label>
                                    <input type="email" name="email" onChange={this.handleInput} value={this.state.email} className="form-control" />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Hasło:</label>
                                    <input type="password" name="password" onChange={this.handleInput} value={this.state.password} className="form-control" />
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