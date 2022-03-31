import axios from "axios";
import { Component } from "react";
import { Link } from 'react-router-dom';

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    login = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://127.0.0.1:8000/api/login', this.state);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
        }
    }

    render() {
        return (
            <div className="container mt-2">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Witaj!</h4>
                                <hr />
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.login}>
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
                                            <Link to="/register" className="link-primary">Zarejestruj się</Link>
                                        </div>
                                        <div className="col-sm d-flex justify-content-end">
                                            <button type="submit" className="btn btn-primary">Zaloguj</button>
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
// function Login() {

//     state = {
//         email: '',
//         password: ''
//     }

//     handleInput = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });

//     }

//     login = async (e) => {
//         e.preventDefault();

//         const res = await axios.post('http://127.0.0.1:8000/api/login', this.state);
//         if(res.data.status === 200)
//         {
//             console.log(res.data.message);
//         }
//     }

//         return (
//         <div className="container mt-2">
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="card">
//                         <div className="card-header">
//                             <h4>Witaj!</h4>
//                             <hr />
//                         </div>
//                         <div className="card-body">
//                             <form onSubmit={this.login}>
//                                 <div className="form-group mb-3">
//                                     <label>E-mail:</label>
//                                     <input type="email" name="email" onChange={this.handleInput} value={this.state.email} className="form-control" />
//                                 </div>
//                                 <div className="form-group mb-3">
//                                     <label>Hasło:</label>
//                                     <input type="password" name="password" onChange={this.handleInput} value={this.state.password} className="form-control" />
//                                 </div>
//                                 <hr />
//                                 <button type="submit" className="btn btn-primary">Zaloguj</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         );
// }
export default Login;